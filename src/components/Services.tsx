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

const services = [
  {
    title: 'Sourcing',
    description: 'Identifying and securing high-quality FMCG products from reliable manufacturers globally.',
    icon: Search,
    color: '#3B82F6'
  },
  {
    title: 'Sampling',
    description: 'Rigorous product sampling and evaluation to ensure standards meet your exact specifications.',
    icon: FlaskConical,
    color: '#8B5CF6'
  },
  {
    title: 'Pricing',
    description: 'Competitive price negotiation and transparent cost structures for maximum profitability.',
    icon: CircleDollarSign,
    color: '#10B981'
  },
  {
    title: 'Quality Checks',
    description: 'Comprehensive quality assurance protocols at every stage of the supply chain.',
    icon: ShieldCheck,
    color: '#F59E0B'
  },
  {
    title: 'Logistics',
    description: 'Efficient and secure transportation solutions tailored to FMCG requirements.',
    icon: Truck,
    color: '#EF4444'
  },
  {
    title: 'Warehousing',
    description: 'State-of-the-art storage facilities ensuring product integrity and inventory management.',
    icon: Warehouse,
    color: '#6366F1'
  },
  {
    title: 'Documentation',
    description: 'Expert handling of all export/import paperwork, customs clearance, and certifications.',
    icon: FileText,
    color: '#EC4899'
  },
  {
    title: 'Compliance',
    description: 'Ensuring adherence to international trade laws and regional regulatory standards.',
    icon: Scale,
    color: '#14B8A6'
  }
];

export default function Services() {
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
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-white border border-gray-100 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
                style={{ borderRadius: theme.borderRadius.card }}
              >
                {/* Subtle background glow on hover */}
                <div 
                  className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"
                  style={{ backgroundColor: service.color }}
                />
                
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-50 transition-transform group-hover:scale-110" style={{ backgroundColor: `${service.color}10` }}>
                  <Icon size={28} color={service.color} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-body">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
