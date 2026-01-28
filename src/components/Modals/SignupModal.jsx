const SignupModal = ({ onBack }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onBack}
    >
      <div
        className="w-[360px] p-30 rounded-2xl bg-white p-6 shadow-xl animate-[scaleIn_0.2s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-amber-950">
          Sign Up
        </h2>

        <p className="mt-2 text-amber-900">
          Create an account to get started.
        </p>

        <div className="mt-6 space-y-3">
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            className="required w-full rounded-lg border border--300 px-3 py-2 outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            className="required w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
          />

          <input
            type="password"
            placeholder="Password"
            name="user_password"
            className="required w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
          />
          <input
            type="number"
            placeholder="Mobile Number"
            name="user_number"
            className="required w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
          />
          <input
            type="text"
            placeholder="Address"
            name="user_address"
            className="required w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
          />
          <input
            type="text"
            placeholder="Profession / Student"
            name="user_profession"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
          />
          <input
            type="text"
            placeholder="Institution / University"
            name="user_institution"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
          />
        </div>

        <button
          className="mt-6 w-full rounded-lg bg-amber-900 py-2.5 font-medium text-white transition hover:bg-amber-950"
        >
          Sign Up
        </button>

        <button
          onClick={onBack}
          className="mt-3 w-full rounded-lg py-2 bg-gray-100 text-gray-700 transition font-medium hover:bg-gray-200"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default SignupModal;