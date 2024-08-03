import { validation } from "@/auth";
import SessionProvider from "./SessionProvider";
import { redirect } from "next/navigation";
import UserAvatarButtonComponent from "@/components/UserAvatarButtonComponent";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await validation();
  if (!session.user) {
    // Redirect to login page
    redirect("/sign-in");
  }
  return (
    <SessionProvider value={session}>
      <UserAvatarButtonComponent />
      <div>{children}</div>
    </SessionProvider>
  );
}
