import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'motion/react';
import { theme } from '../theme';
import { 
  Search, 
  FlaskConical, 
  CircleDollarSign, 
  ShieldCheck, 
  Truck, 
  Warehouse, 
  FileText, 
  Scale 
} from 'lucide-react';

const capabilities = [
  { name: 'Sourcing', icon: Search, color: '#3B82F6' },
  { name: 'Sampling', icon: FlaskConical, color: '#8B5CF6' },
  { name: 'Pricing', icon: CircleDollarSign, color: '#10B981' },
  { name: 'Quality Checks', icon: ShieldCheck, color: '#F59E0B' },
  { name: 'Logistics', icon: Truck, color: '#EF4444' },
  { name: 'Warehousing', icon: Warehouse, color: '#6366F1' },
  { name: 'Documentation', icon: FileText, color: '#EC4899' },
  { name: 'Compliance', icon: Scale, color: '#14B8A6' },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const orbitWrapperRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const centerLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const radius = 260; // Fixed radius of the outermost circle (520 / 2)
      const totalNodes = capabilities.length;
      
      // Position nodes and animate entrance
      nodesRef.current.forEach((node, index) => {
        if (!node) return;
        
        const angle = (index / totalNodes) * Math.PI * 2 - Math.PI / 2; // Start from top
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        // Set initial position, scale, and opacity with hardware acceleration
        gsap.set(node, {
          x: x,
          y: y,
          scale: 0,
          opacity: 0,
          force3D: true // translateZ(0) for sub-pixel rendering
        });

        // Entrance animation
        gsap.to(node, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.5 + index * 0.1,
          ease: "back.out(1.5)"
        });
      });

      // Orbit animation: Rotate the wrapper clockwise continuously
      if (orbitWrapperRef.current) {
        gsap.set(orbitWrapperRef.current, { force3D: true });
        gsap.to(orbitWrapperRef.current, {
          rotation: 360,
          duration: 60, // Slow, buttery rotation
          repeat: -1,
          ease: "none"
        });
      }

      // Counter-rotation: Rotate nodes counter-clockwise to keep them upright
      if (nodesRef.current.length > 0) {
        gsap.to(nodesRef.current, {
          rotation: -360,
          duration: 60,
          repeat: -1,
          ease: "none"
        });
      }

      // Center logo entrance
      if (centerLogoRef.current) {
        gsap.set(centerLogoRef.current, { force3D: true });
        gsap.fromTo(centerLogoRef.current, 
          { scale: 0, opacity: 0, rotation: -45 },
          { scale: 1, opacity: 1, rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" }
        );
      }
    }, containerRef);

    // ResizeObserver to scale the entire 520x520 canvas proportionally
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries.length || !canvasRef.current) return;
      const containerWidth = entries[0].contentRect.width;
      // Calculate scale based on the fixed 520px width
      const scale = containerWidth / 520;
      gsap.set(canvasRef.current, { scale });
    });

    if (orbitContainerRef.current) {
      resizeObserver.observe(orbitContainerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24" ref={containerRef}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-8 z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-bold leading-tight text-gray-900 font-heading">
              Your Trusted Partner in <span style={{ color: theme.colors.primary }}>FMCG Sourcing</span> & Global Supply Chain
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl font-body">
              AceMart Group delivers end-to-end sourcing, compliance, and logistics solutions across India and global markets—ensuring seamless and reliable supply chain operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#services"
                className="px-8 py-4 rounded-md text-white font-medium text-lg transition-all hover:shadow-lg hover:-translate-y-0.5 inline-block text-center"
                style={{ backgroundColor: theme.colors.primary, borderRadius: theme.borderRadius.button }}
              >
                Explore Services
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 rounded-md font-medium text-lg transition-all border-2 hover:bg-gray-50 inline-block text-center"
                style={{ 
                  borderColor: theme.colors.border, 
                  color: theme.colors.text.primary,
                  borderRadius: theme.borderRadius.button 
                }}
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Column: Animated Nodes */}
          <div className="relative flex items-center justify-center h-[400px] sm:h-[500px] lg:h-[600px] w-full">
            {/* Responsive container that defines the available width */}
            <div 
              ref={orbitContainerRef}
              className="relative w-full max-w-[520px] aspect-square flex items-center justify-center"
            >
              {/* Fixed 520x520 canvas that scales proportionally via ResizeObserver */}
              <div 
                ref={canvasRef} 
                className="absolute w-[520px] h-[520px] flex items-center justify-center origin-center"
              >
                {/* Step 3: The Centerpiece (The Glow) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-[300px] h-[300px] rounded-full bg-cyan-400/30 blur-[80px] -translate-x-10 -translate-y-10 will-change-transform"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute w-[300px] h-[300px] rounded-full bg-purple-400/30 blur-[80px] translate-x-10 -translate-y-5 will-change-transform"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute w-[300px] h-[300px] rounded-full bg-pink-400/30 blur-[80px] translate-y-10 will-change-transform"
                  />
                </div>

                {/* Step 1: The Foundation (Concentric Rings) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <svg 
                    width="520"
                    height="520"
                    viewBox="0 0 520 520" 
                    className="animate-[spin_60s_linear_infinite] will-change-transform"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' }}
                  >
                    <defs>
                      <radialGradient id="depth-210" cx="260" cy="260" r="210" gradientUnits="userSpaceOnUse">
                        <stop offset="85%" stopColor="rgba(0,0,0,0)" />
                        <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
                      </radialGradient>
                      <radialGradient id="depth-160" cx="260" cy="260" r="160" gradientUnits="userSpaceOnUse">
                        <stop offset="80%" stopColor="rgba(0,0,0,0)" />
                        <stop offset="100%" stopColor="rgba(0,0,0,0.18)" />
                      </radialGradient>
                      <radialGradient id="depth-100" cx="260" cy="260" r="100" gradientUnits="userSpaceOnUse">
                        <stop offset="70%" stopColor="rgba(0,0,0,0)" />
                        <stop offset="100%" stopColor="rgba(0,0,0,0.22)" />
                      </radialGradient>
                    </defs>
                    {/* 4 Concentric Circles with Colosseum Depth Effect */}
                    <circle cx="260" cy="260" r="260" fill="none" stroke="#E5E7EB" strokeWidth="1" shapeRendering="geometricPrecision" />
                    <circle cx="260" cy="260" r="210" fill="url(#depth-210)" stroke="#E5E7EB" strokeWidth="1" shapeRendering="geometricPrecision" />
                    <circle cx="260" cy="260" r="160" fill="url(#depth-160)" stroke="#E5E7EB" strokeWidth="1" shapeRendering="geometricPrecision" />
                    <circle cx="260" cy="260" r="100" fill="url(#depth-100)" stroke="#E5E7EB" strokeWidth="1" shapeRendering="geometricPrecision" />
                  </svg>
                </div>

                {/* Center Logo */}
                <div 
                  ref={centerLogoRef}
                  className="absolute z-20 w-[136px] h-[136px] rounded-[36px] flex items-center justify-center will-change-transform"
                  style={{
                    background: 'linear-gradient(180deg, #ffffff 0%, #e2e8f0 100%)',
                    padding: '8px',
                    boxShadow: '0 30px 60px -12px rgba(0,0,0,0.25), inset 0 2px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(0,0,0,0.05)'
                  }}
                >
                  <div 
                    className="w-full h-full bg-white rounded-[28px] flex items-center justify-center p-2"
                    style={{
                      boxShadow: '0 8px 20px -4px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,1)'
                    }}
                  >
                    <img 
                      src="/logo.png" 
                      alt="AceMart Group Logo" 
                      className="w-full h-full object-contain" 
                      fetchPriority="high"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Orbiting Nodes Wrapper */}
                <div ref={orbitWrapperRef} className="absolute inset-0 flex items-center justify-center z-30 will-change-transform">
                  {capabilities.map((cap, index) => {
                    const Icon = cap.icon;
                    return (
                      <div
                        key={cap.name}
                        ref={el => { nodesRef.current[index] = el; }}
                        className="absolute group cursor-pointer will-change-transform"
                      >
                        <div className="relative flex flex-col items-center justify-center">
                          {/* Step 2: The "Glassmorphism" Icon Cards */}
                          <div 
                            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform hover:scale-110"
                            style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              backdropFilter: 'blur(12px)',
                              WebkitBackdropFilter: 'blur(12px)',
                              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                              border: '1px solid transparent',
                              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)) padding-box, linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%) border-box'
                            }}
                          >
                            {/* Inner colorful shadow/glow based on icon color to make the icon pop on white background */}
                            <div 
                              className="absolute inset-0 rounded-2xl opacity-20 blur-md -z-10"
                              style={{ backgroundColor: cap.color }}
                            />
                            <Icon size={28} color={cap.color} strokeWidth={2} />
                          </div>
                          
                          <div className="absolute top-20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-gray-900/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-md shadow-lg font-medium pointer-events-none">
                            {cap.name}
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900/90" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
