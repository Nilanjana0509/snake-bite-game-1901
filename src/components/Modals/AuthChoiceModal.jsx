const AuthChoiceModal = ({ onLogin, onSignup, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="w-[360px] rounded-2xl bg-white p-6 shadow-xl animate-[scaleIn_0.2s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-gray-900">
          Continue
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Choose how you want to continue.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={onLogin}
            className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Login
          </button>

          <button
            onClick={onSignup}
            className="w-full rounded-lg bg-blue-50 py-2.5 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
          >
            Sign Up
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full rounded-lg py-2 text-sm text-gray-500 transition hover:bg-gray-100"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AuthChoiceModal;
