"use client";
import React from "react";
import { useSession } from "@/app/(main)/SessionProvider";

import UserAvatarButtonComponent from "@/components/UserAvatarButtonComponent";
import SearchField from "@/components/SearchField";
import Notification from "@/components/Notification";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";

const NavBar = () => {
  const { user } = useSession();
  return (
    <div className="w-full flex items-center justify-between space-x-10 max-w-screen-2xl mx-auto p-4 border-b ">
      <BreadcrumbComponent userName={user.userName} />
      <SearchField />
      <div className="flex space-x-10 items-center">
        <Notification />
        <UserAvatarButtonComponent />
      </div>
    </div>
  );
};

export default NavBar;
