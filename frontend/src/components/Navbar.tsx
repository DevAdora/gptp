import React from "react";
import { NavLink } from "react-router-dom";
import { Home, FolderOpen, Info } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { to: "/", label: "Home", icon: <Home size={18} /> },
    { to: "/projects", label: "Projects", icon: <FolderOpen size={18} /> },
    { to: "/about", label: "About", icon: <Info size={18} /> },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-blue-900 text-white shadow-lg flex flex-col">
      <div className="h-16 flex items-center justify-center text-xl font-bold border-b border-blue-700">
        GovPortal
      </div>

      <nav className="flex-1 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-700 text-white"
                  : "text-gray-300 hover:bg-blue-800 hover:text-white"
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Footer (Optional) */}
      <div className="p-4 text-xs text-gray-400 border-t border-blue-700">
        © {new Date().getFullYear()} GovPortal
      </div>
    </aside>
  );
};

export default Navbar;
