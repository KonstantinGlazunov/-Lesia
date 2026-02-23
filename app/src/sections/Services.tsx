import { useEffect, useRef, useState } from 'react';
import { Eye, Smile, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Service {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  duration: string;
  price: string;
  color: string;
}

export default function Services() {
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
      title: 'Перманент бровей',
      subtitle: 'Идеальная форма каждый день',
      description: 'Создание идеальной формы бровей с учетом типа лица, цвета кожи и волос. Естественный результат, который сохраняется до 2 лет.',
      features: [
        'Индивидуальный эскиз',
        'Подбор идеального цвета',
        'Безболезненная процедура',
        'Заживление 7-10 дней',
      ],
      duration: '2-2.5 часа',
      price: 'от 120 €',
      color: 'from-rose-400 to-rose-500',
    },
    {
      icon: Smile,
      title: 'Перманент губ',
      subtitle: 'Объем и цвет без инъекций',
      description: 'Придание губам естественного объема, четкого контура и красивого оттенка. Техника позволяет визуально увеличить губы без филлеров.',
      features: [
        'Естественный объем',
        'Четкий контур',
        'Коррекция асимметрии',
        'Эффект до 2 лет',
      ],
      duration: '2.5-3 часа',
      price: 'от 150 €',
      color: 'from-pink-400 to-pink-500',
    },
    {
      icon: Sparkles,
      title: 'Перманент век',
      subtitle: 'Выразительный взгляд',
      description: 'Создание эффекта подведенных глаз. Межресничное пространство визуально делает взгляд более открытым и выразительным.',
      features: [
        'Увеличение глаз',
        'Эффект накрашенных ресниц',
        'Стойкий результат',
        'Подходит для всех',
      ],
      duration: '1.5-2 часа',
      price: 'от 100 €',
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
            <span className="text-sm font-medium text-rose-700">Услуги</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-light text-gray-800 mb-6 leading-tight">
            Профессиональный <span className="italic text-gradient">перманентный макияж</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Предлагаю полный спектр услуг по перманентному макияжу. Каждая процедура 
            проводится с использованием премиальных материалов и современного оборудования.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
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
                  <h3 className="text-xl font-medium text-gray-800 mb-1">{service.title}</h3>
                  <p className="text-sm text-rose-500 mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Meta info */}
                  <div className="flex items-center justify-between pt-4 border-t border-rose-100">
                    <div>
                      <p className="text-xs text-gray-500">Длительность</p>
                      <p className="text-sm font-medium text-gray-700">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Стоимость</p>
                      <p className="text-lg font-semibold text-rose-500">{service.price}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="px-6 pb-6">
                  <Button
                    onClick={scrollToContact}
                    className={`w-full bg-gradient-to-r ${service.color} text-white rounded-xl py-5 transition-all duration-300 group-hover:shadow-lg`}
                  >
                    Записаться
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
              <p className="text-sm font-medium text-gray-800">Бесплатная консультация</p>
              <p className="text-xs text-gray-500">Подбор формы и ответы на вопросы</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
