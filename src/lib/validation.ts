import { z } from "zod";

const requiredString = z.string().trim();

export const signUpSchema = z.object({
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

export const loginSchema = z.object({
  email: requiredString
    .min(1, "email is Required")
    .email("Invalid Email address"),
  password: requiredString
    .min(8, "password is Required")
    .min(1, "password should be at least 8 characters long"),
});
