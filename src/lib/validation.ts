import { z } from "zod";

const requiredString = z.string().trim();

export const signUpSchema = z.object({
  firstName: requiredString.min(1, "First name is Required"),
  lastName: requiredString.min(1, "Last name is Required"),
  email: requiredString
    .min(1, "email is Required")
    .email("Invalid Email address"),
  userName: requiredString
    .min(1, "username is Required")
    .max(20, "username too long!")
    .regex(/^[a-zA-Z0-9_-]+$/, "Invalid username"),
  password: requiredString
    .min(8, "password is Required")
    .min(1, "password should be at least 8 characters long"),
});

export type SignUpInput = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: requiredString
    .min(1, "email is Required")
    .email("Invalid Email address"),
  password: requiredString
    .min(8, "password is Required")
    .min(1, "password should be at least 8 characters long"),
});

export type SignInInput = z.infer<typeof signInSchema>;
