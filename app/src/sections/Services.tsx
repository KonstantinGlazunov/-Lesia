import { useEffect, useRef, useState } from 'react';
import { Eye, Smile, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface Service {
  icon: React.ElementType;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  featureKeys: string[];
  duration: string;
  price: string;
  color: string;
}

export default function Services() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services: Service[] = [
    {
      icon: Eye,
      titleKey: 'services.browsTitle',
      subtitleKey: 'services.browsSub',
      descriptionKey: 'services.browsDesc',
      featureKeys: ['services.browsF1', 'services.browsF2', 'services.browsF3', 'services.browsF4'],
      duration: 'services.durationBrows',
      price: 'services.priceBrows',
      color: 'from-rose-400 to-rose-500',
    },
    {
      icon: Smile,
      titleKey: 'services.lipsTitle',
      subtitleKey: 'services.lipsSub',
      descriptionKey: 'services.lipsDesc',
      featureKeys: ['services.lipsF1', 'services.lipsF2', 'services.lipsF3', 'services.lipsF4'],
      duration: 'services.durationLips',
      price: 'services.priceLips',
      color: 'from-pink-400 to-pink-500',
    },
    {
      icon: Sparkles,
      titleKey: 'services.eyesTitle',
      subtitleKey: 'services.eyesSub',
      descriptionKey: 'services.eyesDesc',
      featureKeys: ['services.eyesF1', 'services.eyesF2', 'services.eyesF3', 'services.eyesF4'],
      duration: 'services.durationEyes',
      price: 'services.priceEyes',
      color: 'from-amber-400 to-amber-500',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-transparent to-amber-50/30" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-rose-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-amber-100/40 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/50 mb-6">
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-medium text-rose-700">{t('services.badge')}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-light text-gray-800 mb-6 leading-tight">
            {t('services.title')}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            {t('services.intro')}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.titleKey}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className={`relative h-full rounded-3xl overflow-hidden bg-white border border-rose-100 transition-all duration-500 ${
                activeService === index ? 'shadow-2xl scale-[1.02] border-rose-300' : 'shadow-lg'
              }`}>
                {/* Header with icon */}
                <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10" />
                  <service.icon className="w-16 h-16 text-white relative z-10" />
                  
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-1">{t(service.titleKey)}</h3>
                  <p className="text-sm text-rose-500 mb-4">{t(service.subtitleKey)}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{t(service.descriptionKey)}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.featureKeys.map((key, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        {t(key)}
                      </li>
                    ))}
                  </ul>

                  {/* Meta info */}
                  <div className="flex items-center justify-between pt-4 border-t border-rose-100">
                    <div>
                      <p className="text-xs text-gray-500">{t('services.duration')}</p>
                      <p className="text-sm font-medium text-gray-700">{t(service.duration)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">{t('services.price')}</p>
                      <p className="text-lg font-semibold text-rose-500">{t(service.price)}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="px-6 pb-6">
                  <Button
                    onClick={scrollToContact}
                    className={`w-full bg-gradient-to-r ${service.color} text-white rounded-xl py-5 transition-all duration-300 group-hover:shadow-lg`}
                  >
                    {t('services.book')}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-rose-200 shadow-lg">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-200 to-amber-200 border-2 border-white flex items-center justify-center"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-800">{t('services.freeConsult')}</p>
              <p className="text-xs text-gray-500">{t('services.freeConsultDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
