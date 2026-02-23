import { useEffect, useRef, useState } from 'react';
import { Camera, Eye, Smile, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioImages } from '@/lib/images';
import { useLanguage } from '@/contexts/LanguageContext';

interface PortfolioItem {
  id: number;
  category: 'brows' | 'lips' | 'eyes';
  titleKey: string;
  descriptionKey: string;
  image: string;
}

export default function Portfolio() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'brows' | 'lips' | 'eyes'>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

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

  const filters = [
    { key: 'all' as const, labelKey: 'portfolio.filterAll', icon: Camera },
    { key: 'brows' as const, labelKey: 'portfolio.filterBrows', icon: Eye },
    { key: 'lips' as const, labelKey: 'portfolio.filterLips', icon: Smile },
    { key: 'eyes' as const, labelKey: 'portfolio.filterEyes', icon: Sparkles },
  ];

  const portfolioItems: PortfolioItem[] = [
    { id: 1, category: 'brows', titleKey: 'portfolio.item1Title', descriptionKey: 'portfolio.item1Desc', image: portfolioImages[0] },
    { id: 2, category: 'lips', titleKey: 'portfolio.item2Title', descriptionKey: 'portfolio.item2Desc', image: portfolioImages[1] },
    { id: 3, category: 'eyes', titleKey: 'portfolio.item3Title', descriptionKey: 'portfolio.item3Desc', image: portfolioImages[2] },
    { id: 4, category: 'brows', titleKey: 'portfolio.item4Title', descriptionKey: 'portfolio.item4Desc', image: portfolioImages[3] },
    { id: 5, category: 'lips', titleKey: 'portfolio.item5Title', descriptionKey: 'portfolio.item5Desc', image: portfolioImages[4] },
    { id: 6, category: 'eyes', titleKey: 'portfolio.item6Title', descriptionKey: 'portfolio.item6Desc', image: portfolioImages[5] },
    { id: 7, category: 'brows', titleKey: 'portfolio.item7Title', descriptionKey: 'portfolio.item7Desc', image: portfolioImages[6] },
    { id: 8, category: 'lips', titleKey: 'portfolio.item8Title', descriptionKey: 'portfolio.item8Desc', image: portfolioImages[7] },
    { id: 9, category: 'eyes', titleKey: 'portfolio.item9Title', descriptionKey: 'portfolio.item9Desc', image: portfolioImages[8] },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const navigateItem = (direction: 'prev' | 'next') => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
      : (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[newIndex]);
  };

  return (
    <section
      ref={sectionRef}
      id="portfolio"
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
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/50 mb-6">
            <Camera className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-medium text-rose-700">{t('portfolio.badge')}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-light text-gray-800 mb-6 leading-tight">
            {t('portfolio.title')}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            {t('portfolio.intro')}
          </p>
        </div>

        {/* Filters */}
        <div 
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-rose-400 to-rose-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-rose-50 border border-rose-100'
              }`}
            >
              <filter.icon className="w-4 h-4" />
              {t(filter.labelKey)}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onClick={() => setSelectedItem(item)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={t(item.titleKey)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content on hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs text-white/70 uppercase tracking-wider mb-1">
                  {item.category === 'brows' ? t('portfolio.filterBrows') : item.category === 'lips' ? t('portfolio.filterLips') : t('portfolio.filterEyes')}
                </span>
                <h3 className="text-xl font-medium text-white mb-1">{t(item.titleKey)}</h3>
                <p className="text-sm text-white/80">{t(item.descriptionKey)}</p>
              </div>

              {/* Corner badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div 
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: '2000+', labelKey: 'portfolio.stat1' },
            { value: '98%', labelKey: 'portfolio.stat2' },
            { value: '8', labelKey: 'portfolio.stat3' },
            { value: '50+', labelKey: 'portfolio.stat4' },
          ].map((stat) => (
            <div
              key={stat.labelKey}
              className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-rose-100"
            >
              <div className="text-3xl font-light text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelectedItem(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateItem('prev'); }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateItem('next'); }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div 
            className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-square sm:aspect-video">
              <img
                src={selectedItem.image}
                alt={t(selectedItem.titleKey)}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <span className="text-sm text-rose-500 uppercase tracking-wider">
                {selectedItem.category === 'brows' ? t('portfolio.filterBrows') : selectedItem.category === 'lips' ? t('portfolio.filterLips') : t('portfolio.filterEyes')}
              </span>
              <h3 className="text-2xl font-medium text-gray-800 mt-2 mb-2">{t(selectedItem.titleKey)}</h3>
              <p className="text-gray-600">{t(selectedItem.descriptionKey)}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
