// DashboardContent.jsx

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
} from 'recharts';
import { motion } from 'framer-motion';
import {
  Plus,
  Upload,
  ChevronUp,
  Clock,
  Bell,
  Calendar,
  FileText,
  Users,
} from 'lucide-react';

// --- MOCK DATA (Copy all relevant mock data here) ---
const assignmentList = [
  {
    title: 'Database Migration Prep',
    due: 'Nov 20',
    status: 'Pending',
    statusColor: 'bg-red-100 text-red-700',
  },
  {
    title: 'Unit Testing Module 3',
    due: 'Nov 22',
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    title: 'Review Figma Designs',
    due: 'Nov 25',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    title: 'Deploy Staging Server',
    due: 'Nov 30',
    status: 'Pending',
    statusColor: 'bg-red-100 text-red-700',
  },
];

const adminUsers = [
  {
    initials: 'TM',
    name: 'Totok Michael',
    status: 'Admin',
    avatarColor: 'bg-green-600',
  },
  {
    initials: 'JS',
    name: 'Jane Smith',
    status: 'Admin',
    avatarColor: 'bg-blue-600',
  },
  {
    initials: 'AM',
    name: 'Alex Masha',
    status: 'Inactive',
    avatarColor: 'bg-yellow-600',
  },
];

const analyticsData = [
  { day: 'D-9', completed: 35, total: 100 },
  { day: 'D-8', completed: 50, total: 100 },
  { day: 'D-7', completed: 85, total: 100 },
  { day: 'D-6', completed: 40, total: 100 },
  { day: 'D-5', completed: 95, total: 100 },
  { day: 'D-4', completed: 70, total: 100 },
  { day: 'D-3', completed: 25, total: 100 },
  { day: 'D-2', completed: 60, total: 100 },
  { day: 'D-1', completed: 80, total: 100 },
  { day: 'Today', completed: 45, total: 100 },
];

const reminders = [
  {
    title: 'Meeting with Arc Company',
    time: '02:00 pm - 04:00 pm',
    action: 'Start Meeting',
    color: 'bg-green-600',
    icon: Calendar,
  },
  {
    title: 'Send Quarterly Report',
    time: 'Due: 05:00 pm Today',
    action: 'View Task',
    color: 'bg-yellow-600',
    icon: FileText,
  },
];

const classProgressData = [
  { name: 'Completed', value: 41, color: '#10B981' }, // green-500
  { name: 'In Progress', value: 35, color: '#F59E0B' }, // amber-500
  { name: 'Pending', value: 24, color: '#EF4444' }, // red-500
];

// --- HELPER COMPONENTS (Copy all helper components here) ---

const Card = ({ title, value, increase }) => (
  <div className="bg-[#0a0612] text-white p-5 rounded-xl shadow-md flex-1 min-w-0 border border-gray-800 relative overflow-hidden z-40">
    <div className="absolute  bg-[#4107a4] w-24 h-24 -bottom-10 -right-10  -z-10 blur-[90px]  " />
    <div className="absolute  bg-[#4107a4] w-24 h-24 -top-10 -left-10  -z-10 blur-[80px]  " />
    <div className="flex justify-between items-center">
      <p className="text-sm font-medium text-white/80">{title}</p>
      <div className="w-6 h-6 rounded-full bg-[#0a0612]/20 flex items-center justify-center">
        <ChevronUp size={14} className="transform rotate-45 text-white/60" />
      </div>
    </div>
    <h3 className="text-3xl font-bold mt-2 text-white">{value}</h3>
    {increase && (
      <p className="text-xs mt-1 flex items-center opacity-80">
        <ChevronUp size={12} className="text-green-400" />
        <span className="ml-1 text-white">{increase}</span>
      </p>
    )}
  </div>
);

const getColorForProgress = (percent) => {
  if (percent >= 80) return '#10B981'; // Tailwind green-500
  if (percent >= 50) return '#F59E0B'; // Tailwind amber-500 (Orange)
  return '#EF4444'; // Tailwind red-500
};

