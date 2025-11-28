import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function SuccessPage() {
  const [showSuccess, setShowSuccess] = useState(true);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  // Get JWT token from URL query params on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      // Optionally store temporarily to localStorage for first-time login
      localStorage.setItem('temp_jwt', tokenFromUrl);
    } else {
      console.warn('No token found in URL');
    }
  }, []);

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setTimeout(() => setShowPasswordModal(true), 300);
  };

  const handleCreatePassword = async () => {
    if (password.trim().length < 4) {
      return alert('Password must be at least 4 characters');
    }

    // Use token from state or fallback to temp storage
    const jwtToken = token || localStorage.getItem('temp_jwt');
    if (!jwtToken) {
      return alert('Verification token missing');
    }

    try {
      const res = await fetch(
        'https://nazmulmotion.com/api/auth/set-password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwtToken}`,
          },
          body: JSON.stringify({ password }),
        }
      );

      const result = await res.json();

      if (res.ok) {
        // Store JWT permanently in localStorage for future visits
        localStorage.setItem('jwt', jwtToken);
        localStorage.removeItem('temp_jwt');

        alert('Password set successfully!');
        navigate('/dashboard', { replace: true });
      } else {
        alert(result.message || 'Failed to set password');
      }
    } catch (err) {
      console.error('Error setting password:', err);
      alert('Something went wrong. Try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0d0d] text-white">
      <AnimatePresence>
        {/* Payment Success Modal */}
        {showSuccess && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 w-[400px] relative text-center shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={handleCloseSuccess}
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
              >
                <X size={18} />
              </button>
              <h2 className="text-2xl font-semibold text-black mb-2">
                Payment Successful 🎉
              </h2>
              <p className="text-gray-600">
                Your payment has been processed successfully!
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Set Password Modal */}
        {showPasswordModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-[#0a0612] border-gray-50 border rounded-2xl p-8 w-[400px] shadow-2xl text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h2 className="text-2xl font-semibold text-yellow-500 mb-2">
                Set Your Password
              </h2>
              <p className="text-gray-300 mb-4">
                Create a password for your new account.
              </p>
              <input
                type="password"
                className="border border-gray-400 rounded-md w-full text-white px-3 py-2 placeholder:text-white outline-none"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={handleCreatePassword}
                className="mt-4 w-full bg-[#4107a4] text-white font-medium py-2 rounded-md hover:bg-[#2e0574] transition"
              >
                Create & Continue
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
