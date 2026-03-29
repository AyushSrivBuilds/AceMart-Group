import { theme } from '../theme';
import { Layers, Lightbulb, Globe2, FileCheck } from 'lucide-react';

const reasons = [
  {
    title: 'End-to-End Solutions',
    description: 'From manufacturer sourcing to final destination delivery, we manage the entire supply chain lifecycle.',
    icon: Layers,
  },
  {
    title: 'Industry Expertise',
    description: 'Deep understanding of FMCG market dynamics, product categories, and manufacturer capabilities.',
    icon: Lightbulb,
  },
  {
    title: 'Global Reach',
    description: 'Extensive network of international trade partners, distributors, and logistics providers.',
    icon: Globe2,
  },
  {
    title: 'Compliance & Advisory',
    description: 'Expert guidance on international trade regulations, customs, and product certifications.',
    icon: FileCheck,
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Why Choose AceMart Group
          </h2>
          <p className="text-lg text-gray-600 font-body">
            We are more than just a sourcing agent; we are your strategic partner in global FMCG trade, committed to reliability and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${theme.colors.primary}15` }}
                >
                  <Icon size={32} color={theme.colors.primary} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-body">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
