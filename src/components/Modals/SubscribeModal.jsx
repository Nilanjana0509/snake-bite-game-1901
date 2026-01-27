const SubscribeModal = ({ onSubscribe, onExit }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onExit}
    >
      <div
        className="w-[360px] rounded-2xl bg-white p-6 shadow-xl animate-[scaleIn_0.2s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-gray-900">
          Subscribe
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Subscribe to continue and unlock all premium features.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onSubscribe}
            className="flex-1 rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Subscribe
          </button>

          <button
            onClick={onExit}
            className="flex-1 rounded-lg bg-gray-100 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;
