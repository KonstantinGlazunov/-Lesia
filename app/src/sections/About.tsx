import { useEffect, useRef, useState } from 'react';
import { Award, Heart, Shield, Star } from 'lucide-react';
import { masterImage } from '@/lib/images';

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Award,
      title: 'Сертифицированный мастер',
      description: 'Дипломы международных академий перманентного макияжа',
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Стерильные материалы и одноразовые расходники',
    },
    {
      icon: Heart,
      title: 'Индивидуальный подход',
      description: 'Подбор формы и цвета под ваш тип внешности',
    },
    {
      icon: Star,
      title: 'Премиум материалы',
      description: 'Только сертифицированные пигменты премиум-класса',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={masterImage}
                  alt="Леся Афанасьева - мастер перманентного макияжа"
                  className="w-full h-full object-cover"
                />
                
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Опыт работы</p>
                    <p className="text-xl font-semibold text-gray-800">8+ лет</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-rose-200 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 left-1/4 w-16 h-16 bg-amber-100 rounded-full blur-xl" />
            </div>
          </div>

          {/* Content side */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/50 mb-6">
              <Star className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-medium text-rose-700">О мастере</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-light text-gray-800 mb-6 leading-tight">
              Создаю красоту с <span className="italic text-gradient">любовью</span> и вниманием к деталям
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Меня зовут Леся, и я — сертифицированный мастер перманентного макияжа с 8-летним опытом. Живу и работаю в Браунфельсе (Германия). 
                Моя миссия — подчеркнуть естественную красоту каждой женщины, создавая гармоничный 
                и естественный образ.
              </p>
              <p>
                Я постоянно совершенствую свои навыки, посещая мастер-классы и курсы повышения квалификации 
                у лучших специалистов мира. В работе использую только премиальные материалы и пигменты 
                с сертификатами качества.
              </p>
              <p>
                Для меня важно, чтобы каждая клиентка чувствовала себя особенной и уверенной в себе. 
                Индивидуальный подход и тщательный подбор формы и цвета — залог идеального результата.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-rose-100 hover:border-rose-300 hover:shadow-lg transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center flex-shrink-0 group-hover:from-rose-200 group-hover:to-rose-300 transition-all duration-300">
                      <feature.icon className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