const AnalyticsBarChart = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-gray-700/90 text-white p-3 rounded-lg shadow-md border border-gray-600">
          <p className="font-bold">{label}</p>
          <p className="text-sm mt-1">
            Enrollment: <span className="font-semibold">{data.completed}%</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-48">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={analyticsData}
          margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#374151"
          />
          <XAxis dataKey="day" stroke="#9CA3AF" tick={{ fontSize: 10 }} />
          <YAxis
            stroke="#9CA3AF"
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            tick={{ fontSize: 10 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
          />

          <Bar dataKey="completed" barSize={40} radius={[4, 4, 0, 0]}>
            {analyticsData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={getColorForProgress(entry.completed)}
              />
            ))}
          </Bar>
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

const ClassProgressCard = () => {
  const renderCustomLabel = ({ cx, cy }) => {
    return (
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill="white"
        className="font-bold"
      >
        <tspan x={cx} dy="-10" fontSize="20">
          {classProgressData[0].value}%
        </tspan>
        <tspan x={cx} dy="20" fontSize="12" fill="#9CA3AF">
          Completed
        </tspan>
      </text>
    );
  };

  const CustomLegend = (props) => {
    const { payload } = props;
    return (
      <ul className="flex flex-wrap justify-center space-x-4 mt-4 text-xs">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} className="flex items-center text-gray-400">
            <span
              className="w-2 h-2 rounded-full mr-1"
              style={{ backgroundColor: entry.color }}
            ></span>
            {entry.value}%
          </li>
        ))}
      </ul>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#0a0612] p-6 h-full rounded-xl shadow-sm border border-gray-800 text-center relative overflow-hidden z-40"
    >
      <div className="absolute  bg-[#4107a4] w-24 h-24 -top-10 -right-10  -z-10 blur-[90px]  " />
      <div className="absolute  bg-[#4107a4] w-24 h-24 -bottom-10 -left-10  -z-10 blur-[100px]  " />
      <h2 className="text-lg font-semibold mb-2">Overall Progress</h2>
      <p className="text-gray-400 text-sm mb-4">
        Current Status Across All Classes
      </p>

      <div className="w-full h-48 ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={classProgressData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              fill="#8884d8"
              labelLine={false}
              label={renderCustomLabel}
            >
              {classProgressData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              content={<CustomLegend />}
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

const RemindersCard = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="bg-[#0a0612] p-6 rounded-xl shadow-sm border border-gray-800 h-full min-h-[250px] relative overflow-hidden z-40 flex flex-col"
  >
    <div className="absolute  bg-[#4107a4] w-24 h-24 -bottom-10 -right-10  -z-10 blur-[100px]  " />
    <div className="absolute  bg-[#4107a4] w-24 h-24 -top-10 -left-10  -z-10 blur-[100px]  " />
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">Reminders</h2>
      <Bell size={20} className="text-yellow-500" />
    </div>

    <div className="space-y-3 grow overflow-y-auto pr-2">
      {reminders.map((reminder, index) => {
        const Icon = reminder.icon;
        return (
          <div
            key={index}
            className={`border border-gray-700 p-2 rounded-lg bg-gray-900/50 shadow-md transition duration-300 hover:border-${reminder.color.replace(
              'bg-',
              ''
            )}`}
          >
            <div className="flex items-start justify-between">
              <p className="text-sm font-medium text-white">{reminder.title}</p>
              <Icon
                size={16}
                className={`text-${reminder.color.replace(
                  'bg-',
                  ''
                )}/80 shrink-0 ml-2`}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">{reminder.time}</p>
          </div>
        );
      })}
    </div>

    <button className="mt-4 w-full py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition flex items-center justify-center">
      <Plus size={16} className="mr-2" />
      Add New Reminder
    </button>
  </motion.div>
);

