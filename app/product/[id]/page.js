import request from "@/app/api/request";
import DetailSection from "@/app/components/ProductDetails/DetailSection";
import ImageGallery from "@/app/components/ProductDetails/ImageGallery";
import Details from "@/app/components/ProductDetails/ProductDetails";
import { GiSellCard } from "react-icons/gi";

async function getProductDetails(id) {
  try {
    let res = await request(`published-products/${id}`);
    if (res) {
      return res;
    }
  } catch (error) {
    console.log("err in getProducts", error);
  }
}

export default async function ProductDetails(params) {
  const productInfo = await getProductDetails(params.params.id);

  return (
    <>
      <div className="bg-[#dedfe0] pt-[90px] xls:pt-[60px] xms:pt-[60px] xs:pt-[60px]">
        <div className="max-w-7xl xls:max-w-[25rem] xms:max-w-[21rem] xs:max-w-[18rem] mx-auto min-h-[600px]  pb-3">
          <div className="grid grid-cols-2 xls:grid-cols-1 xms:grid-cols-1 xs:grid-cols-1 pt-2 xls:pb-3 xms:pb-3 xs:pb-3 bg-white px-2 shadow-md rounded-md">
            <ImageGallery
              product={productInfo?.data?.product?.shippableProduct?.pictures}
            />

            <DetailSection product={productInfo?.data} />
          </div>

          <Details product={productInfo?.data} />
        </div>
      </div>
    </>
  );
}
