import { useState } from 'react';
import axios from 'axios';
import thumbail from '/thumbnail.jpg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function PaymentPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    amount: 8888,
  });
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = 'nCZbZyyuHRg';
  const thumbnail = thumbail;

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const phoneRegex = /^1[3-9]\d{8}$/; // now only checks for the 9-digit part after +880
  //   if (!phoneRegex.test(form.phone)) {
  //     alert('Please enter a valid Bangladeshi phone number');
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     const { data } = await axios.post(
  //       'https://nazmulmotion.com/api/payment/init',
  //       form,
  //       { headers: { 'Content-Type': 'application/json' } }
  //     );

  //     if (data.url) {
  //       window.location.href = data.url;
  //     } else {
  //       alert('Payment URL not received');
  //     }
  //   } catch (err) {
  //     console.error(err.response?.data || err.message);
  //     alert('Payment initialization failed. Check console.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^1[3-9]\d{8}$/; // BD phone check
    if (!phoneRegex.test(form.phone)) {
      toast.error('Please enter a valid Bangladeshi phone number');
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post(
        'https://nazmulmotion.com/api/payment/init',
        form,
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error('Payment URL not received');
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error('Payment initialization failed. Check console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex justify-center bg-[#0a0612] text-white  pt-62 pb-40">
      <ToastContainer position="bottom-right" autoClose={3000} />

      <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#4107a4] blur-[100px] opacity-25 left-0 top-0" />
      <div className="absolute w-[100px] sm:w-[600px] h-[100px] sm:h-[600px] bg-[#4107a4] blur-[100px] opacity-15 right-0 bottom-0" />
      <div className="max-w-[1340px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 backdrop-blur-lg bg-[#4107a4]/10 rounded-3xl shadow-2xl border border-white/10 p-8 md:p-12">
        {/* LEFT SIDE — Course Info */}
        <div className="space-y-6 flex flex-col ">
          <div className=" h-[350px] rounded-xl overflow-hidden relative border-2 border-[#6339b7]">
            {!isPlaying ? (
              <div
                className="w-full h-full cursor-pointer relative"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src={thumbnail}
                  alt="Video Thumbnail"
                  className="w-full h-full bg-black/20 object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <div className="ml-1 w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent"></div>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="space-y-2">
            <h2
              className="text-3xl font-bold text-blue-400"
              style={{ fontFamily: 'Bricolage Grotesque' }}
            >
              Master Motion Design
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Learn to create stunning video ads, logo animations, and motion
              graphics for brands. This hands-on course walks you through
              industry workflows and animation techniques.
            </p>
          </div>

          <div className="flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl">
            <p className="text-gray-300">Course Price</p>
            <h3 className="text-2xl font-bold text-blue-400">
              ৳{form.amount.toLocaleString('en-BD')}
            </h3>
          </div>
        </div>

        {/* RIGHT SIDE — Payment Form */}
        <div className="bg-white/5 backdrop-blur-xl border border-[#4107a4]/50 p-8 rounded-xl shadow-xl space-y-6">
          <h3
            className="text-2xl font-semibold text-center text-blue-400"
            style={{ fontFamily: 'Bricolage Grotesque' }}
          >
            Complete Your Payment
          </h3>
          <p className="text-gray-400 text-center text-sm">
            Enter your details to pay securely via SSLCommerz.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="p-3 rounded-lg outline-none bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="p-3 rounded-lg outline-none bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-300 mb-1">Phone</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-lg bg-white/10 border border-r-0 border-white/20 text-gray-300">
                  +880
                </span>
                <input
                  type="text"
                  placeholder="1XXXXXXXXX"
                  required
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value.replace(/^0/, ''),
                    })
                  }
                  className="flex-1 p-3 rounded-r-lg outline-none bg-white/10 border border-white/20  placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-300 mb-1">Amount</label>
              <input
                type="number"
                value={form.amount}
                readOnly
                className="p-3 rounded-lg outline-none bg-white/5 border border-white/10 cursor-not-allowed text-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold text-lg transition-all ${
                loading
                  ? 'bg-gray-600 cursor-not-allowed text-gray-300'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/30'
              }`}
            >
              {loading ? 'Processing...' : 'Buy Now'}
            </button>
          </form>

          <p className="text-gray-400 text-xs text-center mt-4">
            By continuing, you agree to our{' '}
            <a href="/privacy" className="text-blue-400 hover:underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms" className="text-blue-400 hover:underline">
              Terms & Conditions
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
