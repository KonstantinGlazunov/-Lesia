import { Heart, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
    <footer className="relative bg-gradient-to-b from-rose-50/50 to-rose-100/50 pt-16 pb-8">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-light italic text-gradient mb-4">Beauty Studio</h3>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              Профессиональный перманентный макияж в Браунфельсе (Германия). 
              Создаю естественную красоту, подчеркивающую вашу индивидуальность.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/lesia.psy5748"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-rose-200 flex items-center justify-center hover:bg-rose-50 hover:border-rose-300 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-rose-500" />
              </a>
              <a
                href="tel:+4915112345678"
                className="w-10 h-10 rounded-full bg-white border border-rose-200 flex items-center justify-center hover:bg-rose-50 hover:border-rose-300 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-rose-500" />
              </a>
              <a
                href="mailto:info@beautystudio-lesya.de"
                className="w-10 h-10 rounded-full bg-white border border-rose-200 flex items-center justify-center hover:bg-rose-50 hover:border-rose-300 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-rose-500" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-gray-800 mb-4">Навигация</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-600 hover:text-rose-500 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-medium text-gray-800 mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 text-rose-400" />
                <span>+49 151 12345678</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4 text-rose-400" />
                <span>info@beautystudio-lesya.de</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-4 h-4 text-rose-400 mt-0.5" />
                <span>Braunfels, Deutschland</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-rose-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} Beauty Studio · Lesya Afanaseva
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection('impressum')}
                className="text-sm text-gray-500 hover:text-rose-500 transition-colors"
              >
                Impressum
              </button>
              <button
                onClick={() => scrollToSection('datenschutz')}
                className="text-sm text-gray-500 hover:text-rose-500 transition-colors"
              >
                Datenschutz
              </button>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                Сделано с <Heart className="w-4 h-4 text-rose-400 fill-rose-400" /> для вас
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