const TimeTrackerCard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    className="bg-green-600/90 p-6 rounded-xl shadow-md text-white h-[245px]"
  >
    <h2 className="text-lg font-semibold mb-4 flex items-center">
      <Clock size={18} className="mr-2" />
      Time Tracker
    </h2>
    <div className="text-center">
      <p className="text-5xl font-mono font-bold">01:24:08</p>
      <div className="mt-4 flex justify-center space-x-4">
        <button className="p-3 bg-[#0a0612]/20 rounded-full hover:bg-[#0a0612]/30 transition">
          <Plus size={20} />
        </button>
        <button className="p-3 bg-[#0a0612]/20 rounded-full hover:bg-[#0a0612]/30 transition">
          <div className="w-4 h-4 border-l-4 border-white/90 border-r-4"></div>
        </button>
      </div>
    </div>
  </motion.div>
);

const AdminUsersCard = () => (
  <div className="bg-[#0a0612] p-6 rounded-xl shadow-sm border border-gray-800 h-[400px] flex flex-col justify-between relative overflow-hidden z-40">
    <div className="absolute  bg-[#4107a4] w-24 h-24 -bottom-10 -right-10  -z-10 blur-[90px]  " />
    <div className="absolute  bg-[#4107a4] w-24 h-24 -top-10 -left-10  -z-10 blur-[100px]  " />
    <div className="flex justify-between items-start mb-4">
      <h2 className="text-lg font-semibold">Admin Users</h2>
      <Users size={20} className="text-green-500" />
    </div>

    <div className="grow space-y-4 overflow-y-auto pr-2">
      {adminUsers.map((user, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center">
            {/* User Avatar */}
            <div
              className={`w-10 h-10 rounded-full ${user.avatarColor} flex items-center justify-center text-sm font-bold text-white shrink-0`}
            >
              {user.initials}
            </div>
            <div className="ml-3">
              <p className="font-medium text-white">{user.name}</p>
              <p className="text-xs text-gray-400">
                {user.status === 'Active' ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
          {/* Status Pill */}
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full shrink-0 ${
              user.status === 'Admin'
                ? 'bg-green-700/50 text-green-300'
                : 'bg-yellow-700/50 text-yellow-300'
            }`}
          >
            {user.status}
          </span>
        </div>
      ))}
    </div>

    <button className="w-full py-2 bg-gray-800 text-green-400 text-sm font-medium rounded-lg hover:bg-gray-700 transition mt-4">
      Manage Access
    </button>
  </div>
);

const AssignmentsCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="bg-[#0a0612] p-6 rounded-xl shadow-sm border border-gray-800 relative overflow-hidden z-40"
  >
    <div className="absolute  bg-[#4107a4] w-24 h-24 -bottom-10 -right-10  -z-10 blur-[100px]  " />
    <div className="absolute  bg-[#4107a4] w-24 h-24 -top-10 -left-10  -z-10 blur-[100px]  " />
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">Assignments</h2>
      <button className="text-sm font-medium text-green-500 hover:text-green-400 border border-green-700 px-2 py-1 rounded">
        <Plus size={16} className="inline mr-1" /> Add New
      </button>
    </div>
    <ul className="space-y-4">
      {assignmentList.map((assignment, index) => (
        <li
          key={index}
          className="flex items-center justify-between text-sm border-b border-gray-800 pb-2 last:border-b-0"
        >
          <div className="flex-1 min-w-0 pr-2">
            <p className="font-medium truncate">{assignment.title}</p>
            <p className="text-xs text-gray-400">Due: {assignment.due}</p>
          </div>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full shrink-0 ${assignment.statusColor}`}
          >
            {assignment.status}
          </span>
        </li>
      ))}
    </ul>
  </motion.div>
);

// --- DashboardContent Main Component ---

