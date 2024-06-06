import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { TiLocationOutline } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";


const Events = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };


  return (

    <>
    <div className='text-white text-2xl p-2 ml-16 mt-10'>
        <p>Featured Events</p>
    </div>



<div className='flex'>
<div className='max-w-full pr-2 pl-12'>
    <Slider {...settings}>



    <div className='max-w-full bg-gray-800 border-gray-700 rounded-md mt-5'>
              <a href="">
                <img src="src\Events.jpg" alt="/" className='rounded-t-md w-full' />
              </a>

             
            <div className='p-5'>
                    <a href="">
                        <p className='text-xl font-bold mb-4'> বিশ্ব সঙ্গীত দিবস | আমাদের রবি | বিশ্ব সঙ্গীত সপ্তাহ ২০২৩ </p>


                    </a>

            <div>
                <p className='text-base flex text-gray-300 mb-3'><TiLocationOutline size={20} className= 'mr-2'/> অ্যাকাডেমি অফ্ ফাইন আর্টস</p>
                <p className='text-base flex text-gray-300 mb-3'><MdOutlineDateRange size={20} className='mr-2' /> ১০ জুন, ২০২৩</p>

                <div className='flex'>
                <p className='text-base flex text-gray-300'> <FaRegClock size={20} className='mr-2'/>সন্ধ্যা ৩:০০ - ৫:০০</p>
                <button class="bg-yellow-600 text-white py-2 px-4 rounded ml-24 hover:bg-yellow-500 transition duration-300 ease-in-out">10% Off</button>
  
                </div>
            </div>
          
          
            </div>

            <div className='bg-gray-700 p-2 rounded-b-md text-sm'>
                 <p className='text-white ml-3'>টিকিট মূল্যঃ ১৫০ টাকা থেকে শুরু</p>

        </div>

        
    </div>










    <div className='max-w-sm bg-gray-800 border-gray-700 rounded-md mt-5'>
              <a href="">
                <img src="src\Events.jpg" alt="/" className='rounded-t-md w-full' />
              </a>

             
            <div className='p-5'>
                    <a href="">
                        <p className='text-xl font-bold mb-4'> বিশ্ব সঙ্গীত দিবস | আমাদের রবি | বিশ্ব সঙ্গীত সপ্তাহ ২০২৩ </p>


                    </a>

            <div>
                <p className='text-base flex text-gray-300 mb-3'><TiLocationOutline size={20} className= 'mr-2'/> অ্যাকাডেমি অফ্ ফাইন আর্টস</p>
                <p className='text-base flex text-gray-300 mb-3'><MdOutlineDateRange size={20} className='mr-2' /> ১০ জুন, ২০২৩</p>

                <div className='flex'>
                <p className='text-base flex text-gray-300'> <FaRegClock size={20} className='mr-2'/>সন্ধ্যা ৩:০০ - ৫:০০</p>
                <button class="bg-yellow-600 text-white py-2 px-4 rounded ml-24 hover:bg-yellow-500 transition duration-300 ease-in-out">10% Off</button>

                </div>
            </div>
          
          
            </div>

            <div className='bg-gray-700 p-2 rounded-b-md text-sm'>
                 <p className='text-white ml-3'>টিকিট মূল্যঃ ১৫০ টাকা থেকে শুরু</p>

        </div>

        
    </div>








    <div className='max-w-sm bg-gray-800 border-gray-700 rounded-md mt-5'>
              <a href="">
                <img src="src\Events.jpg" alt="/" className='rounded-t-md w-full' />
              </a>

             
            <div className='p-5'>
                    <a href="">
                        <p className='text-xl font-bold mb-4'> বিশ্ব সঙ্গীত দিবস | আমাদের রবি | বিশ্ব সঙ্গীত সপ্তাহ ২০২৩ </p>


                    </a>

            <div>
                <p className='text-base flex text-gray-300 mb-3'><TiLocationOutline size={20} className= 'mr-2'/> অ্যাকাডেমি অফ্ ফাইন আর্টস</p>
                <p className='text-base flex text-gray-300 mb-3'><MdOutlineDateRange size={20} className='mr-2' /> ১০ জুন, ২০২৩</p>

                <div className='flex'>
                <p className='text-base flex text-gray-300'> <FaRegClock size={20} className='mr-2'/>সন্ধ্যা ৩:০০ - ৫:০০</p>
                <button class="bg-yellow-600 text-white py-2 px-4 rounded ml-24 hover:bg-yellow-500 transition duration-300 ease-in-out">10% Off</button>
  
                </div>
            </div>
          
          
            </div>

            <div className='bg-gray-700 p-2 rounded-b-md text-sm'>
                 <p className='text-white ml-3'>টিকিট মূল্যঃ ১৫০ টাকা থেকে শুরু</p>

        </div>

        
    </div>









    <div className='max-w-sm bg-gray-800 border-gray-700 rounded-md mt-5'>
              <a href="">
                <img src="src\Events.jpg" alt="/" className='rounded-t-md w-full' />
              </a>

             
            <div className='p-5'>
                    <a href="">
                        <p className='text-xl font-bold mb-4'> বিশ্ব সঙ্গীত দিবস | আমাদের রবি | বিশ্ব সঙ্গীত সপ্তাহ ২০২৩ </p>


                    </a>

            <div>
                <p className='text-base flex text-gray-300 mb-3'><TiLocationOutline size={20} className= 'mr-2'/> অ্যাকাডেমি অফ্ ফাইন আর্টস</p>
                <p className='text-base flex text-gray-300 mb-3'><MdOutlineDateRange size={20} className='mr-2' /> ১০ জুন, ২০২৩</p>

                <div className='flex'>
                <p className='text-base flex text-gray-300'> <FaRegClock size={20} className='mr-2'/>সন্ধ্যা ৩:০০ - ৫:০০</p>
                <button class="bg-yellow-600 text-white py-2 px-4 rounded ml-24">10% Off</button>
  
                </div>
            </div>
          
          
            </div>

            <div className='bg-gray-700 p-2 rounded-b-md text-sm'>
                 <p className='text-white ml-3'>টিকিট মূল্যঃ ১৫০ টাকা থেকে শুরু</p>

        </div>

        
    </div>
    </Slider>
        
    </div>
          

</div>    


    </>
  )
}

export default Events