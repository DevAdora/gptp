import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="admin-layout">
      <header>Admin Navigation</header>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
