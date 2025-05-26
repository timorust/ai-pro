import { shadow } from '@/styles/utils'
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8" style={{
			boxShadow: shadow,
		}}>
      <Link href="/">
        <Image
          src="/logodolphin.png"
          alt="logo"
          height={60}
          width={60}
          className="rounded-full"
          priority
        />
      </Link>
    </header>
  );
}

export default Header;
