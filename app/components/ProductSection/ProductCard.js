"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useState } from "react";

import styles from "./ProductCard.module.css";

const ProductCard = ({ item }) => {


  const router = useRouter();

  return (
    <div className="overflow-hidden items-center justify-center h-full cardFull bg-white shadow-xl">
      <div className="relative">
        <div className="h-auto  cursor-pointer">
          <Image
            priority={true}
            height={200}
            width={200}
            alt="Product"
            src={`${item?.pictures}`}
            className={styles.zoom}
          />
        </div>
        <div className="pt-3">
          <p className="text-xs pl-3 font-semibold text-black text-left hover:underline cursor-pointer pb-3 h-[25px]">
            {item?.title}
          </p>

          <div className="flex justify-between items-center px-3 pt-2 xls:px-1 xms:px-1">
            <div className="flex space-x-2 items-center">
              <p className="text-[14px] font-semibold text-green-700 text-center">
                TK. {Number(item?.price).toFixed(2)}
              </p>
            </div>

            <div className="group h-7 w-7 relative cursor-pointer rounded-full  group-hover:border border-black flex justify-center items-center hover:bg-black ">
              <svg
                className="fill-current group-hover:text-white group-hover:duration-500 dark:text-black"
                viewBox="0 0 16 16"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"></path>
              </svg>
            </div>
          </div>

          <div className="bg-red-500 flex justify-center cursor-pointer mt-2 mx-2 mb-2  group shadow-md">
            <div className="flex py-1 items-center space-x-2">
              <p className="text-sm font-semibold tracking-wider text-white group-hover:duration-500">
                Buy now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
