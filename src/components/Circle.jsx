import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Circle = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
      };






  return (
    <>

<div className='flex'>

<div className= 'max-w-full pr-7 pl-20'>
<Slider {...settings}>

    <div className='grid grid-col-2'>
        <div className='w-40 h-340 rounded-full overflow-hidden mt-20'>
            <a href="">
            <img src="src\Cimg1.jpg" alt="/" className='w-full h-full object-cover' />
            </a>

        </div>

        <div>
            <p className='text-xl font-bold ml-11 mt-4'> বহুরূপী</p>
        </div>


    
    </div>






    <div className='grid grid-col-2'>
        <div className='w-40 h-340 rounded-full overflow-hidden mt-20'>
            <a href="">
            <img src="src\Cimg1.jpg" alt="/" className='w-full h-full object-cover' />
            </a>

    </div>

    <div>
        <p className='text-xl font-bold ml-11 mt-4'> বহুরূপী</p>
    </div>



    </div>







        <div className='grid grid-col-2'>
            <div className='w-40 h-340 rounded-full overflow-hidden mt-20'>
                <a href="">
                <img src="src\Cimg1.jpg" alt="/" className='w-full h-full object-cover' />
                </a>

        </div>

        <div>
            <p className='text-xl font-bold ml-11 mt-4'> বহুরূপী</p>
        </div>



        </div>








        <div className='grid grid-col-2'>
            <div className='w-40 h-340 rounded-full overflow-hidden mt-20'>
                <a href="">
                <img src="src\Cimg1.jpg" alt="/" className='w-full h-full object-cover' />
                </a>

        </div>

        <div>
            <p className='text-xl font-bold ml-11 mt-4'> বহুরূপী</p>
        </div>



        </div>







        <div className='grid grid-col-2'>
            <div className='w-40 h-340 rounded-full overflow-hidden mt-20'>
                <a href="">
                <img src="src\Cimg1.jpg" alt="/" className='w-full h-full object-cover' />
                </a>

        </div>

        <div>
            <p className='text-xl font-bold ml-11 mt-4'> বহুরূপী</p>
        </div>



        </div>








        <div className='grid grid-col-2 '>
            <div className='w-40 h-340 rounded-full overflow-hidden mt-20'>
                <a href="">
                <img src="src\Cimg1.jpg" alt="/" className='w-full h-full object-cover' />
                </a>

        </div>

        <div>
            <p className='text-xl font-bold ml-11 mt-4'> বহুরূপী</p>
        </div>



        </div>








        <div className='grid grid-col-2'>
            <div className='w-40 h-340 rounded-full overflow-hidden mt-20'>
                <a href="">
                <img src="src\Cimg1.jpg" alt="/" className='w-full h-full object-cover' />
                </a>

        </div>

        <div>
            <p className='text-xl font-bold ml-11 mt-4'> বহুরূপী</p>
        </div>



        </div>







</Slider>

</div>
</div>



</>

    
  )
}

export default Circle