"use client";

import React, { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { signUpSchema } from "@/lib/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { signUp } from "./actions";
import Link from "next/link";
import { Loader2 } from "lucide-react";

const SignUpFormComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signUpSchema>) {
    setError(null);
    startTransition(async () => {
      const { error } = await signUp(values);
      if (error) setError(error);
    });
  }

  return (
    <div className="h-full flex max-w-full flex-row justify-around">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-10/12 lg:w-2/3"
        >
          {error && <p className="text-center text-destructive">{error}</p>}
          {/* First Last name fields */}
          <div className="grid md:grid-cols-2 md:space-x-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="enter your first name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="enter your last name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Username field */}
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="enter your username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adress email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* password field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <div className="flex items-center space-x-2 pt-1">
                  <Checkbox
                    id="showPassword"
                    checked={showPassword}
                    onCheckedChange={() => setShowPassword(!showPassword)}
                  />
                  <label
                    className="cursor-pointer text-sm font-medium leading-none"
                    htmlFor="showPassword"
                  >
                    Show Password
                  </label>
                </div>
              </FormItem>
            )}
          />
          {/* button submit */}
          <div className="pt-2">
            <Button disabled={isPending} className="w-full" type="submit">
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                ""
              )}
              Sign Up
            </Button>
          </div>
          <div className="font-light text-center">
            Already have an account?{" "}
            <Link
              className="font-semibold text-blue-500 hover:underline"
              href={"/sign-in"}
            >
              log in
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUpFormComponent;
