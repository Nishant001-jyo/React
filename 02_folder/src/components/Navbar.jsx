import React from "react";

function Navbar() {
  return (
    <header className="navbar">

      <div className="search">
        🔍
        <input
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="profile">
        🔔
        <div className="avatar">N</div>
        <span>Nishant</span>
      </div>

    </header>
  );
}

export default Navbar;