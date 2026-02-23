import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'О мастере', id: 'about' },
    { label: 'Услуги', id: 'services' },
    { label: 'Портфолио', id: 'portfolio' },
    { label: 'Цены', id: 'prices' },
    { label: 'Отзывы', id: 'testimonials' },
    { label: 'Контакты', id: 'contact' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-2xl font-light italic transition-colors duration-300 ${
                isScrolled ? 'text-rose-500' : 'text-gray-800'
              }`}
            >
              Beauty Studio
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-rose-500 ${
                    isScrolled ? 'text-gray-700' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => scrollToSection('contact')}
                className={`rounded-full px-6 transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-rose-400 to-rose-500 text-white hover:shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm text-rose-500 border border-rose-200 hover:bg-white'
                }`}
              >
                <Phone className="w-4 h-4 mr-2" />
                Записаться
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-rose-200 flex items-center justify-center"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-rose-100">
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-xl py-6"
              >
                <Phone className="w-5 h-5 mr-2" />
                Записаться на процедуру
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">+49 151 12345678</p>
              <p className="text-sm text-gray-400">Пн–Сб: 10:00 – 20:00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
