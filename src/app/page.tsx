import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Saroukh.tn, the best car marketplace in Tunisia",
}

export default function Home() {
  return (
    <><h1>Home page</h1>
    <Link href={"signup"}>Sign-up</Link>
    </>
  );
}
