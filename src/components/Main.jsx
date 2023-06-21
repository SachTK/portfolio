import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaFacebookF } from 'react-icons/fa';
import Typical from 'react-typical'

import bg from "../assets/bg.jpg";

const Main = () => {
  return (
    <div id='main' className='bg-radial-at-r to-indigo-900 w-full h-screen bg-[#0a192f] '>
      {/* <img className='w-full h-screen object-cover object-left scale-x-[-1]' 
        src={bg} 
        alt="/" 
      /> */}
      <div className='w-full h-screen absolute top-0 left-0'>
        
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className="text-2xl font-po text-[#00dbfe]">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f5]">SACHINI KANDAMBIGE</h1>
                <h2 className="font- text-2xl sm:text-5xl font-bold text-[#888fa4]">
                <TypeAnimation
              sequence={[
                'Developer',
                2000,
                'Corder',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: '40px', paddingLeft: '5px', display: 'inline-block' }}
              repeat={Infinity}
              cursor={true}
            />
                    </h2>
                    
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                      <a href="https://www.linkedin.com/in/sachini-kandambige/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='cursor-pointer mr-6' size={60} color='white' />
                      </a>
                      <a href="https://github.com/IT21181856" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='cursor-pointer mr-6' size={60} color='white' />
                      </a>
                      <a href="https://web.facebook.com/profile.php?id=100055735599274" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className='cursor-pointer mr-6' size={60} color='white' />
                      </a>
                    </div> 
                    
        </div>

      </div>
    </div>
  );
};

export default Main;
