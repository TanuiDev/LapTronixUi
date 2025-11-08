import { TbShoppingBagCheck } from "react-icons/tb";
import { NavLink } from "react-router";
// import laptop from '../../assets/images/laptop.jpeg'

export const Hero = () => {
  return (
    <>
      <div className="card rounded-lg bg-gray-800 mt-3 p-3 h-fit pl-4  bg-cover br-2 shadow-lg ">
        <h1 className="text-4xl font-bold text-secondary">
          Premium Tech at Your Fingertips
        </h1>
        <p className="pt-4 text-white  font-semibold h-60 sm:text-2xl md:text-4xl">
          Discover the latest laptops, accessories, and tech gear from top
          brands. <br /> Quality you can trust, prices you'll love.
        </p>
        <div className="mt-6 flex pb-4">
          <button className="btn btn-primary text-xl pl-3  ">
            <NavLink to="/products" className="flex items-center">
              <TbShoppingBagCheck className="inline-block mr-2" /> Shop Now
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};
