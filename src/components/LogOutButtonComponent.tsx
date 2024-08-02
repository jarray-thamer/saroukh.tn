"use client";
import React from "react";
import { Button } from "./ui/button";
import { logout } from "@/app/(auth)/action";

const LogOutButtonComponent = () => {
  return (
    <Button
      onClick={() => {
        logout();
      }}
    >
      Log out
    </Button>
  );
};

export default LogOutButtonComponent;
