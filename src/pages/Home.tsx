import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/hero/Hero";
import { Navbar } from "../components/navbar/Navbar";
import { Overview } from "../components/overview/Overview";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Footer />
    </>
  );
};
