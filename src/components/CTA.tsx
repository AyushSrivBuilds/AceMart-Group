import { MapPin, Mail, Phone } from 'lucide-react';
import { theme } from '../theme';

export default function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-[120px] bg-gray-900 relative overflow-hidden">
      {/* Background pattern matching Markets section */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Text and Contact Info */}
          <div className="flex flex-col justify-center">
            <span 
              className="font-bold tracking-widest text-sm uppercase mb-4"
              style={{ color: theme.colors.primary }}
            >
              Partner With Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading leading-tight">
              Looking to Source or Export <span style={{ color: theme.colors.primary }}>FMCG Products?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-body leading-relaxed">
              Our specialists are ready to discuss your requirements. From wholesale pricing to global compliance, we provide the expertise needed for seamless international commerce.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <MapPin style={{ color: theme.colors.primary }} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Global Headquarters</h4>
                  <p className="text-gray-400 mt-1">Mumbai, Maharashtra, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Mail style={{ color: theme.colors.primary }} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email Us</h4>
                  <p className="text-gray-400 mt-1">contact@acemartgroup.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Phone style={{ color: theme.colors.primary }} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Call Representative</h4>
                  <p className="text-gray-400 mt-1">+91 (22) 2345 6789</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-md">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    placeholder="John Doe"
                    className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ '--tw-ring-color': theme.colors.primary } as React.CSSProperties}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="companyName" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Company Name</label>
                  <input 
                    type="text" 
                    id="companyName" 
                    placeholder="Global Trade Inc."
                    className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ '--tw-ring-color': theme.colors.primary } as React.CSSProperties}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@company.com"
                    className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ '--tw-ring-color': theme.colors.primary } as React.CSSProperties}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ '--tw-ring-color': theme.colors.primary } as React.CSSProperties}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Subject</label>
                <div className="relative">
                  <select 
                    id="subject" 
                    className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:border-transparent transition-all cursor-pointer"
                    defaultValue=""
                    style={{ '--tw-ring-color': theme.colors.primary } as React.CSSProperties}
                  >
                    <option value="" disabled className="text-gray-500">Select an option</option>
                    <option value="sourcing">FMCG Sourcing Inquiry</option>
                    <option value="logistics">Logistics & Supply Chain</option>
                    <option value="compliance">Compliance and Trade Advisory</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-y"
                  style={{ '--tw-ring-color': theme.colors.primary } as React.CSSProperties}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full text-white font-bold text-lg py-4 rounded-lg transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ 
                  backgroundColor: theme.colors.primary,
                  boxShadow: `0 0 20px ${theme.colors.primary}40`
                }}
              >
                Send Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
