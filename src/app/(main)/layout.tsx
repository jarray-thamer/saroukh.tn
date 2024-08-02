import { validation } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const MarketPlaceLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { session } = await validation();
  if (!session) {
    return redirect("/sign-in");
  }
  return <div>MarketPlaceLayout</div>;
};

export default MarketPlaceLayout;
