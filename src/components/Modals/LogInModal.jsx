import React from 'react'
import { ChevronLeft } from 'lucide-react';

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted");
  const formData = new FormData(e.target);

  const data = Object.fromEntries(formData.entries());
  console.log(data);
};

const LogInModal = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-opacity-50 backdrop-blur-sm flex flex-col justify-center items-center text-amber-950'>
      <button className='flex place-self-end mx-10' onClick={onClose}><ChevronLeft />Back</button>
      <div className='bg-amber-50 rounded-xl px-20 py-10 flex flex-col gap-5 items-center m-4'>
        <h1 className='font-extrabold font-weight-100 text-amber-900'> Log In </h1>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label htmlFor="email" className='mb-2 mx-1'>Email</label>
          <input className='w-full px-4 py-3 border solid 2px border-amber-900 rounded-md focus:outline-none' type="email" name="email" id="email" placeholder='Enter your email' required />
          <label htmlFor="pass" className='mt-4 mb-2 mx-1'>Password</label>
          <input className='w-full px-4 py-3 border solid 2px border-amber-900 rounded-md focus:outline-none' type="text" name="pass" id="pass" placeholder='Enter your password' required />
          <button type='submit' className='text-white bg-amber-900 rounded mt-6 p-1'>Proceed</button>
        </form>
      </div>
    </div>
  )
}

export default LogInModal