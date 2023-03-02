import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
