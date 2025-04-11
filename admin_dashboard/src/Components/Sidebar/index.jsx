import React from 'react';
import Logo from "../../assets/images/logo.png";

const Sidebar = () => {
  return (
    <>
      <div className='sidebar fixed top-0 left-0 z-[100] w-[15%]'>
        <div className='logoWrapper py-4 px-5'>
          <img src={Logo} className='w-100' />
        </div>
      </div>
    </>
  )
}

export default Sidebar;
