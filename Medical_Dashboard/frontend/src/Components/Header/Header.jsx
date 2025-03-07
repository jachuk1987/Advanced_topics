import React from 'react';
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/doctors",
    display: "Find a Doctor"
  },
  {
    path: "/services",
    display: "Services"
  },
  {
    path: "/contact",
    display: "Contact"
  }
]
const Header = () => {
  return <header className='header flex items-center'>
    <div className='container'>
      <div className='flex items-center justify-between'>
        <div>
          <img src={logo} alt="" />
        </div>

        <div className='navigation'>
          <ul className="menu flex items-center gap-[2.7rem]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primaryColor text-[16px] leading-7 font-[600]"
                      : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                  }
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex items-center gap-4'>
          <div>
            <Link to='/'>
              <figure className='w-[35px] h-[35px] rounded-full'>
                <img src={userImg} className='w-full rounded-full' alt="" />
              </figure>
            </Link>
          </div>

          <Link to='/login'>
            <button className='bg-primaryColony py-2 px-6 text-white font-[600] h-[44px]flex items-center'>Login</button>
          </Link>

            <span>
              
            </span>
        </div>
      </div>
    </div>
  </header>
};

export default Header;
