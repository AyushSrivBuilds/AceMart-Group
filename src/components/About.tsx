import { theme } from '../theme';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-[100px] bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative w-full h-auto">
              <img 
                src="/logis-whouse-2d.webp" 
                alt="Global Logistics and Warehousing" 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-3xl mb-1">10+</p>
                  <p className="text-sm uppercase tracking-wider opacity-90">Years of Expertise</p>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div 
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl -z-10"
              style={{ backgroundColor: theme.colors.primary, opacity: 0.1 }}
            />
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: theme.colors.primary }}>
              About AceMart Group
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight font-heading">
              Connecting India's FMCG Excellence to the World
            </h3>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed font-body">
              <p>
                AceMart Group is a premier B2B FMCG sourcing and supply chain partner with a growing global clientele. We specialize in bridging the gap between high-quality manufacturers and international markets.
              </p>
              <p>
                Our comprehensive approach ensures that every step—from initial product sampling and rigorous quality checks to complex logistics and compliance documentation—is handled with precision and transparency.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
