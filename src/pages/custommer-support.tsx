import Layout from "@/components/layout";
import React from "react";

export default function CustomSupport() {
  return (
    <Layout>
      <div className="w-full min-h-screen border-t flex justify-center border-gray-200">
        <div className="w-[65%]">
          <p className="text-[32px] mt-[36px] font-semibold">
            Customer support
          </p>
          <div className="w-[92%] px-[27px]  min-h-[620px] border border-[#E5E5E5] mt-[36px] rounded-[24px]">
            <span className="text-[20px] block font-bold mt-[57px]">
              Do you have a problem with your accomodation?
            </span>
            <p className="text-[16px] font-medium">
              We are just a DM away, send us a message.
            </p>

            <form className=" flex flex-col gap-[7px] mt-[95px]" action="">
              <label className="text-[16px] font-medium" htmlFor="">
                Email
              </label>
              <input
                className="p-4 placeholder:top-0 w-[83%] h-[266px] border rounded-[6px] border-x-gray-200"
                type="text"
                placeholder="Tell us more about your experience at stay wise"
              />
            </form>
            <button className="w-[83%] mt-[45px]  h-[38px] flex items-center rounded-[6px] justify-center bg-[#FEB737] ">
              <p className="text-[14px] font-normal">Submit</p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
