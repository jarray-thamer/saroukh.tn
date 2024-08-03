"use client";
import { LogOut, User, User2Icon } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { redirect } from "next/navigation";
import { useSession } from "@/app/(main)/SessionProvider";
import Link from "next/link";
import Image from "next/image";
import { logout } from "@/app/(auth)/action";

const UserAvatarButtonComponent = () => {
  const { user } = useSession();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {user.avatarUrl ? (
          <Image
            src={user.avatarUrl}
            alt="user avatar image"
            width={44}
            height={44}
            className="cursor-pointer aspect-square h-fit flex-none rounded-full object-cover"
          />
        ) : (
          <User className="rounded-md p-1 size-8 cursor-pointer hover:bg-secondary" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <h3 className="uppercase">{user.userName}</h3>
          <p className="font-light">{user.email}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Link
          className="flex cursor-pointer hover:bg-secondary"
          href={`/user/${user.userName}`}
        >
          <DropdownMenuItem className="cursor-pointer">
            <User2Icon className="size-4 mr-2" />
            <span>Profile</span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer" onClick={() => logout()}>
          <LogOut className="size-4 mr-2" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatarButtonComponent;
