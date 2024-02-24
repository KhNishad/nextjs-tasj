"use client"

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart3, BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useStatus } from "../context/contextStatus";

const Header = () => {
  const { setSideCategory, setIsCartOpen } = useStatus();

  const [serachboxOpen, setSearchboxOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchboxOpen(!serachboxOpen);
  };

  return (
    <div className="fixed w-full z-20 top-0 bg-[#e0cd87] shadow py-4 sm:py-1 xls:py-0 xms:py-0 xs:py-0">
      <div className="max-w-7xl xls:max-w-[25rem] xs:max-w-[20rem] md:max-w-[62rem] xxl:max-w-[110rem] mx-auto">
        <div className="flex items-center justify-between sm:hidden xls:hidden xms:hidden xs:hidden ">
          <Link href={`/`}>
            <div className="flex justify-center lg:w-auto lg:flex-1">
              <p className="text-2xl font-semibold text-primary">Task Test</p>
            </div>
          </Link>
          <div>
            <div className="flex items-center bg-white  border-2 border-red-500 rounded-full pl-2">
              <div className="relative">
                <div>
                  <input
                    placeholder="Looking for something? ...."
                    className={`w-[525px]
                     md:w-[450px] sm:w-[480px] xls:w-[210px] xms:w-[190px] xs:w-[130px] px-3 bg-white outline-none placeholder:text-sm`}
                    type="text"
                  />
                </div>
              </div>

              <div className="flex items-center  rounded-r-full py-2 px-4 cursor-pointer z-30">
                <p className="block">
                  <svg
                    className="fill-current text-red-500 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                  </svg>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-7 justify-between">
            <div
              className={`relative  cursor-pointer`}
              onClick={() => setIsCartOpen(true)}
            >
              <BsCart4 color="#000" size={25} />
              <p className="absolute top-[-10px] left-[18px] text-xs text-white flex justify-center items-center bg-red-600 rounded-full h-4 w-4">
                1
              </p>
            </div>
            <Menu
              as="div"
              className="ml-3 relative sm:hidden xls:hidden xms:hidden xs:hidden"
            >
              {({ open }) => (
                <Fragment>
                  <div>
                    <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:myblue-500">
                      <span className="sr-only">Open user menu</span>

                      <div className="h-9 w-9 rounded-full border border-gray-300 flex justify-center items-center">
                        <svg
                          className="fill-current text-black h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                        </svg>
                      </div>
                    </Menu.Button>
                  </div>
                </Fragment>
              )}
            </Menu>
          </div>
        </div>

        <div className={`xls:block xms:block xs:block sm:block hidden`}>
          <div className="relative">
            <div className="flex justify-between items-center px-3 bg-white py-2">
              <div
                onClick={() => {
                  setSideCategory(true);
                }}
              >
                <GiHamburgerMenu size={20} color="#000" />
              </div>

              <Link href={`/`}>
                <div className="flex justify-center lg:w-auto lg:flex-1">
                  <p className="text-2xl text-black font-extrabold text-primary">
                    Demo
                  </p>
                </div>
              </Link>

              <div className="flex items-center space-x-4">
                <div>
                  {serachboxOpen ? (
                    <div onClick={handleSearchClick} className="cursor-pointer">
                      <RxCross2 size={25} color="#000" />
                    </div>
                  ) : (
                    <div onClick={handleSearchClick} className="cursor-pointer">
                      <BiSearch size={25} color="#000" />
                    </div>
                  )}
                </div>
                <div className={`relative  cursor-pointer`}>
                  <BsCart4 color="#000" size={25} />
                  <p className="absolute top-[-10px] left-[18px] text-xs text-white flex justify-center items-center bg-red-600 rounded-full h-4 w-4">
                    1
                  </p>
                </div>
              </div>
            </div>
            {serachboxOpen && (
              <div className="absolute top-[60px] xls:top-[47px] xms:top-[47px] xs:top-[47px] w-full p-6 bg-white shadow-md border-b border-t border-[#d1d5db]">
                <div>
                  <input
                    className="w-full py-2 px-2 outline-none bg-gray-200 placeholder-black"
                    placeholder="Looking for something...."
                    type="text"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
