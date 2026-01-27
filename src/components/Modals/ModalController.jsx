import React,{useState} from 'react'
import SubscribeModal from './SubscribeModal';
import AuthChoiceModal from './AuthChoiceModal';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

function ModalController({ onClose }) {
  const [activeModal, setActiveModal] = useState("SUBSCRIBE");

  return (
    <>
      {activeModal === "SUBSCRIBE" && (
        <SubscribeModal
          onExit={onClose}
          onSubscribe={() => setActiveModal("AUTH")}
        />
      )}

      {activeModal === "AUTH" && (
        <AuthChoiceModal
          onLogin={() => setActiveModal("LOGIN")}
          onSignup={() => setActiveModal("SIGNUP")}
          onClose={onClose}
        />
      )}

      {activeModal === "LOGIN" && (
        <LoginModal onBack={() => setActiveModal("AUTH")} />
      )}

      {activeModal === "SIGNUP" && (
        <SignupModal onBack={() => setActiveModal("AUTH")} />
      )}
    </>
  );
}

export default ModalController