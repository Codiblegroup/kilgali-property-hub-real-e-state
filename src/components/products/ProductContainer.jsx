import React from "react";
import ProCard from "./ProCard";
import { procardDatas } from "../data/procard";
import { FaArrowRightLong } from "react-icons/fa6";
import ProButton from "./ProButton";

const ProductContainer = () => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center">
        <div className="text-center text-textColor ">
          <h2 className="font-semibold text-[30px]">Featured Properties</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-around">
          {procardDatas.map((item, index) => (
            <ProCard key={index} item={item} />
          ))}
        </div>
       <div className="flex items-center justify-center py-4 ">
       <ProButton label={'See All List'} className={`bg-primaryButton2 py-[8px] px-3 text-textColor text-sm`} icon={<FaArrowRightLong className="p-[2px]" />} />
       </div>
      </div>
    </>
  );
};

export default ProductContainer;
