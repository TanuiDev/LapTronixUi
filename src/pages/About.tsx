import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
// import laptop from '../../src/assets/images/laptop.jpeg'

import { MdOutlineLocalShipping, MdOutlineSecurity } from "react-icons/md";
import { CiMedal } from "react-icons/ci";

export const About = () => {
  const services = [
    {
      name: "Quality Assurance",
      icon: <MdOutlineSecurity />,
      description:
        "Every product is tested and verified for authenticity and performance",
    },
    {
      name: "Fast Shipping",
      icon: <MdOutlineLocalShipping />,
      description: "Get your products delivered fast and on time",
    },
    {
      name: "Expert Support",
      icon: <CiMedal />,
      description:
        "Our tech specialists are available 24/7 to help you choose the right products.",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="items-center justify-center flex flex-col text-center  space-y-6 px-4">
        <h1 className="text-4xl mt-3 font-bold text-blue-600">
          About TechStore
        </h1>
        {/* <p className="pt-4 text-white font-semibold  sm:text-xl md:text-2xl">
          Your trusted destination for premium laptops and tech accessories
          since 2025.
        </p>        */}

        <div className="card  mt-4 rounded-lg bg-gray-800 p-6">
          <p className="text-white text-lg sm:text-xl md:text-2xl">
            Founded in 2025, TechStore began with a simple mission: to make
            premium technology accessible to everyone. We started as a small
            online retailer and have grown into a trusted destination for tech
            enthusiasts, professionals, and students alike.
          </p>
          <p className="text-white text-sm sm:text-sm md:text-2xl mt-4">
            Our team is passionate about technology and dedicated to providing
            exceptional service. Whether you're a gamer, a creative
            professional, or someone who simply loves staying connected, we have
            the perfect tech solutions for you.
          </p>
        </div>
        <div className="mt-3 p-4">
          <h3 className="text-2xl font-bold text-secondary">Why choose us?</h3>
          <div className="gap-4  sm:w-full md:flex justify-between mb-3 mt-3 space-y-4 ">
            {services.map((service) => (
              <div
                key={service.name}
                className="card w-full md:flex bg-blue-50  shadow-sm items-center  p-3 "
              >
                <div className="text-6xl items-center text-gray-700 pb-10 ">
                  {service.icon}
                </div>
                <h2 className="text-2xl  text-gray-700 text-center ">
                  {service.name}
                </h2>
                <h3 className="text-2xs font-bold text-center text-gray-500 mt-8 ">
                  {service.description}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="card  mt-4 rounded-lg bg-gray-800 p-6">
          <h3 className="text-2xl font-bold text-secondary">Our Commitment</h3>
          <p className="text-white text-sm sm:text-sm md:text-2xl mt-2">
            At TechStore, we are committed to providing our customers with the
            best possible shopping experience. We stand behind our products and
            are always here to help you find the perfect tech solutions.
          </p>
        </div>
        <div className="flex justify-center mb-4">
          <button className="btn btn-primary text-xl">Learn More</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
