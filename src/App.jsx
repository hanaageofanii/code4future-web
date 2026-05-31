import "./index.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Process />
      <Work />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
