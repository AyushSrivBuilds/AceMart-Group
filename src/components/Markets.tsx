import { theme } from '../theme';
import { Store, ShoppingCart, Ship, PackageOpen, Handshake } from 'lucide-react';

const markets = [
  {
    title: 'FMCG Distributors',
    description: 'Reliable supply lines for regional and national distribution networks.',
    icon: Store,
  },
  {
    title: 'Retail Chains',
    description: 'Direct sourcing for supermarkets, hypermarkets, and convenience stores.',
    icon: ShoppingCart,
  },
  {
    title: 'Export & Import Businesses',
    description: 'Seamless cross-border trade facilitation and compliance management.',
    icon: Ship,
  },
  {
    title: 'Bulk Buyers',
    description: 'Volume procurement with competitive pricing and quality assurance.',
    icon: PackageOpen,
  },
  {
    title: 'International Trade Partners',
    description: 'Strategic alliances for global market expansion and product sourcing.',
    icon: Handshake,
  }
];

export default function Markets() {
  return (
    <section id="markets" className="py-20 lg:py-[100px] bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-heading">
            Markets We Serve
          </h2>
          <p className="text-lg text-gray-400 font-body">
            Our comprehensive supply chain solutions cater to a diverse range of B2B clients across the global FMCG landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {markets.map((market, index) => {
            const Icon = market.icon;
            return (
              <div 
                key={index} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: theme.colors.primary }}
                  >
                    <Icon size={24} color="white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold font-heading">
                    {market.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 leading-relaxed font-body">
                  {market.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
