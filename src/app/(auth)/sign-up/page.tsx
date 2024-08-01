import { Metadata } from "next";
import React from "react";
import SignUpFormComponent from "./SignUpFormComponent";

export const metadata: Metadata = {
  title: "SignUp",
  description: "Sign up for a new account",
};

const SignUpPage = () => {
  return (
    <div className="space-y-2 w-full h-full">
      <SignUpFormComponent />
    </div>
  );
};

export default SignUpPage;
