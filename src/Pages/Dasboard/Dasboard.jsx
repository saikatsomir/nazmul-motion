import React, { useEffect, useState } from 'react';
import {
  Home,
  BookOpen,
  LineChart,
  User,
  LogOut,
  ChevronRight,
  Menu,
  X,
  AlertTriangle, // Icon for the modal
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', icon: Home, href: '#dashboard' },
  { name: 'Assignments', icon: BookOpen, href: '#assignments' },
  { name: 'Course Progress', icon: LineChart, href: '#progress' },
  { name: 'About you', icon: User, href: '#profile' },
];

const BG_DARK = 'bg-[#0a0612]';
const ACCENT_COLOR = '#059669';

// --- LOGOUT CONFIRMATION MODAL COMPONENT ---
const LogoutConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    // Backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="bg-[#0d051d] text-white p-8 rounded-xl shadow-2xl max-w-sm w-full border border-red-700/50 transform transition-all duration-300 scale-100">
        <div className="text-center space-y-5">
          <AlertTriangle size={48} className="mx-auto text-red-500" />
          <h3 className="text-2xl font-bold text-white">Confirm Logout</h3>
          <p className="text-gray-400">
            Are you sure you want to log out? You will be redirected to the
            login page.
          </p>

          <div className="flex justify-center space-x-4 pt-4">
            <button
              onClick={onCancel}
              className="px-6 py-2 rounded-lg font-semibold transition bg-gray-700 hover:bg-gray-600 border border-white/10"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-6 py-2 rounded-lg font-semibold transition bg-red-700 hover:bg-red-600 shadow-md shadow-red-900/40"
            >
              Sure, Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- DASHBOARD PAGE COMPONENT ---
