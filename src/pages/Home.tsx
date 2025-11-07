import { Footer } from "../components/footer/Footer";
import Featured from "../components/hero/Featured";
import { Hero } from "../components/hero/Hero";
import { Overview } from "../components/hero/Overview";
import { Navbar } from "../components/navbar/Navbar";


export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-conic-330">
        <Hero />
        <Overview /> 
        <Featured />     
      </div>
      <Footer />
    </>
  );
};
