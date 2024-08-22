import React from 'react';
import { FaHome, FaTags, FaBox, FaUsers, FaCog, FaChartBar } from 'react-icons/fa'; // Importing icons from FontAwesome
import { BsCartPlusFill } from "react-icons/bs";

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 hidden lg:block">
      <div className="p-4 font-bold text-xl">Dashboard</div>
      <ul className="space-y-2">
        <li className="p-3 hover:bg-gray-700 flex items-center space-x-2">
          <FaHome className="text-xl" />
          <span>Brand</span>
        </li>
        <li className="p-3 hover:bg-gray-700 flex items-center space-x-2">
          <FaTags className="text-xl" />
          <span>Category</span>
        </li>
        <li className="p-3 hover:bg-gray-700 flex items-center space-x-2">
          <FaBox className="text-xl" />
          <span>Product</span>
        </li>
        <li className="p-3 hover:bg-gray-700 flex items-center space-x-2">
          <BsCartPlusFill className="text-xl" />
          <span>Order</span>
        </li>
        <li className="p-3 hover:bg-gray-700 flex items-center space-x-2">
          <FaUsers className="text-xl" />
          <span>Users</span>
        </li>
        <li className="p-3 hover:bg-gray-700 flex items-center space-x-2">
          <FaCog className="text-xl" />
          <span>Settings</span>
        </li>
        <li className="p-3 hover:bg-gray-700 flex items-center space-x-2">
          <FaChartBar className="text-xl" />
          <span>Reports</span>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;