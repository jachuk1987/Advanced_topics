import React from 'react';
import Logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className='sidebar fixed top-0 left-0 z-[100] w-[15%]'>
        <Link to="/">
          <div className='logoWrapper py-3 px-3'>
            <img src={Logo} className='w-100' />
          </div>
        </Link>
      </div>
    </>
  )
}

export default Sidebar;
