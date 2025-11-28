import React from 'react';
import not from './404.png';
// Reusing configuration constants for visual consistency
const DARK_BG = '#0a0612';
const PRIMARY_TEXT = '#f0f4f8';
const ACCENT_COLOR_BASE = '#4107a4'; // Base accent color for highlight

export const NotFound = () => {
  return (
    // <div
    //   className="flex flex-col  items-center justify-center min-h-screen p-8 font-sans"
    //   style={{ backgroundColor: DARK_BG, color: PRIMARY_TEXT }}
    // >
    //   <div className="relative text-center ">
    //     {/* Large, dramatic 404 number */}
    //     <p
    //       className="text-[12rem] sm:text-[18rem] font-extrabold opacity-10"
    //       style={{ color: ACCENT_COLOR_BASE }}
    //     >
    //       404
    //     </p>

    //     {/* Main error message overlaying the large number */}
    //     <div className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    //       <h1 className="text-4xl    font-extrabold mb-4">Page Not Found</h1>
    //       <p className="text-xl sm:text-2xl text-gray-400 mb-8">
    //         The resource you requested could not be located.
    //       </p>

    //       {/* Subtle Call to Action */}
    //       <button
    //         // IMPORTANT: In a real routing setup (e.g., using React Router's useNavigate),
    //         // you would use a proper navigation function here. This is a mock for context.
    //         onClick={() => console.log('Mock: Navigating to home')}
    //         className="px-6 py-3 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg"
    //         style={{
    //           backgroundColor: ACCENT_COLOR_BASE,
    //           color: PRIMARY_TEXT,
    //           boxShadow: `0 4px 15px ${ACCENT_COLOR_BASE}80`,
    //         }}
    //       >
    //         Go Back Home
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="flex justify-center items-center bg-[#0a0612]">
      <img className="w-[800px]" src={not} alt="" />
    </div>
  );
};
