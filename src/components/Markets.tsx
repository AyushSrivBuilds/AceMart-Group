import { theme } from '../theme';
import { Building2, ShoppingBag, Ship } from 'lucide-react';
import type { MarketItemBlock } from '../types/cms';
import type { LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Building2: Building2,
  ShoppingBag: ShoppingBag,
  Ship: Ship,
};

const DEFAULT_ICON = Building2;

interface MarketsProps {
  blocks?: MarketItemBlock[];
}

const fallbackBlocks: MarketItemBlock[] = [
  {
    id: 1,
    __component: 'sections.market-item',
    title: 'FMCG Distributors',
    description: 'Reliable supply lines for regional and national distribution networks.',
    icon_name: 'Building2'
  },
  {
    id: 2,
    __component: 'sections.market-item',
    title: 'Retail Chains',
    description: 'Direct sourcing for supermarkets, hypermarkets, and convenience stores.',
    icon_name: 'ShoppingBag'
  },
  {
    id: 3,
    __component: 'sections.market-item',
    title: 'Export & Import Businesses',
    description: 'Seamless cross-border trade facilitation and compliance management.',
    icon_name: 'Ship'
  }
];

export default function Markets({ blocks }: MarketsProps) {
  const displayBlocks = blocks && blocks.length > 0 ? blocks : fallbackBlocks;

  return (
    <section id="markets" className="py-24 bg-[#0B1120] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
            Markets We Serve
          </h2>
          <p className="text-lg text-gray-400 font-body">
            Our comprehensive supply chain solutions cater to a diverse range of B2B clients across the global FMCG landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayBlocks.map((block) => {
            const Icon = ICON_MAP[block.icon_name] ?? DEFAULT_ICON;
            return (
              <div 
                key={block.id} 
                className="bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-300 hover:bg-white/10 group"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${theme.colors.primary}20`, color: theme.colors.primary }}
                >
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-heading">
                  {block.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-body">
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
