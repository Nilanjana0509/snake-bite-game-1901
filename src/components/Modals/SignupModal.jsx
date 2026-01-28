import { useState } from "react";

const SignupModal = ({ onBack }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userProfession, setUserProfession] = useState("");
  const [userInstitution, setUserInstitution] = useState("");

  const handleSubmit = async () => {
    const payload = {
      user_name: userName,
      user_email: userEmail,
      user_password: userPassword,
      user_number: userNumber,
      user_address: userAddress,
      user_profession: userProfession,
      user_institution: userInstitution,
    };

    try {
      const response = await fetch("http://localhost:3030/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      alert("Signup successful");
      console.log("Server response:", data);
      // onBack();
    } catch (err) {
      console.error("Signup error:", err);
      alert(err.message || "Signup failed");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onBack}
    >
      <div
        className="w-[360px] rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-amber-950">Sign Up</h2>
        <p className="mt-2 text-amber-900">Create an account to get started.</p>

        <div className="mt-6 space-y-3">
          <input
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
          />

          <input
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
          />

          <input
            type="password"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
          />

          <input
            type="number"
            placeholder="Mobile Number"
            value={userNumber}
            onChange={(e) => setUserNumber(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
          />

          <input
            type="text"
            placeholder="Address"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
          />

          <input
            type="text"
            placeholder="Profession / Student"
            value={userProfession}
            onChange={(e) => setUserProfession(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
          />

          <input
            type="text"
            placeholder="Institution / University"
            value={userInstitution}
            onChange={(e) => setUserInstitution(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full rounded-lg bg-amber-900 py-2.5 font-medium text-white hover:bg-amber-950"
        >
          Sign Up
        </button>

        <button
          onClick={onBack}
          className="mt-3 w-full rounded-lg bg-gray-100 py-2 font-medium text-gray-700 hover:bg-gray-200"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
