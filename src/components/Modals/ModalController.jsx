import React, { useState } from "react";
import SubscribeModal from "./SubscribeModal";
import AuthChoiceModal from "./AuthChoiceModal";
import LoginModal from "./LogInModal";
import SignupModal from "./SignupModal";
import SuccessModal from "./SuccessModal";
import SubscriptionModal from "./SubscriptionModal";
import PaymentModal from "./PaymentModal";
function ModalController({ onClose }) {
  const [activeModal, setActiveModal] = useState("SUBSCRIBE");
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <>
      {activeModal === "SUBSCRIBE" && (
        <SubscribeModal
          onExit={onClose}
          onSubscribe={() => setActiveModal("SUBSCRIPTION")}
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
          onBack={() => setActiveModal("PAYMENT")}
          onSuccess={() => setActiveModal("PAYMENT")}
          // setSuccessMessage={setSuccessMessage}
        />
      )}

      {activeModal === "SUCCESS" && (
        <SuccessModal
          onLogin={() => setActiveModal("LOGIN")}
          // successMessage={successMessage}
        />
      )}

      {activeModal === "SUBSCRIPTION" && (
        <SubscriptionModal
          onSubscribe={() => setActiveModal("SIGNUP")}
          onExit={() => setActiveModal("TEST")}
        />
      )}

      {activeModal === "PAYMENT" && (
        <PaymentModal
          upiId="ghoruipratanu-1@oksbi"
          amount="100"
          onSubmit={() => setActiveModal("SIGNUP")}
          onExit={() => setActiveModal("TEST")}
        />
      )}
    </>
  );
}

export default ModalController;
