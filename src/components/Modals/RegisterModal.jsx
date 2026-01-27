import React from 'react'
import { ChevronLeft } from 'lucide-react';

function RegisterModal({ onClose }) {
    return (
        <div className='fixed inset-0 bg-opacity-50 backdrop-blur-sm flex flex-col  justify-center items-center text-amber-950'>
            <button className='flex place-self-end mx-10' onClick={onClose}><ChevronLeft />Back</button>
            <div className='bg-amber-50 rounded-xl px-30 py-15 flex flex-col gap-5 items-center m-4'>

                <h1 className='font-extrabold font-weight-100 text-amber-900'> Sign Up </h1>
                <form className='flex flex-col'>
                    <label htmlFor="name" className='mb-2 mx-1'>Name</label>
                    <input className='w-full px-4 py-3 border solid 2px border-amber-900 rounded-md focus:outline-none' type="name" name="name" id="name" placeholder='Enter your name' required />
                    <label htmlFor="email" className='mt-3 mb-2 mx-1'>Email</label>
                    <input className='w-full px-4 py-3 border solid 2px border-amber-900 rounded-md focus:outline-none' type="email" name="email" id="email" placeholder='Enter your email' required />
                    <label htmlFor="pass" className='mt-3 mb-2 mx-1'>Password</label>
                    <input className='w-full px-4 py-3 border solid 2px border-amber-900 rounded-md focus:outline-none' type="text" name="pass" id="pass" placeholder='Enter your password' required />
                    <button className='text-white bg-amber-900 rounded mt-6 p-1 hover:bg-amber-950'>Proceed</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterModal