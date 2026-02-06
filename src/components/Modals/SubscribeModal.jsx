const SubscribeModal = ({ onSubscribe, onExit }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onExit}
    >
      <div
        className="w-[360px] rounded-2xl bg-white p-6 shadow-xl animate-[scaleIn_0.2s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-amber-950">
          Access Restricted!🚫
        </h2>

        <p className="mt-2 text-amber-900">
          To play ahead, you have to subscribe to the software.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            // onClick={onSubscribe}
            className="flex-1 rounded-lg bg-amber-900 py-2.5 text-white transition hover:bg-amber-950"
          >
            Subscribe
          </button>

          <button
            onClick={onExit}
            className="flex-1 rounded-lg bg-gray-300 py-2.5  text-gray-700 transition hover:bg-gray-400"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;
