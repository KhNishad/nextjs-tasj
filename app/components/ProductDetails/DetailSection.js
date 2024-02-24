"use client";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { destroyCookie, setCookie } from "nookies";
import { useEffect, useState } from "react";

const DetailSection = ({ product }) => {
  const [activeVariation, setActiveVariation] = useState(0);

  const [count, setCount] = useState(1);

  const handleVariation = (index) => {
    setActiveVariation(index);
  };

  const variations = [11, 12, 13];

  return (
    <div className="dark:text-black px-3 mt-3">
      <div>
        <p className="font-semibold text-xl dark:text-black">
          {product?.product?.shippableProduct?.title}
        </p>
        <p className=" text-sm dark:text-black py-2">
          Brand: {product?.product?.shippableProduct?.brandName}
        </p>
        <p className=" text-sm dark:text-black py-0">
          Category: {product?.product?.shippableProduct?.category} /{" "}
          {product?.product?.shippableProduct?.subcategory} /{" "}
          {product?.product?.shippableProduct?.subcategory2} /{" "}
          {product?.product?.shippableProduct?.subcategory3}
        </p>


        <div className="mt-5">
          <h2 className="font-semibold text-lg">
            Price:{" "}
            {/* <span className="line-through text-sm">
                TK. 200
              </span> */}
            <span>TK. {product?.product?.shippableProduct?.price}</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-3 items-center mt-5">
          <p className="font-semibold">Quantity: </p>
          <div className="w-[200px] flex items-center">
            <div
              className="border px-3 py-2 cursor-pointer bg-green-500 border-green-500"
              onClick={() => setCount(count > 1 ? count - 1 : 1)}
            >
              <FontAwesomeIcon
                icon={faMinus}
                height={10}
                width={10}
                color="white"
              />
            </div>
            <input
              type="text"
              value={count}
              className="border-[1px] w-[100px] h-[42px] p-[1px] border-green-500 text-center dark:bg-white"
              readOnly
            />

            <div
              className="border border-green-500 px-3  py-[8px] cursor-pointer bg-green-500"
              onClick={() => setCount((c) => c + 1)}
            >
              <FontAwesomeIcon
                icon={faPlus}
                height={10}
                width={10}
                color="white"
              />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-black">
            <span className="font-semibold pr-1">{product?.inStock}</span>{" "}
            <span className="text-gray-400">Products Available</span>{" "}
          </p>
        </div>
        <div className="mt-1">
          <p className="text-black">
            <span className="font-semibold pr-1">Warranty</span>{" "}
            <span className="text-gray-400">
              {product?.product?.shippableProduct?.warranty}
            </span>{" "}
          </p>
        </div>
        <div className="mt-6">
          <div className="flex space-x-5">
            <button className="px-7 py-2 bg-gray-800 text-white rounded-md font-semibold tracking-wide text-sm">
              Add to cart
            </button>

            <button className="px-7 py-2 bg-green-500 text-white rounded-md font-semibold tracking-wide text-sm">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
