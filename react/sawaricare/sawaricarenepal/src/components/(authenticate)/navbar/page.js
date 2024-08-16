import React, { useState, useEffect, useRef } from 'react';
import { FaBell, FaCog, FaUserCircle, FaSignOutAlt, FaKey, FaUser } from 'react-icons/fa';

const AdminNavbar = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
    setNotificationDropdownOpen(false);
  };

  const toggleNotificationDropdown = () => {
    setNotificationDropdownOpen(!notificationDropdownOpen);
    setProfileDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      profileRef.current && !profileRef.current.contains(event.target) &&
      notificationRef.current && !notificationRef.current.contains(event.target)
    ) {
      setProfileDropdownOpen(false);
      setNotificationDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 text-white h-[100px] flex items-center px-6 shadow-lg relative">
      <div className="flex items-center">
        <span className="text-2xl flex items-center font-bold uppercase h-14">
          Sawaricare Nepal
        </span>
      </div>

      <div className="ml-auto flex items-center space-x-6">
        {/* Notification Icon with Dropdown */}
        <div className="relative" ref={notificationRef}>
          <div className="relative cursor-pointer" onClick={toggleNotificationDropdown}>
            <FaBell className="text-2xl" />
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 rounded-full"></span>
          </div>

          {/* Tabular Notification Dropdown */}
          {notificationDropdownOpen && (
            <div className="absolute right-0 mt-2 w-[500px] bg-white text-black rounded shadow-lg py-4 z-10">
              <table className="table-auto w-full text-left">
                <tbody>
                  <tr className="hover:bg-gray-100 cursor-pointer">
                    <td className="px-4 py-2">🔔 New comment on your post</td>
                    <td className="px-4 py-2 text-right text-gray-500">5 mins ago</td>
                  </tr>
                  <tr className="hover:bg-gray-100 cursor-pointer">
                    <td className="px-4 py-2">📧 You received a new message</td>
                    <td className="px-4 py-2 text-right text-gray-500">10 mins ago</td>
                  </tr>
                  <tr className="hover:bg-gray-100 cursor-pointer">
                    <td className="px-4 py-2">📦 Your order has been shipped</td>
                    <td className="px-4 py-2 text-right text-gray-500">1 hour ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Profile Icon with Dropdown */}
        <div className="relative" ref={profileRef}>
          <div
            className="flex items-center cursor-pointer space-x-3"
            onClick={toggleProfileDropdown}
          >
            <FaUserCircle className="text-3xl" />
            <span className="text-lg">John Doe</span>
          </div>

          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg py-2 z-10">
              <button className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100 space-x-2">
                <FaUser className="text-xl" />
                <span>Profile</span>
              </button>
              <button className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100 space-x-2">
                <FaCog className="text-xl" />
                <span>Settings</span>
              </button>
              <button className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100 space-x-2">
                <FaKey className="text-xl" />
                <span>Change Password</span>
              </button>
              <button className="flex items-center px-4 py-2 w-full text-left text-red-600 hover:bg-gray-100 space-x-2">
                <FaSignOutAlt className="text-xl" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
