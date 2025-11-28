import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiEye, FiEyeOff } from 'react-icons/fi';
import { FaArrowRightLong } from 'react-icons/fa6';

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  // If already logged in, redirect
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      navigate('/dashboard', { replace: true });
    }
  }, []);

  const handleNext = async (e) => {
    e.preventDefault();

    if (step === 1) {
      if (!form.email.trim()) {
        toast.error('Please enter your email', { position: 'top-right' });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!form.password.trim()) {
        toast.error('Please enter your password', { position: 'top-right' });
        return;
      }

      try {
        const res = await fetch('http://localhost:5001/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
        });

        const result = await res.json();

        if (res.ok && result.token) {
          // Save token
          localStorage.setItem('jwt', result.token);

          // Extract user
          const loggedUser = result.user;
          console.log('Logged in user:', loggedUser);

          if (!loggedUser) {
            toast.error('Invalid server response: user missing', {
              position: 'top-right',
            });
            return;
          }
          localStorage.setItem('user', JSON.stringify(loggedUser));
          toast.success('Login successful!', { position: 'top-right' });

          if (loggedUser.role === 'admin') {
            navigate('/admin/dashboard');
          } else {
            navigate('/dashboard', { replace: true });
          }
        } else {
          toast.error(result.message || 'Wrong Password!!', {
            position: 'top-right',
          });
        }
      } catch (err) {
        console.error('Login error:', err);
        toast.error('Something went wrong. Try again.', {
          position: 'top-right',
        });
      }
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#0a0612] overflow-hidden">
      <ToastContainer />
      <div className="absolute hidden md:block w-[500px] h-[500px] bg-[#4107a4]/40 blur-[160px] -top-20 -right-20"></div>
      <div className="absolute hidden md:block w-[400px] h-[400px] bg-[#4107a4]/30 blur-[140px] bottom-10 left-10"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full max-w-sm p-8 bg-white/5 border border-[#4107a4]/50 rounded-md backdrop-blur-xl text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]"
      >
        {/* Back to email step */}
        {step === 2 && (
          <button
            onClick={() => setStep(1)}
            className="absolute cursor-pointer bg-gray-400/10 p-2 rounded-md top-1 left-1 text-gray-400 hover:text-white transition-colors"
          >
            <FiArrowLeft size={20} />
          </button>
        )}

        <h2 className="text-2xl font-semibold mb-6 text-center tracking-wide">
          {step === 1 ? 'Welcome Back' : 'Enter Password'}
        </h2>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.form
              key="email"
              onSubmit={handleNext}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <label htmlFor="email" className="text-sm text-gray-300">
                Enter Your Email
              </label>

              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#0a0612] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4107a4]/70 placeholder:text-gray-400"
              />

              <button
                type="submit"
                className="w-full flex text-xl items-center justify-center gap-4 py-3 bg-[#4107a4] hover:bg-[#4107a4]/80 rounded-md font-medium transition-all cursor-pointer"
              >
                Next <FaArrowRightLong size={24} />
              </button>
            </motion.form>
          ) : (
            <motion.form
              key="password"
              onSubmit={handleNext}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <label htmlFor="password" className="text-sm text-gray-300">
                Enter Your Password
              </label>

              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#0a0612] border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4107a4]/50 pr-10"
                />

                {/* Password toggle */}
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  {showPass ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full flex items-center text-xl justify-center gap-2 py-3 bg-[#4107a4] hover:bg-[#4107a4]/80 rounded-md cursor-pointer font-medium transition-all"
              >
                Login
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
