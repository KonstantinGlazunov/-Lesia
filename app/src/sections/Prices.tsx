import { useEffect, useRef, useState } from 'react';
import { Check, Sparkles, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface PriceItem {
  nameKey: string;
  descriptionKey: string;
  price: string;
}

interface PriceCategory {
  titleKey: string;
  icon: React.ElementType;
  items: PriceItem[];
  color: string;
}

export default function Prices() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const priceCategories: PriceCategory[] = [
    {
      titleKey: 'prices.categoryBrows',
      icon: Sparkles,
      color: 'from-rose-400 to-rose-500',
      items: [
        { nameKey: 'prices.itemPowder', descriptionKey: 'prices.itemPowderDesc', price: '150 €' },
        { nameKey: 'prices.itemHair', descriptionKey: 'prices.itemHairDesc', price: '180 €' },
        { nameKey: 'prices.itemCombo', descriptionKey: 'prices.itemComboDesc', price: '200 €' },
        { nameKey: 'prices.itemCorrectionBrows', descriptionKey: 'prices.itemCorrectionBrowsDesc', price: '50 €' },
      ],
    },
    {
      titleKey: 'prices.categoryLips',
      icon: Crown,
      color: 'from-pink-400 to-pink-500',
      items: [
        { nameKey: 'prices.itemAqua', descriptionKey: 'prices.itemAquaDesc', price: '180 €' },
        { nameKey: 'prices.itemContour', descriptionKey: 'prices.itemContourDesc', price: '200 €' },
        { nameKey: 'prices.item3d', descriptionKey: 'prices.item3dDesc', price: '250 €' },
        { nameKey: 'prices.itemCorrectionLips', descriptionKey: 'prices.itemCorrectionLipsDesc', price: '60 €' },
      ],
    },
    {
      titleKey: 'prices.categoryEyes',
      icon: Star,
      color: 'from-amber-400 to-amber-500',
      items: [
        { nameKey: 'prices.itemInterlash', descriptionKey: 'prices.itemInterlashDesc', price: '120 €' },
        { nameKey: 'prices.itemArrowClassic', descriptionKey: 'prices.itemArrowClassicDesc', price: '150 €' },
        { nameKey: 'prices.itemArrowSoft', descriptionKey: 'prices.itemArrowSoftDesc', price: '180 €' },
        { nameKey: 'prices.itemCorrectionEyes', descriptionKey: 'prices.itemCorrectionEyesDesc', price: '40 €' },
      ],
    },
  ];

  const additionalServices = [
    { nameKey: 'prices.extraConsult', priceKey: 'prices.extraConsultPrice' },
    { nameKey: 'prices.extraAnesthesia', priceKey: 'prices.extraAnesthesiaPrice' },
    { nameKey: 'prices.extraCare', priceKey: 'prices.extraCarePrice' },
    { nameKey: 'prices.extraRetouch', priceKey: 'prices.extraRetouchPrice' },
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
      id="prices"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-rose-50/20 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-rose-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/50 mb-6">
            <Star className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-medium text-rose-700">{t('prices.badge')}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-light text-gray-800 mb-6 leading-tight">
            {t('prices.title')}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            {t('prices.intro')}
          </p>
        </div>

        {/* Price cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {priceCategories.map((category, catIndex) => (
            <div
              key={category.titleKey}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + catIndex * 150}ms` }}
            >
              <div className="h-full rounded-3xl overflow-hidden bg-white border border-rose-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${category.color}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-medium text-white">{t(category.titleKey)}</h3>
                  </div>
                </div>

                {/* Price list */}
                <div className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <div
                        key={item.nameKey}
                        className="flex items-start justify-between gap-4 p-4 rounded-xl bg-rose-50/50 hover:bg-rose-50 transition-colors duration-300"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 mb-1">{t(item.nameKey)}</h4>
                          <p className="text-sm text-gray-500">{t(item.descriptionKey)}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-semibold text-rose-500">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <Button
                    onClick={scrollToContact}
                    className={`w-full bg-gradient-to-r ${category.color} text-white rounded-xl py-5 hover:shadow-lg transition-all duration-300`}
                  >
                    {t('prices.book')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional services */}
        <div 
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="rounded-3xl bg-white/80 backdrop-blur-sm border border-rose-100 p-8 shadow-lg">
            <h3 className="text-2xl font-medium text-gray-800 mb-6 text-center">{t('prices.extraTitle')}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service) => (
                <div
                  key={service.nameKey}
                  className="flex items-center gap-3 p-4 rounded-xl bg-rose-50/50"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{t(service.nameKey)}</p>
                    <p className="text-sm text-rose-500">{t(service.priceKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment info */}
        <div 
          className={`mt-8 text-center transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-500">
            {t('prices.paymentNote')}
          </p>
        </div>
      </div>
    </section>
  );
}
