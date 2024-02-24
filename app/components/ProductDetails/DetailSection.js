"use client";
import react, { useState, useEffect } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountdownTimer from "../countDown";

const DetailSection = ({ product }) => {
  const [diffTimes, setDiffTimes] = useState();

  const [currentDate, setCurrentDate] = useState(Date.now());
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (currentDate <= new Date(product?.campaign?.endDate).getTime()) {
      let endTime = new Date(product?.campaign?.endDate).getTime();
      let diffTime = endTime - currentDate;

      setDiffTimes(diffTime);
    }
  }, [product]);
  console.log(".............dis", product?.campaign?.endDate);


  return (
    <div className="dark:text-black px-3 mt-3">
      <div>
        <div className="xls:hidden xms:hidden xs:hidden sm:block md:block lg:block xl:block xxl:block">
          <CountdownTimer countdown={diffTimes} />
        </div>
        <p className="font-semibold text-xl dark:text-black">
          {product?.product?.shippableProduct?.title}
        </p>
        <p className=" text-sm dark:text-black py-2">
          Brand:{" "}
          <span className="font-semibold">
            {product?.product?.shippableProduct?.brandName}
          </span>
        </p>
        <p className=" text-sm dark:text-black py-0">
          Category: {product?.product?.shippableProduct?.category} /{" "}
          {product?.product?.shippableProduct?.subcategory} /{" "}
          {product?.product?.shippableProduct?.subcategory2} /{" "}
          {product?.product?.shippableProduct?.subcategory3}
        </p>

        <div className="mt-5">
          <h2 className="font-semibold text-lg">
            Price: <span>TK. {product?.product?.shippableProduct?.price}</span>
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-1 items-center mt-5">
          <p className="font-semibold">Quantity: </p>
          <div className="w-[200px] flex items-center">
            <div
              className="border px-3 py-2 cursor-pointer bg-green-500 border-green-500 rounded-sm"
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
              className="border-[1px] w-[80px] h-[42px] p-[1px] border-green-500 text-center dark:bg-white"
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
            <span className="text-gray-400">Stocks : </span>{" "}
            <span className="font-semibold pr-1">{product?.inStock}</span>{" "}
          </p>
        </div>
        <div className="mt-1">
          <p className="text-black">
            <span className="pr-1 text-gray-400">Warranty : </span>{" "}
            <span className="font-semibold">
              {product?.product?.shippableProduct?.warranty}
            </span>{" "}
          </p>
        </div>
        <div className="mt-1">
          <p className="text-black">
            <span className=" pr-1 text-gray-400">Seller : </span>{" "}
            <span className="capitalize font-semibold">
              {product?.product?.seller?.name}
            </span>{" "}
          </p>
        </div>
        <div className="mt-1">
          <p className="text-black">
            <span className=" pr-1 text-gray-400">Manufactured By : </span>{" "}
            <span className="capitalize font-semibold">
              {product?.product?.shippableProduct?.manufacturerCountry}
            </span>{" "}
          </p>
        </div>
        <div className="mt-6">
          <div className="flex space-x-5">
            <button className="px-7 py-2 bg-gray-800  text-white rounded-md font-semibold tracking-wide text-sm">
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
