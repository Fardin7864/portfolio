import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navlink = <>
    <li>
        <NavLink to='projects'>Projects</NavLink>
    </li>
    <li>
        <NavLink to='about'>About</NavLink>
    </li>
    <li>
        <NavLink to='contact'>Contact</NavLink>
    </li>
    </>
  return (
    <div className="navbar bg-base-100 z-10">
      <div className="navbar-start z-10">
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
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlink}
          </ul>
        </div>
        <a className="btn btn-ghost z-10 text-white font-roboto text-2xl">Fardin Hasan</a>
      </div>
      <div className="navbar-center hidden lg:flex z-10 ">
        <ul className="menu menu-horizontal px-1 gap-5 text-white">
          {navlink}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