export default function DashboardContent() {
  return (
    <>
      {/* Dashboard Title & Action Buttons (Wrapped in Motion) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-400 mt-1 text-sm sm:text-base">
              Plan, prioritize, and accomplish your tasks with ease.
            </p>
          </div>
          <div className="flex space-x-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center px-3 sm:px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-green-700 transition">
              <Plus size={18} className="mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Add Project</span>
              <span className="sm:hidden">Add</span>
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center px-3 sm:px-4 py-2 bg-gray-800 text-gray-300 text-sm border border-gray-700 font-medium rounded-lg shadow-sm hover:bg-gray-700 transition">
              <Upload size={18} className="mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Import Data</span>
              <span className="sm:hidden">Import</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* 2. Stats Grid (Wrapped in Motion) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 "
      >
        <div className="bg-green-950 text-white p-5 rounded-xl shadow-md flex-1 min-w-0 border border-green-800">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium opacity-90">Total Projects</p>
            <div className="w-6 h-6 rounded-full bg-[#0a0612]/20 flex items-center justify-center">
              <ChevronUp
                size={14}
                className="transform rotate-45 text-white/60"
              />
            </div>
          </div>
          <h3 className="text-4xl font-bold mt-2">24</h3>
          <p className="text-xs mt-1 flex items-center opacity-80">
            <ChevronUp size={12} className="text-green-400" />
            <span className="ml-1">Increased from last month</span>
          </p>
        </div>
        <Card
          title="Ended Projects"
          value="10"
          increase="Increased from last month"
        />
        <Card
          title="Running Projects"
          value="12"
          increase="Increased from last month"
        />
        <div className="bg-[#0a0612] text-white p-5 rounded-xl shadow-md flex-1 min-w-0 border border-gray-800  overflow-hidden relative  z-40">
          <div className="absolute  bg-[#4107a4] w-24 h-24 -bottom-10 -right-10  -z-10 blur-[90px]  " />
          <div className="absolute  bg-[#4107a4] w-24 h-24 -top-10 -left-10  -z-10 blur-[80px]  " />

          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-white/80">Pending Project</p>
            <div className="w-6 h-6 rounded-full bg-[#2a0476] flex items-center justify-center">
              <ChevronUp
                size={14}
                className="transform rotate-45 text-white/60"
              />
            </div>
          </div>
          <h3 className="text-3xl font-bold mt-2 text-red-400">2</h3>
          <p className="text-xs mt-1 text-white">On Discuss</p>
        </div>
      </motion.div>

      <div className=" grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        <div className=" col-span-9  ">
          {/* 3. Bottom Section: ROW 1 (Analytics, Reminders, Admin Users) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 mb-6">
            {/* Project Analytics (Wrapped in Motion) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-1 lg:col-span-8 relative"
            >
              <div className="bg-[#0a0612] p-6 rounded-xl shadow-sm border border-gray-800 min-h-[250px] h-full relative overflow-hidden z-40">
                <div className="absolute  bg-[#4107a4] w-24 h-24 -top-10 -right-10  -z-10 blur-[90px]  " />
                <div className="absolute  bg-[#4107a4] w-24 h-24 -bottom-10 -left-10  -z-10 blur-[80px]  " />
                <h2 className="text-lg font-semibold mb-4">
                  Student's Enrollment in{' '}
                  <span className="text-green-700">Last 10 Days</span>
                </h2>
                <AnalyticsBarChart />
                <div className="mt-6 flex justify-center space-x-4 text-xs">
                  <span className="flex items-center text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-green-700 mr-1"></span>
                    High (&gt;80%)
                  </span>
                  <span className="flex items-center text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B] mr-1"></span>
                    Medium (50-80%)
                  </span>
                  <span className="flex items-center text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-[#EF4444] mr-1"></span>
                    Low (&lt;50%)
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Reminders (Now uses RemindersCard component) */}
            <div className="col-span-1 md:col-span-6 lg:col-span-4">
              <RemindersCard />
            </div>
          </div>

          {/* 4. Bottom Section: ROW 2 (Assignments, Class Progress, Time Tracker, Project List) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Assignments */}
            <div className="col-span-1 md:col-span-6 lg:col-span-7">
              <AssignmentsCard />
            </div>

            {/* Class Progress (Now uses Pie Chart) */}
            <div className="col-span-1 md:col-span-6 lg:col-span-5">
              <ClassProgressCard />
            </div>
          </div>
        </div>
        <div className="col-span-3  ">
          <div className="col-span-1 md:col-span-6 lg:col-span-3 mb-6">
            {/* Admin Users Card (Wrapped in Motion) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <AdminUsersCard />
            </motion.div>
          </div>
          <div className="">
            {/* Time Tracker Card (Wrapped in Motion) */}
            <TimeTrackerCard />
          </div>
        </div>
      </div>
    </>
  );
}
