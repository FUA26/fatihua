/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import { mainNav } from "@/configs/layout.config";
import Link from "next/link";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="fixed top-0 z-20 w-full">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in p-4 backdrop-blur-md bg-background/70">
        <div className="flex justify-between mx-4 items-center">
          <Link href="/">
            <div className="flex gap-2">
              <img src="/images/logo.svg" alt="logo" className="h-6" />
              <p className="font-semibold">FatihUA</p>

            </div>
          </Link>

          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            {mainNav.map((item, index) => (
              <div key={index} className="flex gap-2">
                <p
                  className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-[20px] select-none">
            {/* <MainButton
              text="Sign in"
              width="contain"
              className="bg-white border text-[#31373D] border-[#EDEEF0] hover:bg-white"
            />

            <MainButton text="Start for free" width="contain" /> */}
            <ModeToggle />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999]  py-4 animate-in fade-in zoom-in backdrop-blur-md bg-background/7  ${menu ? " bg-white dark:bg-black py-2" : ""
          } `}
      >
        <div className="flex justify-between mx-[10px]">
          <Link href="/">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/logo.svg" alt="logo" className="h-6" />
          </div>
          </Link>
          <div className="flex items-center gap-[20px]">
          <ModeToggle />
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/menu.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {mainNav.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <p
                    className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                  >
                    {item.name}
                  </p>
                </div>
              ))}

              <div className="flex flex-col gap-[20px] select-none">
                {/* <MainButton
                  text="Sign in"
                  width="contain"
                  className="bg-white text-[#31373D] border-[#EDEEF0] hover:bg-white"
                />

                <MainButton text="Start for free" width="contain" /> */}
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
