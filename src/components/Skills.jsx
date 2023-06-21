import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import CPP from '../assets/C++.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import react from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Figma from '../assets/figma.png';
import Python from '../assets/python.png';
import PHP from '../assets/php.png';
import MYSQL from '../assets/mySQL.png';
import JAVA from '../assets/java.png';

const Skills = () => {
  return (
    <div>
      <div id = "skills" className='overflow-hidden w-full h-full bg-[#0a192f] text-gray-300 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto mb[300px]'>
            <div>
            <h1 className='text-6xl font-bold text-left py-8 pl-4 mt-10'>Skillset</h1>
            </div>

            <div  className='w-full mt-[30px] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div data-aos="fade-right" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img"src ={HTML} />
                    <p className='my-4'>HTML</p>
                </div>
                <div data-aos="fade-down" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={CSS} />
                    <p className='my-4'>CSS</p>
                </div>

                <div data-aos="fade-down" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={JavaScript} />
                    <p className='my-4'>JAVASCRPIT</p>
                </div>
                <div data-aos="fade-down" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={react} />
                    <p className='my-4 uppercase '>react</p>
                </div>
                <div data-aos="fade-down" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={Mongo} />
                    <p className='my-4 uppercase '>mongoDB</p>
                </div>
                <div data-aos="fade-down" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={Tailwind} />
                    <p className='my-4 uppercase '>Tailwind</p>
                </div>
                <div data-aos="fade-left" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={GitHub} />
                    <p className='my-4'>github</p>
                </div>
                <div data-aos="fade-left" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={Figma} />
                    <p className='my-4'>figma</p>
                </div>
    
                <div data-aos="fade-up" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={CPP} />
                    <p className='my-4'>C++</p>
                </div>
                <div data-aos="fade-up" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={FireBase} />
                    <p className='my-4'>FIREBASE</p>
                </div>

                <div data-aos="fade-up" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={JAVA} />
                    <p className='my-4'>JAVA</p>
                </div>
                <div data-aos="fade-up" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={PHP} />
                    <p className='my-4'>PHP</p>
                </div>
                <div data-aos="fade-up" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={MYSQL} />
                    <p className='my-4'>mySQL</p>
                </div>
                <div data-aos="fade-up" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' alt = "img" src ={Python} />
                    <p className='my-4'>PYTHON</p>
                </div>

            </div>
        </div>
    </div>
    </div>
  );
};

export default Skills;