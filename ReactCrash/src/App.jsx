import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import WhyChooseUs from './Components/WhyChooseUs';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
