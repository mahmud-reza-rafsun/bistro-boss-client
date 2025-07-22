import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import shopIcon from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import userIcon from "../../../assets/others/profile.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">CONTACT US</NavLink>
      </li>
      <li>
        <NavLink to="dashboard">DASHBOARD</NavLink>
      </li>
      <li>
        <NavLink to="/menu">OUR MENU</NavLink>
      </li>
      <li>
        <NavLink to="/our-shop" className="flex justify-center items-center lg:-ml-0 -ml-[72px] lg:-mt-[3px]">
          OUR SHOP
          <img className="w-8" src={shopIcon} alt="" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/sign-out" className="flex justify-center items-center lg:-ml-0 -ml-[72px] lg:-mt-[3px]">
          SIGN OUT
          <img className="w-6 rounded-full" src={userIcon} alt="" />
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed bg-black text-white opacity-90 z-50 px-5 lg:px-[60px]">
      <div className="navbar-start w-1/3">
        <Link>
          <img className="w-10  lg:w-14 object-cover" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end w-10/12">
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white absolute right-0 text-black rounded-box z-50 mt-3 w-52 p-2 shadow-xl"
          >
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
