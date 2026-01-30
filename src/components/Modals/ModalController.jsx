import React, { useState } from "react";
import SubscribeModal from "./SubscribeModal";
import AuthChoiceModal from "./AuthChoiceModal";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import SuccessModal from "./SuccessModal";

function ModalController({ onClose }) {
  const [activeModal, setActiveModal] = useState("SUBSCRIBE");
  const [successMessage, setSuccessMessage] = useState("");

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
        <SignupModal
          onBack={() => setActiveModal("AUTH")}
          onSuccess={() => setActiveModal("SUCCESS")}
          // setSuccessMessage={setSuccessMessage}
        />
      )}

      {activeModal === "SUCCESS" && (
        <SuccessModal
          onLogin={() => setActiveModal("LOGIN")}
          // successMessage={successMessage}
        />
      )}
    </>
  );
}

export default ModalController;
