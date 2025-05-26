import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <Link href="/">
        <Image 
				src="/logodolphin.png" 
				alt="logo" 
				height={60}
				width={60}
				className='rounded-full'
				priority
				/>
      </Link>
    </header>
  );
}

export default Header;
