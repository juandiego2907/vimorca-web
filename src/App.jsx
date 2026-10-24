import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import LeakDetection from "./components/LeakDetection";
import Projects from "./components/Projects";
import About from "./components/About";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <LeakDetection />
        <Projects />
        <About />
        <Process />
        <CTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;