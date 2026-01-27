const SignupModal = ({ onBack }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onBack}
    >
      <div
        className="w-[360px] rounded-2xl bg-white p-6 shadow-xl animate-[scaleIn_0.2s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-gray-900">
          Sign Up
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Create an account to get started.
        </p>

        <div className="mt-6 space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>

        <button
          className="mt-6 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Sign Up
        </button>

        <button
          onClick={onBack}
          className="mt-3 w-full rounded-lg py-2 text-sm text-gray-500 transition hover:bg-gray-100"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
