import React, { useState } from 'react'
import { ChevronLeft } from 'lucide-react';
import LogInModal from './LoginModal';
import RegisterModal from './RegisterModal'


const handleSubscribe = () => {

}
const handleExit = () => {
    // window.close();
}

const RestrictionPopUp = ({ onClose }) => {

    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    return (
        <div className='fixed inset-0 bg-opacity-50 backdrop-blur-sm flex flex-col justify-center items-center text-amber-950'>
            <button className='flex place-self-end mx-10' onClick={onClose}><ChevronLeft />Back</button>
            <div className='bg-amber-50 rounded-xl px-20 py-10 flex flex-col gap-5 items-center m-4'>
                <h2 className='font-bold'>Access Restricted 🚫 </h2>
                <div>You have achieved one star. <br />
                    To play ahead, you have to subscribe to the Software!</div>
                <div className='flex gap-5 justify-center items-center'>
                    <button className='text-white bg-amber-900 rounded mt-6 p-1 hover:bg-amber-950' onClick={() => setButtonPopUp(true) && RestrictionPopUp(false)} >Subscribe</button>
                    <button className='text-white bg-amber-900 rounded mt-6 p-1 hover:bg-amber-950' onClick={handleExit}>Exit</button>
                </div>
            </div>
            {buttonPopUp &&
                <div>

                    <div className="h-screen bg-amber-100 flex flex-col items-center justify-center bg-opacity-10 backdrop-blur-sm">

                        <button className='text-white bg-amber-900 rounded mt-4 p-2 m-10' onClick={() => setShowLoginModal(true)}>Log In</button>
                        {showLoginModal && <LogInModal onClose={() => setShowLoginModal(false)} />}
                        <button className='text-white bg-amber-900 rounded mt-4 p-2 m-10' onClick={() => setShowRegisterModal(true)}>Sign Up</button>
                        {showRegisterModal && <RegisterModal onClose={() => setShowRegisterModal(false)} />}
                    </div>

                </div>}
        </div>
    )
}

export default RestrictionPopUp