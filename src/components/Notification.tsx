import { Bell } from "lucide-react";
import React from "react";

const Notification = () => {
  return (
    <div className="flex items-center  cursor-pointer">
      <div className="indicator">
        <span className="indicator-item badge ml-4 badge-primary">4</span>
        <Bell className="size-6" />
      </div>
    </div>
  );
};

export default Notification;
