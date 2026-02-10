import React, { useMemo, useState } from "react";
import { BANKDETAILS } from "../../utils/globalData";

const PaymentModal = ({ plan, userId, onSubmit, onExit }) => {
  const [txnId, setTxnId] = useState("");
  console.log(plan);

  // Generate UPI QR dynamically
  const qrUrl = useMemo(() => {
    if (!plan?.price) return "";

    const upiString =
      `upi://pay?pa=${BANKDETAILS.upiId}` +
      `&pn=${encodeURIComponent(BANKDETAILS.payeeName)}` +
      `&am=${encodeURIComponent(String(plan.price))}` +
      `&cu=INR` +
      `&tn=${encodeURIComponent(`Subscription ${plan.title}`)}`;

    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiString)}`;
  }, [plan?.price]);

  const handleSubmit = () => {
    if (!txnId.trim()) {
      alert("Please enter transaction ID");
      return;
    }
    onSubmit(txnId);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onExit}
    >
      <div
        className="w-[360px] rounded-2xl bg-white p-6 shadow-xl animate-[scaleIn_0.2s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <h2 className="text-xl font-semibold text-amber-950">
          Complete Payment 💰
        </h2>
        <p className="mt-2 text-sm text-amber-900">
          Scan the QR and enter your transaction ID
        </p>

        {/* QR Code */}
        <div className="mt-4 flex justify-center">
          <img
            src={qrUrl}
            alt="UPI QR Code"
            className="h-48 w-48 rounded-lg border border-amber-200"
          />
        </div>

        {/* UPI Info */}
        <p className="mt-2 text-center text-xs text-amber-800">
          UPI ID: <span className="font-medium">{BANKDETAILS.upiId}</span>
        </p>

        {/* Transaction ID Input */}
        <div className="mt-4">
          <label className="mb-1 block text-sm font-medium text-amber-900">
            Transaction ID
          </label>
          <input
            type="text"
            value={txnId}
            onChange={(e) => setTxnId(e.target.value)}
            placeholder="Enter UPI Transaction ID"
            className="w-full rounded-lg border border-amber-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-200"
          />
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={handleSubmit}
            className="flex-1 rounded-lg bg-amber-900 py-2.5 text-white transition hover:bg-amber-950"
          >
            Submit
          </button>

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

export default PaymentModal;
