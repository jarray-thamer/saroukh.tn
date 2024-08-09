"use client";
import { logout } from "@/app/(auth)/action";
import { useSession } from "@/app/(main)/SessionProvider";
import { LogOut, User, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const UserAvatarButtonComponent = () => {
  const { user } = useSession();
  if (!user) {
    redirect("/sign-in");
  }
  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {user.avatarUrl ? (
          <div className="avatar cursor-pointer size-11 online">
            <Image
              src={user.avatarUrl}
              alt="user avatar image"
              width={280}
              height={280}
              className="aspect-square h-fit flex-none rounded-full object-cover"
            />
          </div>
        ) : (
          <div className="avatar cursor-pointer online">
            <User className="rounded-md p-1 size-8 cursor-pointer hover:bg-secondary" />
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="me-3 ">
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
  ) : (
    <div>Login</div>
  );
};

export default UserAvatarButtonComponent;
