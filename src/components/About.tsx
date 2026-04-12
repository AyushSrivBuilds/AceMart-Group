import { theme } from '../theme';
import type { AboutContent } from '../types/cms';

interface AboutProps {
  data: AboutContent;
}

export default function About({ data }: AboutProps) {
  // Split body on blank lines to recreate the multi-paragraph layout.
  const paragraphs = data.body.split('\n\n').filter(Boolean);

  return (
    <section id="about" className="py-20 lg:py-[100px] bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative w-full h-auto">
              <img 
                src={data.image.url} 
                alt={data.image.alternativeText ?? 'AceMart Group'} 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-3xl mb-1">{data.years_of_expertise}+</p>
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
              {data.eyebrow}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight font-heading">
              {data.heading}
            </h3>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed font-body">
              {paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
