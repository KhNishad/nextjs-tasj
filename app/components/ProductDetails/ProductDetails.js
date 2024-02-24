"use client";

import React,{useState} from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Details = ({product}) => {

  const [isActive, setIsActive] = useState(1)

  return (
    <div>
      <div className="shadow-md w-full rounded-md bg-white mb-5 mt-4 p-5 xls:p-3 xms:p-3 xs:p-3">
        <Tabs>
          <div className="tab ">
            <TabList className="flex gap-4">
              <Tab onClick={()=>setIsActive(1)}  className={`${isActive==1?"bg-teal-500":"bg-teal-950"} px-2 py-1 rounded-md cursor-pointer`}>
                <span className="text-white ">Description</span>
              </Tab>
              <Tab onClick={()=>setIsActive(2)} className={`${isActive==2?"bg-teal-500":"bg-teal-950"} px-2 py-1 rounded-md cursor-pointer`}>
                <span className="text-white">Specification</span>{" "}
              </Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="pt-3">
              <span dangerouslySetInnerHTML={{__html:product?.product?.shippableProduct?.description1}} className="text-black"></span>
            </div>
            <div className="pt-3">
              <span dangerouslySetInnerHTML={{__html:product?.product?.shippableProduct?.description2}} className="text-black"></span>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="pt-3">
              <span dangerouslySetInnerHTML={{__html:product?.product?.shippableProduct?.specifications}} className="text-black"></span>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Details;
