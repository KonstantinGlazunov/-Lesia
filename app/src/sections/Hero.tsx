import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, ChevronDown } from 'lucide-react';
import { heroImage } from '@/lib/images';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const parallaxElements = heroRef.current.querySelectorAll('.parallax');
        parallaxElements.forEach((el) => {
          (el as HTMLElement).style.transform = `translateY(${scrolled * 0.3}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beauty Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/30 via-rose-900/20 to-rose-900/40" />
      </div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="parallax absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-rose-300/20 rounded-full blur-3xl animate-float" />
        <div className="parallax absolute top-1/3 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/20 to-rose-200/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="parallax absolute -bottom-32 left-1/4 w-80 h-80 bg-gradient-to-br from-rose-100/30 to-pink-200/20 rounded-full blur-3xl animate-float" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-rose-300 rounded-full animate-pulse-soft" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-amber-300 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-rose-200 rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-rose-200/50 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-rose-500" />
          <span className="text-sm font-medium text-rose-700">{t('hero.badge')}</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight drop-shadow-lg">
          <span className="block italic">Beauty Studio</span>
          <span className="block text-3xl sm:text-4xl md:text-5xl font-normal mt-4 text-white/90">
            {t('hero.subtitle')}
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {t('hero.ctaBook')}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('portfolio')}
            className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full transition-all duration-300"
          >
            {t('hero.ctaPortfolio')}
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-light text-white mb-1 drop-shadow-md">8+</div>
            <div className="text-sm text-white/80">{t('hero.years')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-light text-white mb-1 drop-shadow-md">2000+</div>
            <div className="text-sm text-white/80">{t('hero.clients')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-light text-white mb-1 drop-shadow-md">100%</div>
            <div className="text-sm text-white/80">{t('hero.safety')}</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
}
