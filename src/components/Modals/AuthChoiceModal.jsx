const AuthChoiceModal = ({ onLogin, onSignup, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-[360px] rounded-2xl bg-white p-6 shadow-xl animate-[scaleIn_0.2s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-amber-950">
          Continue
        </h2>

        <p className="mt-2 text-amber-900">
          Choose how you want to continue.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={onLogin}
            className="w-full rounded-lg bg-amber-900 py-2.5 font-medium text-white transition hover:bg-amber-950"
          >
            Log In
          </button>

          <button
            onClick={onSignup}
            className="w-full rounded-lg bg-amber-50 py-2.5 font-medium border-amber-950 text-amber-900 transition hover:bg-amber-100"
          >
            Sign Up
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full rounded-lg bg-gray-200 py-2 font-medium text-gray-700 transition hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AuthChoiceModal;