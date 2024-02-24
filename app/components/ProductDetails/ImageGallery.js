"use client"
import Image from "next/image";
import Magnifier from "react-magnifier";


const ImageGallery = ({product}) => {
  

  return (
    <div className=" py-7 px-2 xls:py-2 xms:py-2 xs:py-2 col-span-1 sm:col-span-1 shadow-md">
      <div className="block xls:hidden xms:hidden xs:hidden sm:w-[350px]">
        <Magnifier
          src={`${product?.list[0]}`}
          alt="product 1"
          width={500}
        />
      </div>

      <div className="hidden xls:flex xms:flex xs:flex justify-center">
        <Image
          height={400}
          width={400}
          src={`${product?.list[0]}`}
          alt="product 1"
          className=" h-auto w-auto object-fill"
        />
      </div>

      <div className="grid grid-cols-5 xs:grid-cols-4 gap-2 md:gap-x-2 sm:gap-x-2 xms:gap-x-2 xs:gap-x-2 mt-2">
        {product?.list.map((item,index)=>
        <div key={index} className="cursor-pointer">
          <Image
            src={`${item}`}
            width={90}
            height={90}
            alt="product 1"
            className="border-[1px] border-gray-400 h-16 w-16 rounded-md"
          />
        </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
