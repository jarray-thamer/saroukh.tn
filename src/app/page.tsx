import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Saroukh.tn, the best car marketplace in Tunisia",
};

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
    </div>
  );
}
