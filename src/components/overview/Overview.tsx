import { FaLaptopCode, FaHeadphones } from "react-icons/fa6";
import { LuMonitor } from "react-icons/lu";

export const Overview = () => {
const categories = [
    { name: "Laptops", icon: <FaLaptopCode/>, count: "150+ models" },
    { name: "Accessories", icon: <FaHeadphones/>, count: "500+ items" },
    { name: "Monitors", icon: <LuMonitor />, count: "80+ displays" },
];

return (
    <>
    <div className="mt-10">
        <h3 className="text-4xl font-bold text-shadow-white pt-5 text-center ">
        Shop by Category
        </h3>
        <div className="gap-4 md:flex justify-between mb-3">
        {categories.map((category) => (
            <div
            key={category.name}
            className="card bg-base-100 w-96 shadow-sm "
            >
                <div className="text-8xl text-center">
                    {category.icon}
                </div>
            <h2 className="text-2xl text-accent text-center ">
                {category.name}
            </h2>
            <h3 className="text-1xl text-center text-blue-50 mt-8 ">
                {category.count}
            </h3>
            </div>
        ))}
        </div>
    </div>
    </>
);
};
