import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";

export const Login = () => {
  return (
    <>
      <Navbar />
      <div>
        <h3 className="text-3xl font-bold text-blue-600 text-center">
          Login to your account
        </h3>
      </div>
      <Footer />
    </>
  );
};
