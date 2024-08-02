import LogOutButtonComponent from "@/components/LogOutButtonComponent";
import UserAvatarButtonComponent from "@/components/UserAvatarButtonComponent";

import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-5">
      <h1>Home page</h1>
      <Link className="block" href={"sign-up"}>
        Sign-up
      </Link>
      <Link className="block" href={"sign-in"}>
        Sign-in
      </Link>
      <LogOutButtonComponent />

      <UserAvatarButtonComponent />
    </div>
  );
}
