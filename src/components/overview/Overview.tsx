import { FaLaptopCode,FaHeadphones } from "react-icons/fa6";
import { LuMonitor } from "react-icons/lu";



export const Overview = () => {
     const  categories = [
    { name: "Laptops", icon: FaLaptopCode, count: "150+ models" },
    { name: "Accessories", icon: FaHeadphones, count: "500+ items" },
    { name: "Monitors", icon: LuMonitor, count: "80+ displays" },
  ];

  return (
    <>
    <div className="mt-10">
        <h3 className="text-2xl font-bold text-shadow-white pt-5 text-center ">Shop by Category</h3>
        <div className="flex justify-between">                              
        </div>
    </div>
    </>
  )
}


