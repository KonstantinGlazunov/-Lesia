import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Prices from './sections/Prices';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Impressum from './sections/Impressum';
import Datenschutz from './sections/Datenschutz';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/30 via-white to-amber-50/20">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Prices />
        <Testimonials />
        <Contact />
        <Impressum />
        <Datenschutz />
      </main>
      <Footer />
    </div>
  );
}

export default App;
