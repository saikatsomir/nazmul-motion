import { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  Home,
  FileText,
  Calendar,
  BarChart,
  Users,
  Settings,
  HelpCircle,
  Search,
  User,
  Menu,
  X,
  LogOutIcon,
} from 'lucide-react';

const allMenuItems = [
  {
    name: 'Dashboard',
    icon: Home,
    link: '/admin/dashboard',
    badge: null,
    section: 'MENU',
  },
  {
    name: 'Students',
    icon: FileText,
    link: '/admin/dashboard/students', // New route for students
    badge: '12+',
    section: 'MENU',
  },
  {
    name: 'Pendings',
    icon: Calendar,
    link: '/admin/dashboard/pedings', // New route for pendings
    badge: null,
    section: 'MENU',
  },
  {
    name: 'Analytics',
    icon: BarChart,
    link: '/admin/dashboard/analytics',
    badge: null,
    section: 'MENU',
  },
  {
    name: 'Team',
    icon: Users,
    link: '/admin/dashboard/team',
    badge: null,
    section: 'MENU',
  },
  {
    name: 'Settings',
    icon: Settings,
    link: '/admin/dashboard/settings',
    badge: null,
    section: 'GENERAL',
  },
  {
    name: 'Help',
    icon: HelpCircle,
    link: '/admin/dashboard/help',
    badge: null,
    section: 'GENERAL',
  },
];
const menuItems = allMenuItems.filter((item) => item.section === 'MENU');
const generalItems = allMenuItems.filter((item) => item.section === 'GENERAL');

const SidebarMenuItem = ({ item, closeSidebar }) => {
  const Icon = item.icon;

  const isDashboardBase = item.name === 'Dashboard';

  return (
    <NavLink
      to={item.link}
      onClick={closeSidebar}
      end={isDashboardBase}
      className={({ isActive }) =>
        `flex items-center py-2 px-4 rounded-lg transition text-sm font-medium ${
          isActive && isDashboardBase
            ? 'bg-green-700/60 text-white font-semibold'
            : isActive
            ? 'bg-gray-700 text-white'
            : 'text-gray-300 hover:bg-gray-800'
        }`
      }
    >
      <Icon size={18} className="mr-3" />
      {item.name}
      {item.badge && (
        <span className="ml-auto text-xs bg-green-700/80 text-white rounded-full px-2 py-0.5">
          {item.badge}
        </span>
      )}
    </NavLink>
  );
};

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Admin Panel | Nazmul Motion';
  }, []);

  const handleLogout = () => {
    // Clear user data
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');

    // Redirect to login
    navigate('/login', { replace: true });
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="h-screen flex bg-[#0a0612] text-white overflow-hidden relative z-40">
      <div className="absolute hidden md:block w-[500px] h-[500px] bg-[#4107a4]/10 blur-[150px] -top-20  -z-10 -right-20"></div>

      <aside
        className={`fixed z-40 w-64 bg-[#0a0612] p-6 shadow-xl border-r border-gray-800 flex-col justify-between h-full transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0 flex' : '-translate-x-full hidden'
        } lg:flex lg:translate-x-0 lg:shadow-sm`}
      >
        <button
          onClick={closeSidebar}
          className="absolute top-4 right-4 text-white lg:hidden hover:text-gray-400"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col justify-between h-full overflow-y-auto">
          <div>
            <div className="flex items-center mb-10 text-xl font-bold text-white">
              <span className="text-green-500 text-2xl">Nazmul Motion</span>
            </div>

            <nav className="space-y-4">
              {/* MENU Items */}
              <div>
                <p className="uppercase text-2xl font-semibold mb-2 text-white">
                  MENU
                </p>
                <div className="space-y-1">
                  {menuItems.map((item) => (
                    <SidebarMenuItem
                      key={item.name}
                      item={item}
                      closeSidebar={closeSidebar}
                    />
                  ))}
                </div>
              </div>
            </nav>
          </div>

          {/* GENERAL Items (Moved to the bottom) */}
          <nav className="mt-8 space-y-4 pt-4 border-t border-gray-800">
            <div>
              <p className="uppercase text-2xl font-semibold mb-2 text-white">
                GENERAL
              </p>
              <div className="space-y-1">
                {generalItems.map((item) => (
                  <SidebarMenuItem
                    key={item.name}
                    item={item}
                    closeSidebar={closeSidebar}
                  />
                ))}

                <button
                  onClick={handleLogout}
                  className="text-gray-300 bg-red-800 hover:bg-red-700 cursor-pointer py-2 w-40 ml-4 text-[14px] flex items-center rounded-md mt-4 justify-center  gap-3"
                >
                  <LogOutIcon size={16} /> Logout
                </button>
              </div>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 lg:ml-64 overflow-y-auto px-10 pt-5">
        {/* Header/Top Bar (Unchanged) */}
        <header className="flex justify-between items-center bg-[#0a0612] p-4 rounded-xl shadow-lg border border-gray-800 mb-6 lg:mb-8 sticky top-0 z-50">
          <button
            onClick={toggleSidebar}
            className="p-2 mr-3 rounded-md hover:bg-gray-700 text-white lg:hidden"
          >
            <Menu size={24} />
          </button>

          <div className="flex items-center w-full max-w-xs md:max-w-lg border h-12 px-4 rounded-xl border-gray-700 ">
            <Search size={20} className="text-gray-500 mr-2 hidden sm:block" />
            <input
              type="text"
              placeholder="Search task"
              className="w-full text-sm p-1 bg-[#0a0612] text-white focus:outline-none placeholder-gray-500"
            />
            <button className="hidden sm:block text-sm font-medium text-gray-400 border border-gray-700 rounded-lg px-3 py-1 ml-2 hover:bg-gray-800">
              <span className="font-mono">⌘k</span>
            </button>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            {['FileText', 'Calendar', 'User'].map((IconName, index) => {
              const IconComponent = { FileText, Calendar, User }[IconName];
              return (
                <button
                  key={index}
                  className="hidden sm:block p-2 rounded-full hover:bg-gray-700 text-gray-400"
                >
                  <IconComponent size={20} />
                </button>
              );
            })}

            <div className="flex items-center pl-4 border-l border-gray-700">
              <div className="text-right mr-3 hidden md:block">
                <p className="font-semibold text-sm">Totok Michael</p>
                <p className="text-xs text-gray-400">tmichael20@gmail.com</p>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-600 overflow-hidden border-2 border-green-500">
                <img
                  src="path/to/avatar.jpg"
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area: Renders the child route element (e.g., DashboardContent) */}
        <main className=" pt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
