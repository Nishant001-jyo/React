import React from "react";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2 className="logo">MyDashboard</h2>

      <nav>
        <a className="active">🏠 Dashboard</a>
        <a>👥 Users</a>
        <a>📁 Projects</a>
        <a>📊 Analytics</a>
        <a>📄 Reports</a>
        <a>⚙️ Settings</a>
      </nav>

    </aside>
  );
}

export default Sidebar;