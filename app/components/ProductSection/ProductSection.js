"use client";

import request from "@/app/api/request";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useRouter } from "next/navigation";
import { Pagination } from "antd";

const ProductSection = ({ results, totalData }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const router = useRouter();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (results) {
      setData(results);
    }
  }, [results]);


  useEffect(() => {
    const getData = async () => {
      try {
        const res = await request(`published-products/?page=${page}&size=${pageSize}`);
        if (res) {
          setData(res?.data?.results);
        }
      } catch (error) {
        console.log("err", error);
      }
    };
    getData();
  }, [page,pageSize]);

  const handlePageChange = async (page,size) => {
    setPage(page);
    setPageSize(size);
  };

  console.log("results....",pageSize);

  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xls:grid-cols-2 xms:grid-cols-2 xs:grid-cols-1 gap-5 xls:gap-3 xms:gap-3 xs:gap-2 mt-3">
        {data?.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden items-center justify-center h-full cardFull"
            // href={`/product/${item?.id}`}
            index={index}
            onClick={() => router.push(`/product/${item?.id}`)}
          >
            <ProductCard item={item} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-3 mb-3">
        <Pagination
          current={page}
          total={totalData}
          onChange={(page,pageSize) => handlePageChange(page,pageSize)}
          pageSize={pageSize}
          // onShowSizeChange={(e,b)=>{
          //   console.log('cahnges',b);
          // }}
        />
      </div>
    </>
  );
};

export default ProductSection;
