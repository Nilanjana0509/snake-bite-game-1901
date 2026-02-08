import React from "react";

function Payments() {
  const payments = [
    {
      id: 1,
      user: "John Doe",
      amount: "₹5,000",
      status: "Paid",
      date: "2026-02-01",
    },
    {
      id: 2,
      user: "Jane Smith",
      amount: "₹3,200",
      status: "Pending",
      date: "2026-02-03",
    },
    {
      id: 3,
      user: "Rahul Das",
      amount: "₹7,800",
      status: "Paid",
      date: "2026-02-05",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">Payments</h2>

      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600">
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((item) => (
              <tr key={item.id} className="border-b text-sm hover:bg-gray-50">
                <td className="px-4 py-3">{item.user}</td>
                <td className="px-4 py-3">{item.amount}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      item.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payments;
