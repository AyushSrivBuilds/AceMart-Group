import { theme } from '../theme';
import { ShieldCheck, Zap, Globe, Scale } from 'lucide-react';
import type { WhyChooseItemBlock } from '../types/cms';
import type { LucideIcon } from 'lucide-react';

/**
 * ICON_MAP maps icon_name strings from CMS to Lucide components.
 */
const ICON_MAP: Record<string, LucideIcon> = {
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Globe: Globe,
  Scale: Scale,
};

const DEFAULT_ICON = ShieldCheck;

interface WhyChooseUsProps {
  blocks?: WhyChooseItemBlock[];
}

// Fallback data if CMS blocks are not provided/published yet.
const fallbackBlocks: WhyChooseItemBlock[] = [
  {
    id: 1,
    __component: 'sections.why-choose-item',
    title: 'End-to-End Solutions',
    description: 'From manufacturer sourcing to final destination delivery, we manage the entire supply chain lifecycle.',
    icon_name: 'ShieldCheck'
  },
  {
    id: 2,
    __component: 'sections.why-choose-item',
    title: 'Industry Expertise',
    description: 'Deep understanding of FMCG market dynamics, product categories, and manufacturer capabilities.',
    icon_name: 'Zap'
  },
  {
    id: 3,
    __component: 'sections.why-choose-item',
    title: 'Global Reach',
    description: 'Extensive network of international trade partners, distributors, and logistics providers.',
    icon_name: 'Globe'
  },
  {
    id: 4,
    __component: 'sections.why-choose-item',
    title: 'Compliance & Advisory',
    description: 'Expert guidance on international trade regulations, customs, and product certifications.',
    icon_name: 'Scale'
  }
];

export default function WhyChooseUs({ blocks }: WhyChooseUsProps) {
  const displayBlocks = blocks && blocks.length > 0 ? blocks : fallbackBlocks;

  return (
    <section id="why-us" className="py-20 bg-gray-50/50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Why Choose AceMart Group
          </h2>
          <p className="text-lg text-gray-600 font-body">
            We are more than just a sourcing agent; we are your strategic partner in global FMCG trade, committed to reliability and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayBlocks.map((block) => {
            const Icon = ICON_MAP[block.icon_name] ?? DEFAULT_ICON;
            return (
              <div 
                key={block.id} 
                className="bg-white border border-gray-100 p-8 text-center transition-all duration-300 hover:shadow-lg rounded-2xl"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: `${theme.colors.primary}10`, color: theme.colors.primary }}
                >
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">
                  {block.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-body">
                  {block.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
