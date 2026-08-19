import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import WhyChooseUs from './Components/WhyChooseUs';
import Portfolio from './Components/Portfolio';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
