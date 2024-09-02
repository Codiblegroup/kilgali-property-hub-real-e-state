import React from "react";
import ProButton from "./ProButton";
import { CiLocationOn } from "react-icons/ci";
import { LuBed } from "react-icons/lu";
import { BiBath } from "react-icons/bi";
import { SiCodesandbox } from "react-icons/si";

const ProCard = ({ item }) => {
  return (
    <div
      className={`product-card  h-[300px] bg-center bg-cover rounded-lg `}
      style={{ backgroundImage: `url('${item.image}')` }}
    >
      <div className="flex flex-col justify-between h-full p-3">
        <div className="flex items-center  justify-start">
          <ProButton
            label={"FoR Rent"}
            className={"bg-primaryButton uppercase text-white mx-2"}
            onclick
          />
          <ProButton
            label={"featured"}
            className={"bg-primaryButton2 uppercase text-primaryButton"}
            onclick
          />
        </div>
        <div className="bg-white rounded-lg px-2  py-2 hover:scale-105 duration-200 transition-all ease-in-out ">
          <h4 className="text-textColor font-semibold text-start">
            {item.title}
          </h4>
          <span className="flex items-center justify-start gap-1 py-1 text-sm">
            <CiLocationOn className="font-semibold text-[18px]" />
            <p>{item.location}</p>
          </span>
          <div className="flex w-full justify-between items-center text-textColor">
            <span className="text-[18px]  font-semibold text-primaryColor">{`$${item.price}`}</span>
            <div className="flex gap-1 font-semibold ">
              <span className="flex items-center gap-1">
                <LuBed className="text-[20px]" />
                <p className="text-sm text-textColor">{item.room}</p>
              </span>
              <span className="flex items-center gap-1">
                <BiBath className="text-[20px]" />
                <p className="text-sm text-textColor">{item.washroom}</p>
              </span>
              <span className="flex items-center gap-1">
                <SiCodesandbox className="text-[18px]" />
                <p className="text-sm text-textColor">{item.outer}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProCard;