export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false); // NEW STATE
  const navigate = useNavigate();

  useEffect(() => {
    const simulateFetch = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setData({ message: 'Elias' });
      // Simulate checking for a JWT on load
      const jwt = localStorage.getItem('user');

      if (jwt) {
        console.log('JWT found, user is authenticated.');
      }
      console.log('Simulated Dashboard Data Loaded.');
    };

    simulateFetch();
  }, []);

  // --- LOGOUT HANDLERS UPDATE ---

  // 1. Open the Modal
  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  // 2. Handle Logout Confirmation (Actual Logic)
  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);

    // 2. Remove JWT (Simulated keys based on your previous code)
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');

    // Also remove the key used in the loading screen check
    localStorage.removeItem('authToken');

    console.log('JWT removed. Redirecting...');

    // 3. Redirect to login page (Simulated)
    setTimeout(() => {
      // **REAL REDIRECTION LOGIC**
      // In a real app, this should redirect the user:
      // window.location.href = '/login';

      // For this example, we'll reset state to show unauthenticated state:
      // alert('Logged out successfully! Redirecting to /login...');
      navigate('/login', { replace: true });
      setData(null);
    }, 300);
  };

  // 3. Handle Cancel
  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
    console.log('Logout cancelled.');
  };
  // ---------------------------

  const handleTabClick = (name) => {
    setActiveTab(name);
    setIsSidebarOpen(false);
  };

  if (!data)
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${BG_DARK} text-white`}
      >
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-green-600 animate-pulse"></div>
          <div className="w-4 h-4 rounded-full bg-green-600 animate-pulse delay-150"></div>
          <div className="w-4 h-4 rounded-full bg-green-600 animate-pulse delay-300"></div>
          <div className="text-xl">
            {localStorage.getItem('authToken')
              ? 'Logging out...'
              : 'Loading Dashboard...'}
          </div>
        </div>
      </div>
    );

  const renderMainContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <div className="space-y-6 md:space-y-10 min-h-full bg-[#0d051d] p-4 sm:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-white/5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Welcome back,{' '}
              <span style={{ color: ACCENT_COLOR }}>{data.message}</span>!
            </h2>

            <p className="text-gray-400 text-base sm:text-xl max-w-3xl">
              Here is an overview of your academic journey. Let's make today
              productive and achieve your goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              <Card
                title="Courses Enrolled"
                value="5"
                accentColor={`border-l-[${ACCENT_COLOR}] text-[${ACCENT_COLOR}]`}
                icon={BookOpen}
              />
              <Card
                title="Pending Assignments"
                value="3"
                accentColor="border-l-[#ffcc00] text-[#ffcc00]"
                icon={BookOpen}
              />
              <Card
                title="Overall Progress"
                value="78%"
                accentColor="border-l-[#007bff] text-[#007bff]"
                icon={LineChart}
              />
              <Card
                title="Last Login"
                value="1h ago"
                accentColor="border-l-[#ff0066] text-[#ff0066]"
                icon={User}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 pt-4">
              <div
                className={`lg:col-span-2 bg-green-950 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-white/5`}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6 border-b border-white/5 pb-2 md:pb-4 text-white">
                  Recent Course Activity
                </h3>
                <ul className="space-y-3 md:space-y-4 text-gray-300">
                  <ActivityItem
                    status="New Lecture"
                    detail="Calculus I - Chapter 3. Vectors and Motion."
                    color={ACCENT_COLOR}
                  />
                  <ActivityItem
                    status="Due Soon"
                    detail="History Essay on the Roman Empire due in 2 days."
                    color="#ffcc00"
                  />
                  <ActivityItem
                    status="Update"
                    detail="Computer Science lab sessions moved to Room 404."
                    color="#007bff"
                  />
                </ul>
              </div>
              <div
                className={`bg-green-950 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-white/5`}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6 border-b border-white/5 pb-2 md:pb-4 text-white">
                  Quick Actions
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <ActionButton
                    text="View All Assignments"
                    color={`bg-green-600`}
                    hover="hover:bg-opacity-80"
                    textColor="text-[#030712]"
                  />
                  <ActionButton
                    text="Review Latest Grade"
                    color="bg-[#ffcc00]"
                    hover="hover:bg-opacity-80"
                    textColor="text-[#030712]"
                  />
                  <ActionButton
                    text="Go to Help Center"
                    color="bg-[#284D46]"
                    hover="hover:bg-[#386358]"
                    textColor="text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 'Assignments':
        return (
          <PlaceholderContent
            title="Assignments Portal"
            description="Manage all your current and past assignments here. Use the filter options below to find your work."
            accentColor={ACCENT_COLOR}
          />
        );
      case 'Course Progress':
        return (
          <PlaceholderContent
            title="Detailed Progress Analytics"
            description="View detailed analytics and progress reports for all your courses, including performance graphs."
            accentColor={ACCENT_COLOR}
          />
        );
      case 'About you':
        return (
          <PlaceholderContent
            title="User Profile Management"
            description="Update your personal details, academic preferences, and notification settings here."
            accentColor={ACCENT_COLOR}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`flex min-h-screen ${BG_DARK} text-white`}>
      <button
        className={`lg:hidden fixed top-4 left-4 z-50 p-2 rounded-full transition-all duration-300 ${
          isSidebarOpen ? 'bg-red-700' : 'bg-green-600/90'
        }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 md:w-72 bg-[#0d051d] border-r border-white/5 p-6 md:p-8 flex flex-col justify-between z-20 
          shadow-[8px_0_15px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="space-y-10 md:space-y-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-600">
            <span className="text-white">EDU.</span>DASH
          </h1>

          <nav className="space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => handleTabClick(item.name)}
                  className={`w-full text-left flex items-center gap-4 px-5 py-3 rounded-md transition-all duration-200 font-medium tracking-wide
                    ${
                      isActive
                        ? `bg-green-600 text-[#030712] shadow-lg shadow-[${ACCENT_COLOR}]/30`
                        : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/10'
                    }`}
                >
                  <Icon size={22} /> {item.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* LOGOUT BUTTON - Calls new handleLogoutClick to show modal */}
        <button
          onClick={handleLogoutClick}
          className="flex items-center justify-center gap-4 px-4 py-3 rounded-md bg-red-700/70 hover:bg-red-800 transition font-medium text-white shadow-lg shadow-red-900/40 text-lg mt-8"
        >
          <LogOut size={22} /> Log Out
        </button>
      </aside>

      <main className="flex-1 lg:ml-72 p-4 pt-20 md:p-8 lg:px-12 lg:pt-20 lg:pb-12">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-10 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
        {renderMainContent()}
      </main>

      {/* RENDER MODAL CONDITIIONALLY */}
      {showLogoutModal && (
        <LogoutConfirmationModal
          onConfirm={handleLogoutConfirm}
          onCancel={handleLogoutCancel}
        />
      )}
    </div>
  );
}

// Card, PlaceholderContent, ActivityItem, ActionButton remain unchanged
const Card = ({ title, value, accentColor, icon: Icon }) => (
  <div
    className={`bg-green-950/40 p-4 sm:p-6 rounded-xl md:rounded-2xl shadow-xl border border-white/5 ${accentColor} border-l-4 transform hover:scale-[1.03] transition duration-300 ease-in-out`}
  >
    <div className="flex justify-between items-start">
      <p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider">
        {title}
      </p>
      <Icon size={20} className={accentColor.split(' ')[1]} />
    </div>
    <p className="mt-1 sm:mt-2 text-3xl sm:text-4xl font-extrabold text-white">
      {value}
    </p>
  </div>
);

const PlaceholderContent = ({ title, description, accentColor }) => (
  <div
    className={`min-h-full flex flex-col items-center justify-center p-6 md:p-12 bg-[#0d051d] rounded-xl shadow-2xl border `}
  >
    <div className="text-center space-y-4 md:space-y-6 max-w-2xl">
      <div
        className="inline-block p-3 md:p-4 rounded-full bg-white/5 border border-white/10"
        style={{ color: accentColor }}
      >
        <ChevronRight size={30} md:size={40} />
      </div>
      <h1 className="text-3xl md:text-5xl font-extrabold text-white">
        {title}
      </h1>
      <p className="text-base md:text-xl text-gray-400">{description}</p>
      <div className="pt-4 md:pt-6">
        <button
          className="px-6 py-3 md:px-8 md:py-4 rounded-md text-[#030712] font-bold text-base md:text-lg hover:bg-opacity-90 transition shadow-lg"
          style={{ backgroundColor: accentColor }}
        >
          Start Working Here
        </button>
      </div>
    </div>
  </div>
);

const ActivityItem = ({ status, detail, color }) => (
  <li className="flex items-start space-x-3 text-sm md:text-base">
    <div
      className="mt-1 w-2 h-2 rounded-full shrink-0"
      style={{ backgroundColor: color }}
    ></div>
    <p>
      <span className="font-semibold" style={{ color: color }}>
        {status}:
      </span>{' '}
      {detail}
    </p>
  </li>
);

const ActionButton = ({ text, color, hover, textColor }) => (
  <button
    className={`w-full py-3 px-4 rounded-md ${color} ${textColor} font-semibold transition duration-200 transform hover:scale-[1.01] ${hover} shadow-md text-sm md:text-base`}
  >
    {text}
  </button>
);
