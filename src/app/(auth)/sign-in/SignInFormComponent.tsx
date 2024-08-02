"use client";

import React, { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
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
import Link from "next/link";
import { signInSchema } from "@/lib/validation";
import { signIn } from "./action";
import { Loader2 } from "lucide-react";

const SignInFormComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signInSchema>) {
    setError(undefined);
    startTransition(async () => {
      const { error } = await signIn(values);
      if (error) setError(error);
    });
  }

  return (
    <div className="h-full flex flex-row justify-around">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-10/12 lg:w-2/3"
        >
          {error && <p className="text-center text-destructive">{error}</p>}
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
              Login
            </Button>
          </div>
          <div className="font-light text-center">
            Are you new here?{" "}
            <Link
              className="font-semibold text-blue-500 hover:underline"
              href={"/sign-up"}
            >
              Sign up
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignInFormComponent;
