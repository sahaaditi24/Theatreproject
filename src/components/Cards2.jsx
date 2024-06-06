import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



import { TiLocationOutline } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const Cards2 = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
      
      
  return (

    <>
    <div className='ml-20 mt-20 text-xl'>
        <p>আপনার কাছাকাছি</p>
    </div>


<div className='flex mt-10 '>
    <div className='max-w-full pr-5 pl-12'>
     <Slider {...settings}>

    

   
       
 
       <div className='max-w-full bg-gray-800 border-gray-700 ml-0 rounded-md'>
           <a href="">
             <img src="src\Ballabhpurer-Roopkatha-thumb.jpg" alt="/" className='rounded-t-md w-full' />
           </a>

         <div className='flex flex-2'> 
             <div className='p-5'>
                 <a href="">
                     <p className='text-2xl font-bold mb-4'> বল্লভপুরের রূপকথা</p>
                 </a>

         <div>
             <p className='text-base flex text-gray-300 mb-3'><TiLocationOutline size={20} className= 'mr-2'/> অ্যাকাডেমি অফ্ ফাইন আর্টস</p>
             <p className='text-base flex text-gray-300 mb-3'><MdOutlineDateRange size={20} className='mr-2' /> ১০ জুন, ২০২৩</p>
             <p className='text-base flex text-gray-300 mb-3'> <FaRegClock size={20} className='mr-2'/>সন্ধ্যা ৩:০০ - ৫:০০</p>
         </div>
       
       
         </div>



           <div className='pt-6 pr-0 grid-flow-col flex-1'>
               <p className='flex ml-3'><FaStar className='text-yellow-600 mt-1'/> ৬.৫/১০</p>
               <img src="src\card1.png" alt="/" className="w-60 h-30 mt-5 mb-4" size={60}/>
           </div> 
         </div>


         <div className='bg-gray-700 p-2 rounded-b-md text-sm'>
              <p className='text-white ml-3'>টিকিট মূল্যঃ ১৫০ টাকা থেকে শুরু</p>

         </div>

     

       </div>




       <div className='max-w-full bg-gray-800 border-gray-700  rounded-md'>
              <a href="">
                <img src="src\Ballabhpurer-Roopkatha-thumb.jpg" alt="/" className='rounded-t-md w-full' />
              </a>

              <div className='flex'> 
                <div className='p-5 flex-2'>
                    <a href="">
                        <p className='text-2xl font-bold mb-4'> বল্লভপুরের রূপকথা</p>
                    </a>

              <div>
                <p className='text-base flex text-gray-300 mb-3'><TiLocationOutline size={20} className= 'mr-2'/> অ্যাকাডেমি অফ্ ফাইন আর্টস</p>
                <p className='text-base flex text-gray-300 mb-3'><MdOutlineDateRange size={20} className='mr-2' /> ১০ জুন, ২০২৩</p>
                <p className='text-base flex text-gray-300 mb-3'> <FaRegClock size={20} className='mr-2'/>সন্ধ্যা ৩:০০ - ৫:০০</p>
              </div>
          
          
            </div>



              <div className='pt-6 pr-0 grid-flow-col flex-1'>
                  <p className='flex ml-3'><FaStar className='text-yellow-600 mt-1'/> ৬.৫/১০</p>
                  <img src="src\card1.png" alt="/" className="w-60 h-30 mt-5 mb-4" size={60}/>
              </div> 
            </div>


            <div className='bg-gray-700 p-2 rounded-b-md text-sm'>
                 <p className='text-white ml-3'>টিকিট মূল্যঃ ১৫০ টাকা থেকে শুরু</p>

            </div>
        </div>








        <div className='max-w-full bg-gray-800 border-gray-700 rounded-md'>
              <a href="">
                <img src="src\Ballabhpurer-Roopkatha-thumb.jpg" alt="/" className='rounded-t-md w-full' />
              </a>

              <div className='flex'> 
                <div className='p-5 flex-2'>
                    <a href="">
                        <p className='text-2xl font-bold mb-4'> বল্লভপুরের রূপকথা</p>
                    </a>

              <div>
                <p className='text-base flex text-gray-300 mb-3'><TiLocationOutline size={20} className= 'mr-2'/> অ্যাকাডেমি অফ্ ফাইন আর্টস</p>
                <p className='text-base flex text-gray-300 mb-3'><MdOutlineDateRange size={20} className='mr-2' /> ১০ জুন, ২০২৩</p>
                <p className='text-base flex text-gray-300 mb-3'> <FaRegClock size={20} className='mr-2'/>সন্ধ্যা ৩:০০ - ৫:০০</p>
              </div>
          
          
            </div>



              <div className='pt-6 pr-0 grid-flow-col flex-1'>
                  <p className='flex ml-3'><FaStar className='text-yellow-600 mt-1'/> ৬.৫/১০</p>
                  <img src="src\card1.png" alt="/" className="w-60 h-30 mt-5 mb-4" size={60}/>
              </div> 
            </div>


            <div className='bg-gray-700 p-2 rounded-b-md text-sm'>
                 <p className='text-white ml-3'>টিকিট মূল্যঃ ১৫০ টাকা থেকে শুরু</p>

            </div>
        </div>











        <div className='max-w-full bg-gray-800 border-gray-700 ml-3 rounded-md'>
              <a href="">
                <img src="src\Ballabhpurer-Roopkatha-thumb.jpg" alt="/" className='rounded-t-md w-full' />
              </a>

              <div className='flex'> 
                <div className='p-5 flex-2'>
                    <a href="">
                        <p className='text-2xl font-bold mb-4'> বল্লভপুরের রূপকথা</p>
                    </a>

              <div>
                <p className='text-base flex text-gray-300 mb-3'><TiLocationOutline size={20} className= 'mr-2'/> অ্যাকাডেমি অফ্ ফাইন আর্টস</p>
                <p className='text-base flex text-gray-300 mb-3'><MdOutlineDateRange size={20} className='mr-2' /> ১০ জুন, ২০২৩</p>
                <p className='text-base flex text-gray-300 mb-3'> <FaRegClock size={20} className='mr-2'/>সন্ধ্যা ৩:০০ - ৫:০০</p>
              </div>
          
          
            </div>



              <div className='pt-6 pr-0 grid-flow-col flex-1'>
                  <p className='flex ml-3'><FaStar className='text-yellow-600 mt-1'/> ৬.৫/১০</p>
                  <img src="src\card1.png" alt="/" className="w-60 h-30 mt-5 mb-4" size={60}/>
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







export default Cards2;