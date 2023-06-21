import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className='overflow-hidden w-full h-full bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto mb-[300px]'>
        <h1 className='text-6xl font-bold text-left py-8 pl-4 mt-10'>Contact Me</h1>
        <div className="shadow-lg bg-[#0a1b34] rounded-lg p-8">
          <form action="https://getform.io/f/c9211296-0c6d-43de-9f85-38da59f8de13"  method='POST' encType='multipart/form-data'>
            <div className='grid w-full py-2'>
              <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Name</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#0e1e36]' type="text" name='name' />
              </div>

              <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Phone Number</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#0e1e36]' type="text" name="phone" />
              </div>

              <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Email Address</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#0e1e36]' type="email" name='email' />
              </div>

              <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#0e1e36]' rows='10' name='message'></textarea>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="bg-sky-400 hover:bg-blue-700 text-gray-100 mt-4 p-4 rounded-lg">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
