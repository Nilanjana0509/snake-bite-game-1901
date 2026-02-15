import React from "react";
import { PLANS } from "../../utils/globalData";

const SubscriptionModal = ({ onSubscribe, onExit }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onExit}
    >
      <div
        className="w-[380px] rounded-2xl bg-white p-6 shadow-xl animate-[scaleIn_0.2s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <h2 className="text-xl font-semibold text-amber-950">
          Choose Your Subscription 💳
        </h2>
        <p className="mt-2 text-sm text-amber-900">
          Select a plan to continue using the software, to select click on the
          plan of your choice
        </p>

        {/* Plans */}
        <div className="mt-5 space-y-3">
          {PLANS.map((plan) => (
            <div
              onClick={() => onSubscribe(plan)}
              key={plan.id}
              className="flex items-center justify-between rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 hover:border-amber-400 transition cursor-pointer"
            >
              <div>
                <p className="font-medium text-amber-950">{plan.title}</p>
                <p className="text-xs text-amber-800">Subscription</p>
              </div>

              <div className="text-lg font-semibold text-amber-900">
                {plan.price}
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          {/* <button
            onClick={onSubscribe}
            className="flex-1 rounded-lg bg-amber-900 py-2.5 text-white transition hover:bg-amber-950"
          >
            Subscribe
          </button> */}

          <button
            onClick={onExit}
            className="flex-1 rounded-lg bg-amber-800 py-2.5 text-white transition hover:bg-amber-900"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
