import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const authLayoutPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex flex-col w-full h-full p-5 space-y-6">
        <h1 className="font-extrabold text-4xl md:text-6xl text-blue-500">
          Saroukh.tn
        </h1>
        <Separator />
        <div className="text-center">
          <h1 className="font-semibold text-xl">Welcome 👋</h1>
          <p className="font-light text-sm">
            continue with Google or enter you details.
          </p>
        </div>
        <div className="w-full h-full mt-6">{children}</div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/login.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default authLayoutPage;
