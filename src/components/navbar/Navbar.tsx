import { NavLink } from "react-router"


export const Navbar = () => {
  return (
   <>
   <ul className="flex gap-2 items-center mt-4 justify-center ">
    <li>
        <NavLink to='/'>Home</NavLink>
    </li>
    <li>
        <NavLink to="/login">Login</NavLink>
    </li>
    <li>
        <NavLink to ="/register">Register</NavLink>
    </li>
    <li>
        <NavLink to ='/products'>Products</NavLink>
    </li>
    <li>
        <NavLink to="/contact">Contact Us</NavLink>
    </li>
    <li>
        <NavLink to='about'>About Us</NavLink>
    </li>
    </ul>  
    
   </>
  )
}
