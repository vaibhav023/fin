import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavbarLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center background-light900_dark200 p-6 shadow-light-300">
      <Link href="/">
        <Image
          src="/icons/site-logo.png"
          alt="DevOverflow"
          width={120}
          height={25}
        />
      </Link>
      <div className="flex flex-row items-center gap-7 ">
        {NavbarLinks.map((link) => {
          return (
            <Link href={link.route} key={link.label}>
              <p className="text-[#52606D] text-[14px] hover:bg-orange-100 hover:p-2 hover:rounded-md">{link.label}</p>
            </Link>
          );
        })}
        <SignedOut>
          <Link href="/sign-in">
            <Button className="primary-gradient min-h-[42px] px-4 py-3 !text-light-900">
              Login
            </Button>
          </Link>
        </SignedOut>
        <SignedIn>
        <Link href="/base_details">
              <p className="text-[#52606D] text-[14px] hover:bg-orange-100 hover:p-2 hover:rounded-md">Dashboard</p>
            </Link>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
