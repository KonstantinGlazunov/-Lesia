import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navigation() {
  const { t, locale, setLocale } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { labelKey: 'nav.about', id: 'about' },
    { labelKey: 'nav.services', id: 'services' },
    { labelKey: 'nav.portfolio', id: 'portfolio' },
    { labelKey: 'nav.prices', id: 'prices' },
    { labelKey: 'nav.testimonials', id: 'testimonials' },
    { labelKey: 'nav.contact', id: 'contact' },
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
            {isHome ? (
              <button
                onClick={() => scrollToSection('hero')}
                className={`text-2xl font-light italic transition-colors duration-300 ${
                  isScrolled ? 'text-rose-500' : 'text-gray-800'
                }`}
              >
                Beauty Studio
              </button>
            ) : (
              <Link
                to="/"
                className={`text-2xl font-light italic transition-colors duration-300 ${
                  isScrolled ? 'text-rose-500' : 'text-gray-800'
                }`}
              >
                Beauty Studio
              </Link>
            )}

            {/* Desktop Links + Language */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) =>
                isHome ? (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-sm font-medium transition-colors duration-300 hover:text-rose-500 ${
                      isScrolled ? 'text-gray-700' : 'text-gray-700'
                    }`}
                  >
                    {t(link.labelKey)}
                  </button>
                ) : (
                  <Link
                    key={link.id}
                    to={`/#${link.id}`}
                    className={`text-sm font-medium transition-colors duration-300 hover:text-rose-500 ${
                      isScrolled ? 'text-gray-700' : 'text-gray-700'
                    }`}
                  >
                    {t(link.labelKey)}
                  </Link>
                )
              )}

              {/* Language switcher */}
              <div className="flex items-center gap-0.5 ml-2 pl-4 border-l border-rose-200/60">
                <button
                  onClick={() => setLocale('ru')}
                  className={`px-2.5 py-1 rounded text-sm font-medium transition-colors ${
                    locale === 'ru'
                      ? 'bg-rose-500 text-white'
                      : 'text-gray-500 hover:text-rose-600'
                  }`}
                  aria-label="Русский"
                >
                  RU
                </button>
                <button
                  onClick={() => setLocale('de')}
                  className={`px-2.5 py-1 rounded text-sm font-medium transition-colors ${
                    locale === 'de'
                      ? 'bg-rose-500 text-white'
                      : 'text-gray-500 hover:text-rose-600'
                  }`}
                  aria-label="Deutsch"
                >
                  DE
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              {isHome ? (
                <Button
                  onClick={() => scrollToSection('contact')}
                  className={`rounded-full px-6 transition-all duration-300 ${
                    isScrolled
                      ? 'bg-gradient-to-r from-rose-400 to-rose-500 text-white hover:shadow-lg'
                      : 'bg-white/80 backdrop-blur-sm text-rose-500 border border-rose-200 hover:bg-white'
                  }`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {t('nav.book')}
                </Button>
              ) : (
                <Link to="/#contact">
                  <Button
                    className={`rounded-full px-6 transition-all duration-300 ${
                      isScrolled
                        ? 'bg-gradient-to-r from-rose-400 to-rose-500 text-white hover:shadow-lg'
                        : 'bg-white/80 backdrop-blur-sm text-rose-500 border border-rose-200 hover:bg-white'
                    }`}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {t('nav.book')}
                  </Button>
                </Link>
              )}
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
              {navLinks.map((link, index) =>
                isHome ? (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {t(link.labelKey)}
                  </button>
                ) : (
                  <Link
                    key={link.id}
                    to={`/#${link.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {t(link.labelKey)}
                  </Link>
                )
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-rose-100">
              {isHome ? (
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-xl py-6"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t('nav.bookProcedure')}
                </Button>
              ) : (
                <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-xl py-6">
                    <Phone className="w-5 h-5 mr-2" />
                    {t('nav.bookProcedure')}
                  </Button>
                </Link>
              )}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">+49 151 12345678</p>
              <p className="text-sm text-gray-400">{t('nav.hours')}</p>
            </div>

            {/* Language switcher mobile */}
            <div className="mt-6 pt-6 border-t border-rose-100 flex justify-center gap-2">
              <button
                onClick={() => { setLocale('ru'); setIsMobileMenuOpen(false); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${locale === 'ru' ? 'bg-rose-500 text-white' : 'bg-rose-50 text-gray-600'}`}
              >
                RU
              </button>
              <button
                onClick={() => { setLocale('de'); setIsMobileMenuOpen(false); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${locale === 'de' ? 'bg-rose-500 text-white' : 'bg-rose-50 text-gray-600'}`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
