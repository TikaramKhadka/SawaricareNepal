import React from 'react';
import { FaHome, FaTags, FaBox, FaUsers, FaCog, FaChartBar } from 'react-icons/fa'; // Importing icons from FontAwesome

const AdminSidebar = () => {
  return (
    <div className="bg-white text-gray-800 w-64 h-full hidden lg:block shadow-md">
      <div className="p-4 font-bold text-xl border-b border-gray-200">Dashboard</div>
      <ul className="space-y-2">
        <li className="p-3 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
          <FaHome className="text-xl" />
          <span>Brand</span>
        </li>
        <li className="p-3 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
          <FaTags className="text-xl" />
          <span>Category</span>
        </li>
        <li className="p-3 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
          <FaBox className="text-xl" />
          <span>Product</span>
        </li>
        <li className="p-3 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
          <FaUsers className="text-xl" />
          <span>Users</span>
        </li>
        <li className="p-3 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
          <FaCog className="text-xl" />
          <span>Settings</span>
        </li>
        <li className="p-3 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
          <FaChartBar className="text-xl" />
          <span>Reports</span>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
