import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="admin-layout">
      <header>Public Navigation</header>
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;
