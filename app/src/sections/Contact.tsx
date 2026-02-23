import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Send, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+49 151 12345678',
      href: 'tel:+4915112345678',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@lesia.psy5748',
      href: 'https://instagram.com/lesia.psy5748',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@beautystudio-lesya.de',
      href: 'mailto:info@beautystudio-lesya.de',
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: 'Braunfels, Deutschland',
      href: 'https://www.google.com/maps/search/Braunfels',
    },
    {
      icon: Clock,
      title: 'Режим работы',
      value: 'Пн–Сб: 10:00 – 20:00',
      href: '#',
    },
  ];

  const services = [
    'Пудровые брови',
    'Волосковые брови',
    'Комбинированные брови',
    'Акварельные губы',
    'Контур губ',
    'Межресничное пространство',
    'Стрелки',
    'Консультация',
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-amber-50/20 to-rose-50/30" />

      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-rose-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/50 mb-6">
            <Calendar className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-medium text-rose-700">Запись</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-light text-gray-800 mb-6 leading-tight">
            Запишитесь на <span className="italic text-gradient">процедуру</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Оставьте заявку, и я свяжусь с вами в ближайшее время для согласования 
            удобной даты и времени
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div 
            className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={`group flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-rose-100 hover:border-rose-300 hover:shadow-lg transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center group-hover:from-rose-200 group-hover:to-rose-300 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="font-medium text-gray-800 group-hover:text-rose-600 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden bg-gradient-to-br from-rose-100 to-amber-100 h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-rose-400 mx-auto mb-2" />
                <p className="text-gray-600">Braunfels, Deutschland</p>
                <p className="text-sm text-gray-500">Перманентный макияж в Гессене</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div 
            className={`lg:col-span-3 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-rose-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6 animate-pulse-soft">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-800 mb-2">Спасибо за заявку!</h3>
                  <p className="text-gray-600">Я свяжусь с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700">Ваше имя</Label>
                      <Input
                        id="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="rounded-xl border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+49 151 12345678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="rounded-xl border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-gray-700">Услуга</Label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-rose-200 px-4 py-2.5 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all"
                      required
                    >
                      <option value="">Выберите услугу</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700">Комментарий (необязательно)</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о желаемом результате или задайте вопрос..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-xl border-rose-200 focus:border-rose-400 focus:ring-rose-400 min-h-[120px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white rounded-xl py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Отправить заявку
                  </Button>

                  <p className="text-center text-sm text-gray-500">
                    Нажимая кнопку, вы соглашаетесь с <button type="button" onClick={() => document.getElementById('datenschutz')?.scrollIntoView({ behavior: 'smooth' })} className="underline hover:text-rose-600">политикой конфиденциальности</button>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
