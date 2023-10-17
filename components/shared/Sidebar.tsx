"use client";
import { SidebarLinks } from "@/constants";
import Image from "next/image";
import link from "next/link";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="min-h-screen flex flex-col py-6 px-5 w-[280px] items-center bg-white justify-start">
      <Image src="/icons/site-logo.png" alt="logo" width={120} height={25} />
      <div className="flex flex-col gap-16 mt-20 justify-start">
        {SidebarLinks.map((link, index) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          console.log(link.route, pathname, isActive);
          return (
            <Link
              href={link.route}
              key={index}
              className="flex flex-row gap-4 items-center justify-start"
            >
              {isActive && (
                <Image
                  src={link.selectedimage}
                  alt={link.label}
                  width={25}
                  height={25}
                />
              )}
              {!isActive && (
                <Image
                  src={link.image}
                  alt={link.label}
                  width={25}
                  height={25}
                />
              )}
              <p
                className={`text-[20px] font-medium ${
                  isActive ? "text-[#1E4493]" : "text-[#A3AED0]"
                }`}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
