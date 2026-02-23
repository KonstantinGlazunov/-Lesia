import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SCROLL_THRESHOLD = 400;

export default function ScrollToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t('scrollToTop.label')}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
