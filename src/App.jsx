import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import LeakDetection from "./components/LeakDetection";
import Fleet from "./components/Fleet";
import Projects from "./components/Projects";
import About from "./components/About";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { useReveal } from "./hooks/useReveal";
import "./index.css";

function App() {
  useReveal();

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Statement />
        <Services />
        <Showcase />
        <LeakDetection />
        <Fleet />
        <Projects />
        <About />
        <Process />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
