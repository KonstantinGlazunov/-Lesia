import { useEffect, useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  service: string;
  rating: number;
  text: string;
  date: string;
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Екатерина М.',
      service: 'Пудровые брови',
      rating: 5,
      text: 'Леся — настоящий профессионал! Брови получились естественными и красивыми. Процедура прошла комфортно, заживление было легким. Теперь утром экономлю кучу времени!',
      date: 'январь 2026',
    },
    {
      id: 2,
      name: 'Марина С.',
      service: 'Перманент губ',
      rating: 5,
      text: 'Долго решалась на перманент губ, но результат превзошел все ожидания! Цвет идеальный, губы выглядят объемнее. Леся подробно объяснила весь процесс и уход.',
      date: 'декабрь 2025',
    },
    {
      id: 3,
      name: 'Анна В.',
      service: 'Межресничка',
      rating: 5,
      text: 'Мечтала о выразительном взгляде без ежедневного подвода. Межресничное пространство — это именно то, что нужно! Естественно, красиво, глаза сразу выглядят ярче.',
      date: 'ноябрь 2025',
    },
    {
      id: 4,
      name: 'Ольга П.',
      service: 'Волосковые брови',
      rating: 5,
      text: 'Волосковая техника — это магия! Брови выглядят абсолютно натуральными, как настоящие. Леся учла все мои пожелания и подобрала идеальную форму.',
      date: 'октябрь 2025',
    },
    {
      id: 5,
      name: 'Наталья К.',
      service: 'Комплекс: брови + губы',
      rating: 5,
      text: 'Сделала сразу брови и губы — лучшее решение! Теперь всегда выгляжу свежей и ухоженной. Спасибо Лесе за терпение и профессионализм!',
      date: 'сентябрь 2025',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/30 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-rose-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-amber-100/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/50 mb-6">
            <MessageCircle className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-medium text-rose-700">Отзывы</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-light text-gray-800 mb-6 leading-tight">
            Что говорят <span className="italic text-gradient">клиенты</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Благодарна каждой клиентке за доверие и теплые слова. 
            Ваши отзывы — лучшая награда за мою работу
          </p>
        </div>

        {/* Testimonials carousel */}
        <div 
          className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-3xl mx-auto">
                    <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-rose-100">
                      {/* Quote icon */}
                      <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center shadow-lg">
                        <Quote className="w-6 h-6 text-white" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-6 pt-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 italic">
                        "{testimonial.text}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                          <p className="text-sm text-rose-500">{testimonial.service}</p>
                        </div>
                        <span className="text-sm text-gray-400">{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-rose-200 flex items-center justify-center hover:bg-rose-50 transition-colors shadow-md"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-gradient-to-r from-rose-400 to-rose-500'
                      : 'bg-rose-200 hover:bg-rose-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-rose-200 flex items-center justify-center hover:bg-rose-50 transition-colors shadow-md"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div 
          className={`mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl font-light text-gradient mb-2">5.0</div>
            <div className="flex justify-center gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-sm text-gray-500">средний рейтинг</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-gradient mb-2">200+</div>
            <div className="text-sm text-gray-500">отзывов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-gradient mb-2">98%</div>
            <div className="text-sm text-gray-500">рекомендуют</div>
          </div>
        </div>
      </div>
    </section>
  );
}
