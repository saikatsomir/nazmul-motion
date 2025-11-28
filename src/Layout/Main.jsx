import { Link, Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../Pages/Shared/Navbar/Navbar';
import { Footer } from '../Pages/Shared/Footer/Footer';
import { BsInstagram } from 'react-icons/bs';

export const Main = () => {
  const location = useLocation();

  const adminPrefixes = ['/admin/dashboard', '/dashboard'];
  const isAdminRoute = adminPrefixes.some((prefix) =>
    location.pathname.startsWith(prefix)
  );
  return (
    <div className="relative min-h-screen">
      {/* Floating Instagram Icon */}
      <div className="fixed bottom-5 md:bottom-10 cursor-pointer right-5 md:right-10 z-50">
        <span className="relative flex  w-12 md:w-16  h-12 md:h-16">
          {/* Ping Animation Circle */}
          <span className="absolute flex w-full h-full rounded-full bg-[#4107a4] opacity-75 animate-[ping_1s_ease-in-out_infinite]"></span>

          {/* Icon Circle */}
          <Link
            target="_blank"
            to={'https://www.instagram.com/nazmul.motion'}
            className="relative   w-12 md:w-16   h-12 md:h-16 rounded-full border-2 border-[#4107a4] bg-[#4107a4]/40 flex justify-center items-center"
          >
            <BsInstagram size={20} className="text-yellow-600" />
          </Link>
        </span>
      </div>

      <div
        className="fixed bottom-5 md:bottom-5 cursor-pointer hidden md:flex left-5 md:left-2 z-50 w-70 h-20 border  rounded-md backdrop-blur-[100px]  justify-center items-center border-gray-700 scale-90"
        style={{
          background:
            'linear-gradient(-90deg,rgba(251, 179, 95, 1) 15%, rgba(107, 91, 248, 1) 82%)',
        }}
      >
        <div>
          <h1 className="text-white text-base pb-2">
            এনরোলমেন্ট শুরুঃ ১০ ই ডিসেম্বর, ২০২৫
          </h1>

          <h1 className="text-white text-base">
            এনরোলমেন্ট শেষঃ ৮ ই জানুয়ারী ২০২৬
          </h1>
        </div>
      </div>

      {!isAdminRoute && <Navbar />}

      <Outlet />

      {!isAdminRoute && <Footer />}
    </div>
  );
};
