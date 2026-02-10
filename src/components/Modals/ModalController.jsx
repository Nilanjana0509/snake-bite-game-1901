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
  const [plans, setPlans] = useState("");
  const [userId, setUserId] = useState("");

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
          onBack={() => setActiveModal("SUBSCRIPTION")}
          onSuccess={(userId) => {
            (setUserId(userId), setActiveModal("PAYMENT"));
          }}
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
          onSubscribe={(plan) => {
            setPlans(plan);
            setActiveModal("SIGNUP");
          }}
          onExit={() => (window.location.href = "https://www.google.com")}
        />
      )}

      {activeModal === "PAYMENT" && (
        <PaymentModal
          plan={plans}
          userId={userId}
          onSubmit={() => setActiveModal("SIGNUP")}
          onExit={() => (window.location.href = "https://www.google.com")}
        />
      )}
    </>
  );
}

export default ModalController;
