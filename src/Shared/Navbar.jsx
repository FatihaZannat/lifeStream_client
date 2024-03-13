
import { Link, NavLink } from "react-router-dom";
import profilePic from "../assets/profilePic/832.jpg"
import Container from "./Container";
import logo from "../assets/logo/blood_08.jpg"

const Navbar = () => {

const navLinks = <>
  <ul className="menu menu-horizontal px-1">
  <li><NavLink>Donation Request</NavLink></li>
            <li>
             <NavLink>Blog</NavLink>
            </li>
        
          </ul>
</>


    return (
       <Container>
         <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <div className="flex">
            
            <img className="size-12 " src={logo} alt="" />
          <a className="btn btn-ghost  text-3xl uppercase "><span className="text-red-600">Life</span>Spring</a>
</div>        </div>
        <div className="navbar-end hidden lg:flex">
        
{navLinks}

        </div>
        <div className="">
         


        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          
          <img alt="Tailwind CSS Navbar component" src={profilePic}/>
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
         <Link to='login'>Login</Link>
        </li>
        <li>
         <Link to='registration'>Registration</Link>
        </li>
        
      </ul>
    </div>

        </div>
      </div>
       </Container>
    );
};

export default Navbar;