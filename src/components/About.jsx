import React from 'react';
import { useSpring, animated } from 'react-spring';
import Logo from "../assets/mypic.jpg";
import CV from "../assets/cv.pdf";

const About = () => {
  const imageAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  });

  const paragraphAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  });

  return (
    <div id='about' className='bg-radial-at-r from-sky-400 to-indigo-900 w-full h-screen bg-[#0a192f] text-gray-300 snap-start'>
      <div className='flex flex-col justify-center items-center w-full h-screen'>
        <div className='max-w-[1000px] w-full'>
        <h1 className='text-6xl font-bold text-left py-8 pl-4 mt-10'>About Me</h1>
          <div className='grid sm:grid-cols-2 gap-8 px-4'>
            <animated.div style={imageAnimation}>
              <div
                style={{
                  display: 'inline-block',
                  border: '5px solid #63b3ed',
                  borderRadius: '50%',
                }}
              >
                <img src={Logo} alt='Logo' className='w-60 h-60 rounded-full' />
              </div>
            </animated.div>
            <animated.div style={paragraphAnimation} className='flex flex-col justify-start'>
              <p>
                I am a 2nd-year undergraduate student studying Software Engineering at SLIIT.
                I am a motivated and diligent student who thrives in team environments. 
                I enjoy learning new technologies and constantly improving my knowledge. 
                I have a flexible and friendly attitude, which allows me to easily adapt to different situations. 
                I am committed to my personal and professional growth, always seeking opportunities to enhance my skills. 
                I am excited to contribute to innovative projects and make a positive impact in the field.
              </p>
              <a href={CV} download>
                <button className="bg-sky-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Download CV
                </button>
              </a>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
