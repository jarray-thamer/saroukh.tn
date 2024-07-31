import Image from "next/image";
import React from "react";

const authLayoutPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full min-h-screen md:grid md:grid-cols-2 ">
      <div className="bg-card flex flex-col w-full h-full p-5 justify-center items-center">
        <h1 className="font-extrabold text-6xl mb-4 text-blue-500">
          Saroukh.tn
        </h1>
        <div className="text-left">
          <h1 className="font-semibold text-xl">Welcome back,</h1>
          <p className="font-light text-sm">
            continue with Google or enter you details.
          </p>
        </div>
        <div className="w-full h-full mt-6">{children}</div>
      </div>
      <div className="hidden bg-muted md:block">
        <Image
          src="/login.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-screen w-full object-cover"
        />
      </div>
    </div>
  );
};

export default authLayoutPage;
