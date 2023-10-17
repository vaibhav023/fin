"use client";
import { usePathname } from "next/navigation";
import React from "react";

const CurrentLocation = () => {
  const pathname = usePathname();
  const location = pathname.split("/").slice(1).join(" > ");
  const capitalizedLocation =
    location.charAt(0).toUpperCase() + location.slice(1);

  return (
    <p className="text-[12px] text-[#7D8398]">
      Dashboard {`>`}{" "}
      <span className="text-[#121212]">{capitalizedLocation}</span>
    </p>
  );
};

export default CurrentLocation;
