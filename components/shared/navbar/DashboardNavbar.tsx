"use client";
import Link from "next/link"
import SearchBar from "@/components/dashboard/SearchBar";
import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";

const DashboardNavbar = () => {
  // user name from clerk
  const { user } = useUser();
  const clerk_id = user?.id.slice(-5);

  return (
    <div className="bg-white flex flex-row justify-between items-center py-3 px-5 w-full border-b-2">
      <h1 className="text-[30px] font-bold">Dashboard</h1>
      <SearchBar />
      <div className="flex flex-row items-center gap-2">
      <Link href="/">
              <p className="text-[#52606D] text-[14px] hover:bg-orange-100 hover:p-2 mr-2 hover:rounded-md">Home</p>
            </Link>
        <UserButton afterSignOutUrl="/" />
        <div className="flex flex-col text-[#121212]">
          <p className="text-[14px]">{user?.firstName}</p>
          <p className="text-[12px]">MID: {clerk_id}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
