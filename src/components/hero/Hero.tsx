import { TbShoppingBagCheck } from "react-icons/tb";

export const Hero = () => {
  return (
    <>
      <div className="mt-3 p-3 h-fit pl-4">
        <h1 className="text-4xl font-bold text-secondary">
          Premium Tech at Your Fingertips
        </h1>
        <p className="pt-4 text-white text-4xl font-extralight text- ">
          Discover the latest laptops, accessories, and tech gear from top
          brands. <br /> Quality you can trust, prices you'll love.
        </p>
        <div className="mt-10">
          <button className="btn btn-primary text-xl pl-3  ">
            {" "}
            <TbShoppingBagCheck className="inline-block mr-2" /> Shop Now
          </button>
        </div>
      </div>
    </>
  );
};
