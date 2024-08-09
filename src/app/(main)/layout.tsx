import { validation } from "@/auth";
import SessionProvider from "./SessionProvider";
import { redirect } from "next/navigation";
import NavBar from "./NavBar";
import MenuSideBar from "@/components/MenuSideBar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await validation();
  if (!session) {
    redirect("/login");
  }
  return (
    <SessionProvider value={session}>
      <NavBar />
      <div className="w-screen max-w-screen-2xl">{children}</div>
    </SessionProvider>
  );
}
