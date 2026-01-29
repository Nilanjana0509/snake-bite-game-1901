import { useState } from "react";
import { getDeviceId } from "../../utils/device";

const LoginModal = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Email and password are required");
      return;
    }

    const deviceId = getDeviceId();

    const payload = {
      user_email: email,
      user_password: password,
      deviceId: deviceId,
    };

    try {
      const response = await fetch("http://localhost:3030/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      alert("Login successful");
      console.log("Device ID used:", deviceId);
      // onBack();
    } catch (err) {
      console.error(err);
      alert(err.message || "Login failed");
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
        <h2 className="text-xl font-semibold text-amber-950">Log In</h2>

        <p className="mt-2 text-amber-900">
          Welcome back! Please login to continue.
        </p>

        <div className="mt-6 space-y-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="mt-6 w-full rounded-lg bg-amber-900 py-2.5 font-medium text-white hover:bg-amber-950 disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Log In"}
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

export default LoginModal;
