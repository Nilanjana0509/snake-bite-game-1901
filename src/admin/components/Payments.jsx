import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Payments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const res = await fetch(
        "http://localhost:3030/api/payment/allSubscriptionData",
      );
      const data = await res.json();

      if (res.ok) {
        setPayments(data.data); // API formatted data
      } else {
        console.error(data.message || "Failed to fetch payments");
      }
    } catch (error) {
      console.error("Fetch payments error:", error);
    } finally {
      setLoading(false);
    }
  };

  const updatePaymentStatus = async (id, status) => {
    try {
      const res = await fetch(
        `http://localhost:3030/api/payment/updateSubscriptionData/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(`Payment ${status} successfully`, {
          autoClose: 4000,
        });
        // refresh list after update
        fetchPayments();
      } else {
        alert(data.message || "Failed to update status");
      }
    } catch (error) {
      console.error("Update payment error:", error);
      alert("Something went wrong");
    }
  };

  const handleAccept = (id) => {
    updatePaymentStatus(id, "APPROVED");
  };

  const handleReject = (id) => {
    updatePaymentStatus(id, "REJECTED");
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow p-6 text-center">
        Loading payments...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">
        Subscription Payments
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600">
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Duration</th>
              <th className="px-4 py-3">Transaction ID</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {payments.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-4 py-6 text-center text-gray-500">
                  No payments found
                </td>
              </tr>
            ) : (
              payments.map((item) => (
                <tr key={item.id} className="border-b text-sm hover:bg-gray-50">
                  <td className="px-4 py-3">{item.user}</td>
                  <td className="px-4 py-3">₹{item.amount}</td>
                  <td className="px-4 py-3">{item.duration}</td>
                  <td className="px-4 py-3 font-mono text-xs">
                    {item.transactionId}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        item.status === "VERIFIED"
                          ? "bg-green-100 text-green-700"
                          : item.status === "REJECTED"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-4">
                      {/* Accept */}
                      <button
                        onClick={() => handleAccept(item.id)}
                        title="Accept"
                        disabled={item.status !== "PENDING"}
                        className={`transition ${
                          item.status !== "PENDING"
                            ? "opacity-40 cursor-not-allowed"
                            : "hover:scale-110"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="green"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </button>

                      {/* Reject */}
                      <button
                        onClick={() => handleReject(item.id)}
                        title="Reject"
                        disabled={item.status !== "PENDING"}
                        className={`transition ${
                          item.status !== "PENDING"
                            ? "opacity-40 cursor-not-allowed"
                            : "hover:scale-110"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="red"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payments;
