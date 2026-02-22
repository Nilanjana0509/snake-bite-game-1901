import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Payments from "./components/Payments";
import Users from "./components/Users";
import CreateUsers from "./components/CreateUsers";

function Admin_Dashboard() {
  const [activeMenu, setActiveMenu] = useState("payments");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAdmin = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin-login");
        return;
      }

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/admin/verifyAdmin`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            cache: "no-store",
          },
        );

        console.log("Status:", response.status);

        if (!response.ok) {
          throw new Error("Unauthorized");
        }

        const data = await response.json();
        console.log("Response Data:", data);
      } catch (error) {
        console.log("Error caught:", error);

        localStorage.removeItem("adminToken");
        navigate("/admin-login");
      }
    };

    verifyAdmin();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 lg:flex">
      {/* Sidebar */}
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1">
        {/* Top bar (mobile) */}
        <div className="flex items-center gap-4 bg-white px-6 py-4 shadow lg:hidden">
          <button onClick={() => setIsSidebarOpen(true)} className="text-xl">
            ☰
          </button>
          <h1 className="text-lg font-semibold text-gray-800">
            Admin Dashboard
          </h1>
        </div>

        {/* Page content */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              {activeMenu === "payments" ? "Payments" : "Dashboard"}
            </h2>
            <p className="text-sm text-gray-500">
              Manage admin activities and data
            </p>
          </div>

          {activeMenu === "payments" && <Payments />}
          {activeMenu === "users" && <Users />}
          {activeMenu === "createUsers" && <CreateUsers />}

          {activeMenu === "dashboard" && (
            <div className="rounded-xl bg-white p-6 shadow">
              Welcome to Admin Dashboard
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin_Dashboard;
