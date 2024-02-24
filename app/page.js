
import Slide from "./components/Slide";
import { GiNewShoot } from "react-icons/gi";
import request from "./api/request";
import ProductSection from "./components/ProductSection/ProductSection";


async function getData() {
  const home = await request(`published-products/?page=1&size=10`);
 

  return {
    home,

  };
}

export const revalidate = 0;

export default async function Home() {

 const { home} = await getData();

  return (
    <>
      <main
        className={`bg-[#dedfe0]  pt-[90px] xls:pt-[70px] xms:pt-[70px] xs:pt-[70px]`}
      >
        <div className="max-w-7xl md:max-w-[62rem] sm:max-w-[47rem] xls:max-w-[25rem] xms:max-w-[21rem] xs:max-w-[18rem] mx-auto">
          <div>
            <Slide />
          </div>

          <div className="border border-gray-100 mt-3 pb-4 bg-[#efeff1] rounded-md  p-3 xls:p-0 xms:p-0 xs:p-0">
            <div className="flex justify-between p-2 xxl:p-0 xl:p-0 lg:p-0 md:p-0 sm:p-0">
              <div className="flex items-center">
                <button className="font-semibold text-white px-1 py-1 bg-red-500 rounded-md text-sm tracking-wider flex items-center space-x-2">
                  <GiNewShoot color="#fff" size={20} />
                </button>
                <span className="font-bold pl-2 text-lg xls:text-sm xms:text-sm xs:text-xs tracking-wider capitalize text-black">
                  New Product
                </span>
              </div>
            </div>

            <ProductSection results={home?.data?.results} totalData={home?.data?.count} />
          </div>
        </div>
      </main>
    </>
  );
}
