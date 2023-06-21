import React from 'react';
import ProjectItems from './ProjectItems';
import pr1 from '../assets/happytails.png';
import pr2 from '../assets/iclothes.png';
import pr3 from '../assets/hopeheaven.png';


const Projects = () => {
  return (
    
    <div id = "projects" className='overflow-hidden w-full h-full bg-[#0a192f] text-gray-300 '>
         <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto mb[300px]'>
            <div>
                <h1 className='text-6xl font-bold text-left py-8 pl-4 mt-10'>Projects</h1>
            </div>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItems img={pr1} title='Happy Tails' discription='A pet shelter management system. Y2S2 peoject. Developed using MERN stack.' link='https://github.com/IT21181856/itp-project-happy-tails'/>
                <ProjectItems img={pr2} title='iCLOTHES' discription='A textile and garment manageent system. Y1S2 peoject. Developed using javascript,html,css & php.' link='https://github.com/IT21181856/IWT-project-iCLOTHES.git'/>
                <ProjectItems img={pr3} title='Hope Heaven'discription='A mobile application to do donations for school students. Y2S2 project. Developed using Kotlin & Firebase' link='https://github.com/It21165498/Hope-Heaven-App-MAD-Project-Y2S2.git'/>
                
            </div>

          </div>
    </div>
  );
};

export default Projects;