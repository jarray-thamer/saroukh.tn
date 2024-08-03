"use server";

import prisma from "@/lib/prisma";
import { SignInInput, signInSchema } from "@/lib/validation";

import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { lucia } from "@/auth";
import { cookies } from "next/headers";

export async function signIn(
  credentials: SignInInput
): Promise<{ error: string }> {
  try {
    const { email, password } = signInSchema.parse(credentials);

    // check email exist or not
    const User = await prisma.user.findFirst({
      where: { email: { equals: email, mode: "insensitive" } },
    });
    if (!User) {
      return { error: "Email does not exist" };
    }

    // check if password is correct
    const validPassword = await bcrypt.compare(
      password,
      User.passwordHash ?? ""
    );

    if (!validPassword) {
      return { error: "Incorrect password" };
    }

    const session = await lucia.createSession(User.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return redirect("/market-place");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);
    return { error: "An unexpected error occurred" };
  }
}
