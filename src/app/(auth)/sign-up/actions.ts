"use server";

import { lucia } from "@/auth";
import prisma from "@/lib/prisma";
import { SignUpInput, signUpSchema } from "@/lib/validation";
// import { hash } from "@node-rs/argon2";
import bcrypt from "bcrypt";
import { generateIdFromEntropySize } from "lucia";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function signUp(
  credentials: SignUpInput
): Promise<{ error: string }> {
  try {
    const { userName, email, password, firstName, lastName } =
      signUpSchema.parse(credentials);
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const userId = generateIdFromEntropySize(10);
    // check if the username exist or not
    const existUserName = await prisma.user.findFirst({
      where: {
        userName: {
          equals: userName,
          mode: "insensitive",
        },
      },
    });

    if (existUserName) {
      return {
        error: "Username already taken",
      };
    }
    // check if the email exist or not
    const existEmail = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });

    if (existEmail) {
      return {
        error: "Email already taken",
      };
    }

    // Create user
    await prisma.user.create({
      data: {
        id: userId,
        userName,
        email,
        passwordHash,
        firstName,
        lastName,
      },
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return redirect("/");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);
    return { error: "An unexpected error occurred." };
  }
}
