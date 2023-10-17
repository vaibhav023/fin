import React from "react";
import Image from "next/image";
import CurrentLocation from "@/components/shared/CurrentLocation";
import Base_detail_card from "@/components/base_detail_card";
import { UserButton, useUser } from "@clerk/nextjs";
import { findUserByClerkId } from "@/database/User";
import pool from "@/lib/db";
import { redirect } from "next/navigation";

export default function page() {
  return (
    <div>
      <div className="bg-[#FAFBFC] p-5">
        <CurrentLocation />
        <div className="flex flex-row justify-between mt-8">
          <div className="flex flex-col ">
            <h1 className="text-[28px]">Base Details</h1>
            <p className="text-[16px] text-[#7D8398]">
              An Overview of all your Base Details
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FF9A57] rounded-lg flex flex-row justify-between p-6 ml-8 mr-8">
        <div className="flex flex-col text-white w-1/3 m-6">
          <div className="font-bold text-[32px] pb-8 mt-4">
            Welcome to the FinixPe Dashboard
          </div>
          <div className="text-[14px] mt">
            Enter in this creative world. Discover now the latest NFTs or start
            creating your own!
          </div>
        </div>
        <Image
          src="/images/base_details.svg"
          alt="base"
          height={450}
          width={450}
        ></Image>
      </div>
      <div className="flex flex-row flex-wrap justify-between gap-8 m-6">
        <div className="flex-1">
          <Base_detail_card
            title="Transactions"
            content="It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time."
            route="/transactions"
          />
        </div>
        <div className="flex-1">
          <Base_detail_card
            title="Settlements"
            content="It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time."
            route="/settlements"
          />
        </div>
        <div className="flex-1">
          <Base_detail_card
            title="UPI Details"
            content="It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time."
            route="/upi_details"
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between gap-8 m-6">
        <div className="flex-1">
          <Base_detail_card
            title="Report"
            content="It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time."
            route="/report"
          />
        </div>
        <div className="flex-1"></div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
