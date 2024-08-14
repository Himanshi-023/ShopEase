import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Services: React.FC = () => {
  return (
    <>
      <section className=" space-y-5   lg:flex  lg:justify-center lg:space-x-5  lg:items-center  mt-20 cursor-pointer  ">
        <div className="bg-gray-200/40  px-10 py-14 lg:px-24 lg:py-32 rounded-lg text-center flex flex-col items-center  space-y-2  ">
          <div>
            <TbTruckDelivery className="scale-150 text-primary" />
          </div>
          <h1 className="text-sm  text-gray-600">
            super fast and free Delivery
          </h1>
        </div>

        <div className="space-y-6 ">
          <div className=" space-y-2  lg:space-y-0  flex flex-col items-center bg-gray-200/40  px-20 py-14 rounded-lg lg:flex space-x-2">
            <MdOutlineSecurity className=" scale-150 text-primary" />
            <h1 className="text-sm  text-gray-600">Non Contact Shipping</h1>
          </div>
          
          <div className=" space-y-2  lg:space-y-0  lg:flex flex-col items-center bg-gray-200/40 px-20 py-14 rounded-lg flex space-x-2">
            <GiReceiveMoney className="scale-150 text-primary" />
            <h1 className="text-sm  text-gray-600">Refund Guarantee</h1>
          </div>
        </div>

        <div className="bg-gray-200/40  px-10 py-14 lg:px-24 lg:py-32 rounded-lg flex flex-col items-center  space-y-2 ">
          <RiSecurePaymentLine className="scale-150 text-primary" />
          <h1 className="text-sm  text-gray-600">
            Super Secure Payment System
          </h1>
        </div>
      </section>
    </>
  );
};

export default Services;
