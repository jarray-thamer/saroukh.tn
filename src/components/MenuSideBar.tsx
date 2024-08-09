import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { HomeIcon, MenuIcon, SettingsIcon } from "lucide-react";
import UserAvatarButtonComponent from "./UserAvatarButtonComponent";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { useSession } from "@/app/(main)/SessionProvider";
import { redirect } from "next/navigation";

const MenuSideBar = () => {
  const [isClosed, setIsClosed] = React.useState(false);
  const { user } = useSession();
  if (!user) {
    redirect("/sign-in");
  }

  const handleOpen = (condition: boolean) => {
    setIsClosed(condition);
  };
  return (
    <div className="sm:hidden p-2 flex items-center justify-between bg-gray-100 py-2">
      <Sheet open={isClosed} onOpenChange={setIsClosed}>
        <SheetTrigger asChild>
          <MenuIcon
            className="size-6 cursor-pointer"
            onClick={() => handleOpen(true)}
          />
        </SheetTrigger>
        <SheetContent className="w-[70%] flex flex-col" side={"left"}>
          <h2 className="font-normal text-lg text-black">Saroukh.tn</h2>
          <Separator />
          <Link
            onClick={() => handleOpen(false)}
            href={"/market-place"}
            className="flex border-l-4 border-blue-400 text-blue-400 bg-blue-100  items-center text-xl font-normal cursor-pointer bg-gray-100 px-2 py-2 rounded-md"
          >
            <HomeIcon className="size-6 mr-4" /> Home
          </Link>
          <Link
            onClick={() => handleOpen(false)}
            href={`/user/${user?.userName}/edit`}
            className="flex items-center text-xl text-muted-foreground font-normal cursor-pointer px-2 py-2 rounded-md"
          >
            <SettingsIcon className="size-6 mr-4" /> Settings
          </Link>
        </SheetContent>
      </Sheet>
      <Link href={"/"}>
        <h1 className="font-extrabold text-2xl md:text-4xl text-blue-500">
          Saroukh.tn
        </h1>
      </Link>
      <div>
        <UserAvatarButtonComponent />
      </div>
    </div>
  );
};

export default MenuSideBar;
