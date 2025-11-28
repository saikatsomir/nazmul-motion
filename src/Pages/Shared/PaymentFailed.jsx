import { useNavigate } from 'react-router-dom';
import { MdErrorOutline } from 'react-icons/md';

export default function PaymentFailed() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen relative flex items-center justify-center bg-[#0a0612]">
      {/* Gradient blur overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4107a4]/40 via-[#4107a4]/20 to-[#4107a4]/40 backdrop-blur-lg"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 py-12 rounded-xl shadow-2xl max-w-md">
        <MdErrorOutline className="mx-auto text-9xl text-red-500 mb-6 animate-pulse" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Payment Failed</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Your payment could not be processed. Please try again or contact
          support if the issue persists.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-gradient-to-r from-[#fbb35f] to-[#6b5bf8] text-white font-semibold text-lg px-6 py-3 rounded-full hover:scale-105 transition-transform"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
