import React, { useState, useEffect } from 'react';
import axios from 'axios';
// FIX: Removed 'react-icons/bs' import which caused the compilation error.
// We will use 'MoreVertical' from the already imported 'lucide-react' instead.
import { MoreVertical } from 'lucide-react'; // Using lucide-react for modern icons
import { LuCalendarDays, LuUser, LuWallet } from 'react-icons/lu';

// Configuration Constants
const API_BASE_URL = 'https://nazmulmotion.com/api/payment';
const DARK_BG = '#0a0612'; // Main background color
const SURFACE_DARK = '#151a24'; // Card and table body background
const SURFACE_LIGHT = '#202633'; // Table header and hover background
const PRIMARY_TEXT = '#f0f4f8'; // Main text color
const ACCENT_COLOR = '#4107a4'; // Highlight and gradient color

export const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/students/successful`);
        setStudents(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch students:', err);
        setError(
          'Failed to load student data. Please check the backend server status.'
        );
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Handler for the Action button (Placeholder)
  // IMPORTANT: Since the environment prevents the use of alert(), I'm replacing it with a console log for a mock action.
  const handleActionClick = (studentId) => {
    console.log(`Action requested for Data ID: ${studentId}`);
    // Use a custom message box/modal in a real app, not alert()
    console.log(`Mock: Showing options for Student ID: ${studentId}`);
  };

  // Helper function for rendering individual student cards (Mobile/Tablet View)
  const CardViewItem = ({ student }) => (
    <div
      key={student.transactionId}
      className="p-5 rounded-xl shadow-2xl transition duration-300 transform hover:scale-[1.02] border"
      style={{ backgroundColor: SURFACE_DARK, borderColor: SURFACE_LIGHT }}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold" style={{ color: PRIMARY_TEXT }}>
          <LuUser className="inline mr-2" style={{ color: ACCENT_COLOR }} />
          {student.name}
        </h3>
        <button
          onClick={() => handleActionClick(student._id)}
          className="p-1 rounded-full text-gray-400 hover:text-white transition duration-150"
          title="View Actions"
        >
          {/* Using MoreVertical from lucide-react */}
          <MoreVertical size={20} />
        </button>
      </div>

      <div className="space-y-2 text-sm">
        <p className="flex justify-between">
          <span className="text-gray-400">Email:</span>
          <span className="font-medium text-white">{student.email}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-400">Phone:</span>
          <span className="font-medium text-white">{student.phone}</span>
        </p>
        <div
          className="pt-2 border-t border-dashed"
          style={{ borderColor: SURFACE_LIGHT }}
        >
          <p className="flex justify-between items-center pt-2">
            <span className="text-gray-400 flex items-center">
              <LuWallet size={16} className="mr-1 text-teal-400" />
              Amount Paid:
            </span>
            <span className="text-lg font-extrabold text-teal-400">
              BDT {student.amount.toLocaleString()}
            </span>
          </p>
          <p className="flex justify-between text-xs pt-1">
            <span className="text-gray-500 flex items-center">
              <LuCalendarDays size={14} className="mr-1" />
              Enrollment Date:
            </span>
            <span className="text-gray-400">
              {new Date(student.enrollmentDate).toLocaleDateString()}
            </span>
          </p>
        </div>
        <p className="text-xs text-gray-500 pt-2 break-all">
          <span className="font-semibold text-gray-400">TID:</span>{' '}
          {student.transactionId}
        </p>
        <p className="text-xs text-gray-500 break-all">
          <span className="font-semibold text-gray-400">Data ID:</span>{' '}
          {student._id ? student._id.substring(0, 12) + '...' : 'N/A'}
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
        Loading student data...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="p-8 text-2xl text-red-400 min-h-screen"
        style={{ backgroundColor: DARK_BG }}
      >
        🚨 Error: {error}
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div
        className="p-8 text-2xl text-gray-500 min-h-screen flex justify-center items-center"
        style={{ backgroundColor: DARK_BG }}
      >
        No students have successfully enrolled yet.
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
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-[150px] opacity-30 pointer-events-none"
        style={{ backgroundColor: ACCENT_COLOR }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full mix-blend-multiply filter blur-[150px] opacity-20 pointer-events-none"
        style={{ backgroundColor: '#20c997' }}
      ></div>

      <h1
        className="text-3xl sm:text-4xl font-extrabold mb-8 relative z-10"
        style={{ color: PRIMARY_TEXT }}
      >
        Enrolled Students{' '}
        <span className="text-sm font-normal text-gray-400">
          ({students.length} Total)
        </span>
      </h1>

      {/* 1. Mobile & Tablet Card View (Hidden on md and larger) */}
      <div className="md:hidden space-y-4 relative z-10">
        {students.map((student) => (
          <CardViewItem key={student.transactionId} student={student} />
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
                  Enrollment Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-300">
                  Transaction ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-300">
                  Data ID
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-300">
                  Amount Paid
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-300">
                  Action
                </th>
              </tr>
            </thead>
            <tbody
              style={{ backgroundColor: SURFACE_DARK, color: PRIMARY_TEXT }}
              className="divide-y"
            >
              {students.map((student) => (
                <tr
                  key={student.transactionId}
                  className="transition duration-150 ease-in-out hover:bg-opacity-90"
                  style={{ borderColor: SURFACE_LIGHT }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {student.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {student.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {new Date(student.enrollmentDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                    {student.transactionId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                    {student._id ? student._id.substring(0, 8) + '...' : 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-teal-400">
                    BDT {student.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <button
                      onClick={() => handleActionClick(student._id)}
                      className="text-gray-400 hover:text-white p-2 rounded-full transition duration-150 hover:bg-[#2a303e]"
                      title="View Actions"
                    >
                      {/* Using MoreVertical from lucide-react */}
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
