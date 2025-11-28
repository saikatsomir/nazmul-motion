import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MoreVertical,
  Shield,
  Mail,
  Phone,
  User,
  CalendarDays,
} from 'lucide-react';

// Configuration Constants
const API_BASE_URL = 'https://nazmulmotion.com/api/payment';
const DARK_BG = '#0a0612'; // Main background color
const SURFACE_DARK = '#151a24'; // Card and table body background
const SURFACE_LIGHT = '#202633'; // Table header and hover background
const PRIMARY_TEXT = '#f0f4f8'; // Main text color
const ADMIN_HIGHLIGHT = '#4107a4'; // Primary accent color for Admin

export const AdminUsers = () => {
  const [adminUsers, setAdminUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminUsers = async () => {
      try {
        // Fetch data from the assumed admin endpoint
        const response = await axios.get(`${API_BASE_URL}/teams`);
        console.log('Fetched Admin users:', response.data);
        setAdminUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch Admin users:', err);
        setError(
          'Failed to load Admin user data. Ensure the server is running and the "users/admin" endpoint is accessible.'
        );
        setLoading(false);
      }
    };

    fetchAdminUsers();
  }, []);

  // Handler for the Action button (Placeholder: e.g., Edit Role, Disable User)
  const handleActionClick = (userId, userName) => {
    console.log(`Admin action requested for User ID: ${userId}`);
    // Use a custom message box/modal in a real app
    console.log(`Mock: Opening options for Admin: ${userName}`);
  };

  // Helper function for rendering individual admin cards (Mobile/Tablet View)
  const CardViewItem = ({ user }) => (
    <div
      key={user._id}
      className="p-5 rounded-xl shadow-2xl transition duration-300 transform hover:scale-[1.02] border relative"
      style={{ backgroundColor: SURFACE_DARK, borderColor: SURFACE_LIGHT }}
    >
      {/* Admin Badge */}
      <div
        className="absolute top-0 right-0 px-3 py-1 text-xs font-bold rounded-tr-xl rounded-bl-xl uppercase"
        style={{ backgroundColor: ADMIN_HIGHLIGHT, color: PRIMARY_TEXT }}
      >
        <Shield size={12} className="inline mr-1" /> {user.role || 'ADMIN'}
      </div>

      <div className="flex justify-between items-start mb-3 pt-2">
        <h3 className="text-xl font-bold" style={{ color: PRIMARY_TEXT }}>
          <User className="inline mr-2" style={{ color: ADMIN_HIGHLIGHT }} />
          {user.name}
        </h3>
        <button
          onClick={() => handleActionClick(user._id, user.name)}
          className="p-1 rounded-full text-gray-400 hover:text-white transition duration-150"
          title="Admin Actions"
        >
          <MoreVertical size={20} />
        </button>
      </div>

      <div className="space-y-3 text-sm">
        <p className="flex justify-between items-center">
          <span className="text-gray-400 flex items-center">
            <Mail size={16} className="mr-2 text-gray-500" /> Email:
          </span>
          <span className="font-medium text-white">{user.email}</span>
        </p>
        <p className="flex justify-between items-center">
          <span className="text-gray-400 flex items-center">
            <Phone size={16} className="mr-2 text-gray-500" /> Phone:
          </span>
          <span className="font-medium text-white">{user.phone || 'N/A'}</span>
        </p>
        <div
          className="pt-3 border-t border-dashed"
          style={{ borderColor: SURFACE_LIGHT }}
        >
          <p className="flex justify-between text-xs pt-1">
            <span className="text-gray-500 flex items-center">
              <CalendarDays size={14} className="mr-1" />
              Member Since:
            </span>
            <span className="text-gray-400">
              {user.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : 'Unknown'}
            </span>
          </p>
        </div>
        <p className="text-xs text-gray-500 pt-2 break-all">
          <span className="font-semibold text-gray-400">User ID:</span>{' '}
          {user._id ? user._id.substring(0, 12) + '...' : 'N/A'}
        </p>
      </div>
    </div>
  );

  // --- RENDERING LOGIC ---

  if (loading) {
    return (
      <div
        className="flex justify-center items-center min-h-screen text-3xl font-light"
        style={{ backgroundColor: DARK_BG, color: PRIMARY_TEXT }}
      >
        Loading admin panel data...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="p-8 text-2xl text-red-400 min-h-screen"
        style={{ backgroundColor: DARK_BG }}
      >
        🚨 Error Accessing Admin Data: {error}
      </div>
    );
  }

  if (adminUsers.length === 0) {
    return (
      <div
        className="p-8 text-2xl text-gray-500 min-h-screen flex justify-center items-center"
        style={{ backgroundColor: DARK_BG }}
      >
        No active administrative users found.
      </div>
    );
  }

  return (
    <div
      className="p-4 sm:p-8 min-h-screen relative overflow-hidden font-sans"
      style={{ backgroundColor: DARK_BG, color: PRIMARY_TEXT }}
    >
      {/* Background Gradient Blur Effects */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-[150px] opacity-40 pointer-events-none"
        style={{ backgroundColor: ADMIN_HIGHLIGHT }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full mix-blend-multiply filter blur-[150px] opacity-20 pointer-events-none"
        style={{ backgroundColor: '#20c997' }} // Secondary color for contrast
      ></div>

      <h1
        className="text-3xl sm:text-4xl font-extrabold mb-8 relative z-10 flex items-center"
        style={{ color: ADMIN_HIGHLIGHT }}
      >
        <Shield size={36} className="mr-3" />
        Admin User Dashboard{' '}
        <span className="text-sm font-normal text-gray-400 ml-3">
          ({adminUsers.length} Total)
        </span>
      </h1>

      {/* 1. Mobile & Tablet Card View (Hidden on md and larger) */}
      <div className="md:hidden space-y-4 relative z-10">
        {adminUsers.map((user) => (
          <CardViewItem key={user._id} user={user} />
        ))}
      </div>

      {/* 2. Desktop Table View (Visible on md and larger) */}
      <div className="hidden md:block shadow-2xl rounded-xl overflow-hidden relative z-10">
        <div className="overflow-x-auto">
          <table
            className="min-w-full divide-y"
            style={{ borderColor: SURFACE_LIGHT }}
          >
            <thead style={{ backgroundColor: SURFACE_LIGHT }}>
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-300">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-300">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-300">
                  Phone
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-300">
                  Role
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-300">
                  Member Since
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-300">
                  User ID
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody
              style={{ backgroundColor: SURFACE_DARK, color: PRIMARY_TEXT }}
              className="divide-y"
            >
              {adminUsers.map((user) => (
                <tr
                  key={user._id}
                  className="transition duration-150 ease-in-out hover:bg-opacity-90"
                  style={{ borderColor: SURFACE_LIGHT }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {user.phone || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-bold uppercase">
                    <span
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        backgroundColor: ADMIN_HIGHLIGHT,
                        color: PRIMARY_TEXT,
                      }}
                    >
                      {user.role || 'Admin'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                    {user._id ? user._id.substring(0, 8) + '...' : 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <button
                      onClick={() => handleActionClick(user._id, user.name)}
                      className="text-gray-400 hover:text-white p-2 rounded-full transition duration-150 hover:bg-[#2a303e]"
                      title="Admin Actions"
                    >
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
