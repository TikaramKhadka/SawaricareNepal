'use client'
import MainContent from "@/components/(authenticate)/maincontent/page";
import AdminNavbar from "@/components/(authenticate)/navbar/page";
import AdminSidebar from "@/components/(authenticate)/sidebar/page";
import React from "react";

const AdminDashBoard = () => {
  return (
    <div className="flex flex-col">
      <AdminNavbar/>
      <div className="flex flex-1">
        <AdminSidebar />
        <MainContent/>
      </div>
    </div>
  );
};
  export default AdminDashBoard;
