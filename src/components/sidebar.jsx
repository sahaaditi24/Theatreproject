

import React from 'react';
import { RiMenu2Fill } from "react-icons/ri"; 
import { IoHomeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";




const Sidebar = () => {
  return (
    <div className="fixed h-full bg-black text-white p-6">
    <div className='flex items-center mb-4'>
      <button className="text-white focus:outline-none p-8 pb-40">
       
          <RiMenu2Fill size={40} />
       
      </button>

    </div>
      <div className='items-center'>
         

        
    
        <p className=" hover:bg-red-600 text-white flex text-xl p-4 mb-1"><IoHomeOutline size={30} className='mr-4'/> Home</p>
        
        <div className='container flex items-center mt-2 hover:bg-red-600 pb-2'>
        <img src="src\hsicon.jpg" alt="/" className='h-[70px] mb- pt-2'/>
        <p className="pr-3 mt-1 mr-1 text-xl text-white">Shows</p>
        </div>

        <p className="mb-8 p-3 mt-3 hover:bg-red-600 text-white flex text-xl"><FaSearch size={30} className='mr-4 ml-1'/>Search</p>
        <p className="mb-8 p-2 mt-2 hover:bg-red-600 text-white flex text-xl"><CiViewList size={35} className='mr-4 ml-1 mt-4'/>Your <br/>Event</p> 
      </div>
    </div>
  );
};

export default Sidebar;
