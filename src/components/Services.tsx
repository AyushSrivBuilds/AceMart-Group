import { theme } from '../theme';
import type { ServiceCardBlock } from '../types/cms';
import type { LucideIcon } from 'lucide-react';
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

/**
 * ICON_CONFIG — Component Mapper for service icon names.
 *
 * Maps the `icon_name` string stored in Strapi to a Lucide component and a
 * curated brand color. The client can only select from these pre-approved icons
 * via the Strapi Enumeration field, so no unknown icons can reach the UI.
 */
const ICON_CONFIG: Record<string, { Icon: LucideIcon; color: string }> = {
  Search:           { Icon: Search,           color: '#3B82F6' },
  FlaskConical:     { Icon: FlaskConical,     color: '#8B5CF6' },
  CircleDollarSign: { Icon: CircleDollarSign, color: '#10B981' },
  ShieldCheck:      { Icon: ShieldCheck,      color: '#F59E0B' },
  Truck:            { Icon: Truck,            color: '#EF4444' },
  Warehouse:        { Icon: Warehouse,        color: '#6366F1' },
  FileText:         { Icon: FileText,         color: '#EC4899' },
  Scale:            { Icon: Scale,            color: '#14B8A6' },
};

/** Fallback when an unknown icon_name arrives from the CMS. */
const DEFAULT_ICON = { Icon: Search, color: '#6B7280' };

interface ServicesProps {
  blocks: ServiceCardBlock[];
}

export default function Services({ blocks }: ServicesProps) {
  return (
    <section id="services" className="py-20 lg:py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-heading">
            End-to-End Supply Chain Solutions
          </h2>
          <p className="text-lg text-gray-600 font-body">
            We manage every aspect of your FMCG sourcing journey, providing a seamless experience from manufacturer to market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {blocks.map((block) => {
            const { Icon, color } = ICON_CONFIG[block.icon_name] ?? DEFAULT_ICON;
            return (
              <div 
                key={block.id} 
                className="group bg-white border border-gray-100 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
                style={{ borderRadius: theme.borderRadius.card }}
              >
                {/* Subtle background glow on hover */}
                <div 
                  className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"
                  style={{ backgroundColor: color }}
                />
                
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-50 transition-transform group-hover:scale-110" style={{ backgroundColor: `${color}10` }}>
                  <Icon size={28} color={color} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading group-hover:text-primary transition-colors">
                  {block.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-body">
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
