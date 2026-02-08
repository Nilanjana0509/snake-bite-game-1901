import React from "react";

function Sidebar({ activeMenu, setActiveMenu, isOpen, setIsOpen }) {
  const menus = [
    { id: "dashboard", label: "Dashboard" },
    { id: "payments", label: "Payments" },
    { id: "users", label: "Users" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-20 bg-black/40 lg:hidden"
        />
      )}

      <div
        className={`fixed z-30 h-screen w-64 bg-gray-900 text-white transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:static lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between border-b border-gray-700 px-6 py-5 text-xl font-semibold">
          Admin Panel
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-300"
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 px-4 py-6 space-y-2">
          {menus.map((menu) => (
            <button
              key={menu.id}
              onClick={() => {
                setActiveMenu(menu.id);
                setIsOpen(false);
              }}
              className={`w-full rounded-lg px-4 py-2 text-left transition ${
                activeMenu === menu.id ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
            >
              {menu.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
