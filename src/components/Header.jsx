"use client";
import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/constants/appdata";
import { usePathname } from "next/navigation";
import { useUserSessionContext } from "@/context/UserSessionContext"; // Adjust the import path accordingly
import ProfileMenu from "@/components/ProfileMenu";

const Header = () => {
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(false);
  const { session } = useUserSessionContext(); // Get session from context
  console.log(pathname);
  return (
    // <div className="bg-white shadow-lg h-16 flex justify-between items-center md:px-[10%]">
    <div
      className="shadow-lg h-16 flex justify-between items-center md:px-[10%]"
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Flead-border.png?alt=media&token=4743aeb0-1b24-42a1-92f6-acf0d951da27')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Link
        href="/"
        className="text-third-color font-bold text-2xl pl-5 md:pl-0"
      >
        {/* Car Exotics */}
        <span className="text-third-color">Car</span>
        {""}
        <span style={{ color: "orange" }}>LEX</span>
        {""}
        <span style={{ color: "red" }}>otics</span>
      </Link>
      <div
        className="md:hidden flex flex-col gap-1 pr-5"
        onClick={() => setIsMenu(!isMenu)}
      >
        <div className="w-5 h-0.5 bg-black"></div>
        <div className="w-5 h-0.5 bg-black"></div>
        <div className="w-5 h-0.5 bg-black"></div>
      </div>
      {/* <div
        className={` ${
          isMenu ? "flex flex-col absolute top-16 w-full" : "hidden md:flex"
          // } gap-5 md:flex-row md:static bg-white md:w-auto text-center`}
        } gap-5 md:flex-row md:static md:w-auto text-center`}
      > */}
      
        <div className="flex items-center gap-5 md:static md:w-auto text-center">
        {/* Conditional rendering of ProfileMenu or Login link */}

        {links?.map((link) => {
          // Check if the link is "Login" and there is a session, then skip rendering it
          if (link.text === "Login" && session) {
            return null;
          }
          // Check if the link is "Book Now" and there is no session, then skip rendering it
          if (link.text === "Book Now" && !session) {
            return null;
          }
          return (
            <div key={link.link}>
              <Link
                className={`${
                  pathname === link.link
                    ? "text-third-color font-bold"
                    : "text-gray-300 font-bold"
                }`}
                href={link.link}
              >
                <span>{link.text}</span>
              </Link>
            </div>
          );
        })}

        {/* If there's a session, display ProfileMenu */}
        {session && <ProfileMenu />}
        {/* {links?.map((link) =>
          session || link.text !== "Book Now" ? (
            <div key={link.link}>
              <Link
                className={`${
                  pathname === link.link
                    ? "text-third-color font-bold"
                    : "text-gray-300 font-bold"
                }`}
                href={link.link}
                // exact={link.exact}
              >
                <span>{link.text}</span>
              </Link>
            </div>
          ) : null
        )} */}
      </div>
    </div>
  );
};

export default Header;
