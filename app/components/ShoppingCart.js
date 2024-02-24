'use client'

import React, { useEffect, useState } from 'react'
import { useStatus } from '../context/contextStatus';

import { BsCartX, BsPlusLg } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { BiMinus } from "react-icons/bi";

import Image from 'next/image';


const ShoppingCart = () => {
 
 const {
   isCartOpen,
   setIsCartOpen,
   
 } = useStatus();

 const router = useRouter();



   const handleClick = () =>{
       setIsCartOpen(false);
   }


 
  return (
    <div
      className={`${
        isCartOpen
          ? "translate-x-[16px] duration-500 z-50 fixed top-[0px] bottom-0 bg-white w-[360px] xms:w-[310px] xs:w-full right-[15px]  shadow-lg text-black"
          : "translate-x-[420px] duration-500 z-50 fixed top-[0px] bottom-0 bg-white w-[360px] xms:w-[310px] xs:w-full  right-[15px] shadow-lg text-black"
      } `}
    >
      <div className="relative h-full top-[0px] left-0 right-0 bottom-0">
        <div className="flex justify-between items-center bg-[#1F2937] px-3 py-3 border-b border-gray-300 fixed top-0 w-full">
          <div className="text-white font-semibold">Shopping cart</div>
          <div
            onClick={() => handleClick()}
            className="cursor-pointer flex space-x-2 items-center"
          >
            <svg
              className="fill-current text-white hover:rotate-180 duration-500 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
            </svg>
            <div className="text-white"> close</div>
          </div>
        </div>

      
          <>
            <div className="absolute overflow-y-auto w-full top-[70px] px-4 bottom-[220px]">
           
                <div
                  className="flex space-x-2 items-center w-full border-b border-gray-300 py-3 cursor-pointer "
                  
                >
                  <div className="h-[80px] w-[80px]">
                    <img
                      src={`/image/product/prod1.jpg`}
                      
                      className="h-full w-full object-cover"
                      alt="product"
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <div>
                      <div className="text-xs text-black">Demo</div>
                     
                      <div className="flex items-center justify-center border border-gray-200 py-1 px-2 w-[100px] rounded-xl mt-3 outline-none">
                        <button
                          className="cursor-pointer"
                          
                        >
                          <BiMinus
                            size={15}
                            color="#000"
                            className="font-semibold"
                          />
                        </button>
                        <input
                          value={1}
                          style={{ outline: "none" }}
                          className=" w-[50px] text-center dark:bg-white text-black text-sm font-semibold focus:outline-none"
                          readOnly
                        />
                        <button
                          className=" cursor-pointer"
                          
                        >
                          <BsPlusLg
                            size={15}
                            color="#000"
                            className="font-semibold"
                          />
                        </button>
                      </div>
                      <div className="text-xs mt-2">
                        <span>1 x</span>{" "}
                        <span className="text-orange-500">
                          100 ৳
                        </span>
                      </div>
                    </div>

                    <div >
                      <RxCross2 size={18} className="text-black" />
                    </div>
                  </div>
                </div>
        
            </div>

            <div className="absolute h-[200px] bottom-0 left-0 w-full bg-white border-t border-gray-300 p-2">
              <div className="flex justify-between pb-3 border-b border-gray-300">
                <p className="text-black text-center tracking-wider font-semibold text-lg">
                  Subtotal:
                </p>
                <p className="text-orange-500 font-semibold">
                  ৳{" "}
                  100
                </p>
              </div>
              <div>
                <div className="text-xs py-2 text-black">
                  Your order qualifies for free shipping!
                </div>
                
                <button
                  className="bg-gray-800 text-center py-3 text-white uppercase font-semibold  text-sm cursor-pointer rounded-lg mt-2 w-full"
                 
                >
                  checkout
                </button>
              </div>
            </div>
          </>
       

       
      </div>
    </div>
  );
}

export default ShoppingCart