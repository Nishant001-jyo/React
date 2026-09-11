import React from "react";
import { UserRound, ChevronDown } from "lucide-react";

const User = ({ name = "Nishant" }) => {
  return (
    <div className="user">
      <div className="user-avatar">
        <UserRound size={20} />
      </div>

      <div className="user-info">
        <span>Hello,</span>
        <strong>{name}</strong>
      </div>

      <ChevronDown size={18} className="user-arrow" />
    </div>
  );
};

export default User;