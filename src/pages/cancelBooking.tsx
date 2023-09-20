import Layout from "@/components/layout";
import React from "react";

export default function CancelBooking() {
  return (
    <Layout>
      <div className="w-full min-h-screen border-t flex justify-center border-gray-200">
        <div className="80%">
          <p className="mt-[78px] text-[#FEB737] text-[15px] font-medium">
            Back to my booking
          </p>

          <span className="text-[32px] mt-[30px] block font-bold">
            Reason for cancelling
          </span>
          <span className="block text-[16px] font-medium">
            Why do you want to cancel? we don’t want you to go.{" "}
          </span>
          <p className="text-[16px] font-medium mt-[41px]">
            Why do you want to cancel? we don’t want you to go.{" "}
          </p>
          <form className=" mt-[2px]" action="">
            <input
              className="p-4 w-[150%] border rounded-[6px] border-x-gray-200"
              type="text"
              placeholder="I changed my mind"
            />
          </form>
          <div className="flex w-full items-center mt-[41px]  gap-[29px]">
            <div className="w-[148px]  h-[38px] flex items-center rounded-[6px] justify-center bg-[#FEB737] ">
              <p className="text-[14px] font-normal">Rent a car</p>
            </div>
            <p className="text-[#FEB737] text-[16px] font-semibold">
              I want to keep this booking
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
