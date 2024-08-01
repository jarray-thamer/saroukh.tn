import { Metadata } from "next";
import React from "react";
import SignInFormComponent from "./SignInFormComponent";

export const metadata: Metadata = {
  title: "SignIn",
  description: "Sign in to your account",
};

const SignInPage = () => {
  return (
    <div className="space-y-2 w-full h-full">
      <SignInFormComponent />
    </div>
  );
};

export default SignInPage;
