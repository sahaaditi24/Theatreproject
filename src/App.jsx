import React from 'react';
import './index.css';
import Sidebar from './components/sidebar';
import Hero from './components/Hero';
import Cards from './components/Cards.jsx';
import Circle from './components/Circle.jsx';
import Box from './components/Box.jsx';
import Cards2 from './components/Cards2.jsx';
import Events from './components/Events.jsx';


function App() {
 

  return (
    <>
    <div className='flex'>
      
    <Sidebar />
    <div className='flex-grow ml-10 pl-12 w-screen'>
    <Hero/>
    </div>
    

    </div>
    <div className='ml-20 pl-20 pr-4'>
    <Cards/>

    </div>



    <div className='ml-28 pl-8'>
      <Circle/>
    </div>

    <div className='ml-40 pl-20'>
    <Box/>
    </div>
   
    <div className='ml-20 pl-20 pr-4'>
      <Cards2/>
    </div>


    <div className='ml-20 pl-20 pr-4'>
      <Events/>
    </div>
    

    
    
    </>
  )
}

export default App;
