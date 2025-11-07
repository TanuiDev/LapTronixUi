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
        <h3 className="text-4xl font-bold text-primary pt-5 text-center mb-5 ">
        Shop by Category
        </h3>
        <div className="gap-4 sm:w-full md:flex justify-between mb-3 p-10">
        {categories.map((category) => (
            <div
            key={category.name}
            className="card w-full md:flex bg-blue-50  shadow-sm items-center p-3 "
            >
                <div className="text-6xl items-center text-gray-700 pb-10 ">
                    {category.icon}
                </div>
            <h2 className="text-2xl  text-gray-700 text-center ">
                {category.name}
            </h2>
            <h3 className="text-3xl font-bold text-center text-emerald-400 mt-8 ">
                {category.count}
            </h3>
            </div>
        ))}
        </div>
    </div>
    </>
);
};
