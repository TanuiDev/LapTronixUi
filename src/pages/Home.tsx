import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-3xl font-bold pt-5 ml-2">Welcome To LapTronix</h1>
      </div>
      <Footer />
    </>
  );
};
