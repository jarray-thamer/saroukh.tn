"use client";
import React from "react";
import { useSession } from "@/app/(main)/SessionProvider";

import UserAvatarButtonComponent from "@/components/UserAvatarButtonComponent";
import SearchField from "@/components/SearchField";
import Notification from "@/components/Notification";
import MenuSideBar from "@/components/MenuSideBar";

const NavBar = () => {
  const { user } = useSession();
  return (
    <div>
      <MenuSideBar />
    </div>
  );
};

export default NavBar;
