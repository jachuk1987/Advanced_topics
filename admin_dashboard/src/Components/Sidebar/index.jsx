import React from 'react';
import Logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import { MdOutlineDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className='sidebar fixed top-0 left-0 z-[100] w-[15%]'>
        <Link to="/">
          <div className='logoWrapper py-3 px-3'>
            <img src={Logo} className='w-100' />
          </div>
        </Link>

        <div className='sidebarTabs px-3'>
          <Button className='w-100'>
            <span className='icon w-[30px] h-[30px] flex items-center justify-center rounded-md'><MdOutlineDashboard /></span>
            Dashboard
          </Button>
        </div>
      </div>
    </>
  )
}

export default Sidebar;
