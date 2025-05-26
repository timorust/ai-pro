import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
// import LogOutButton from "./LogOutButton";
// import { getUser } from "@/auth/server";

async function Header() {
  const user = null;
  return (
    <header
      className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{
        boxShadow: shadow,
      }}
    >
      <Link className="flex items-end gap-2" href="/">
        <Image
          src="/logodolphin.png"
          alt="logo"
          height={60}
          width={60}
          className="rounded-full"
          priority
        />

        <h1 className="flex flex-col pb-1 text-2xl leading-6 font-semibold">
          AI <span>Notes</span>
        </h1>
      </Link>
      <div className="flex gap-4">
        {user ? (
          // <LogOutButton />
          "Logout"
        ) : (
          <>
            <Button asChild>
              <Link href="/sign-up" className="hidden sm:block">
                Sign Up
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;
