'use client'
import AdminTopNavbar from "@/components/(authenticate)/navbar/page";
import AdminSideNavbar from "@/components/(authenticate)/sidebar/page";

const AdminDashBoard = () => {
    return (
      <div className="flex flex-col h-screen">
        <AdminTopNavbar />
        <div className="flex flex-1">
          <AdminSideNavbar/>
          <MainContent />
        </div>
      </div>
    );
  };

  const MainContent = () => {
    return (
      <div className="p-6 bg-gray-100 flex-1 h-screen overflow-auto">
        <h1 className="text-3xl font-bold">Welcome to Admin Dashboard</h1>
        <p className="mt-4">This is the main content area.</p>
      </div>
    );
  };
  
  export default AdminDashBoard;
