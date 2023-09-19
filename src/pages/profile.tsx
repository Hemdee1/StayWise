import Layout from "@/components/layout";
import React from "react";

export default function profile() {
  return (
    <Layout>
      <div className="w-full border-t border-gray-200 flex items-center justify-center min-h-screen">
        <div className="w-[940px] min-h-screen border mt-[106px] rounded-[24px] border-gray-200">
          <p className="text-[32px] mt-[57px] font-semibold ml-[24px]">
            Personal details
          </p>
          <span className="block text-[20px] font-medium ml-[24px]">
            Please review and refresh your details while also discovering how
            they are utilized.
          </span>
          <span className="block mt-[58px] text-[24px] font-semibold ml-[24px]">
            Bio data
          </span>
          <span className="block w-[736px] h-[0.5px] bg-gray-200 ml-[24px] mt-2  "></span>
          <div className=" ml-[24px] mt-[40px]">
            <img src="/images/checkout.png" alt="" />
          </div>
          <div className="flex gap-[120px]">
            <div className="flex ml-[26px] mt-[30px] gap-[5px] flex-col">
              <label htmlFor="" className="text-[16px] font-medium">
                First name
              </label>
              <input
                className=" border-[1px] p-4 border-[#6C6C6C] rounded-[6px] w-[145%] h-[48px]"
                type="text"
                placeholder="Abdur-rasheed "
              />
            </div>
            <div className="flex ml-[26px] mt-[30px] gap-[5px] flex-col">
              <label htmlFor="" className="text-[16px] font-medium">
                Last name
              </label>
              <input
                className=" border-[1px] p-4 border-[#6C6C6C] rounded-[6px] w-[145%] h-[48px]"
                type="text"
                placeholder="Abdur-rasheed "
              />
            </div>
          </div>
          <div className="flex gap-[120px] mt-[37px]">
            <div className="flex ml-[26px] mt-[30px] gap-[5px] flex-col">
              <label htmlFor="" className="text-[16px] font-medium">
                Email
              </label>
              <input
                className=" border-[1px] p-4 border-[#6C6C6C] rounded-[6px] w-[145%] h-[48px]"
                type="text"
                placeholder="Abdur-rasheed "
              />
            </div>
            <div className="flex ml-[26px] mt-[30px] gap-[5px] flex-col">
              <label htmlFor="" className="text-[16px] font-medium">
                Phone number
              </label>
              <input
                className=" border-[1px] p-4 border-[#6C6C6C] rounded-[6px] w-[145%] h-[48px]"
                type="text"
                placeholder="Abdur-rasheed "
              />
            </div>
          </div>
          <span className="block mt-[58px] text-[24px] font-semibold ml-[24px]">
            Password
          </span>
          <span className="block w-[736px] h-[0.5px] bg-gray-200 ml-[24px] mt-2  "></span>
          <div className="flex ml-[26px] mt-[30px] gap-[5px] flex-col">
            <label htmlFor="" className="text-[16px] font-medium">
              Password
            </label>
            <input
              className=" border-[1px] p-4 border-[#6C6C6C] rounded-[6px] w-[35%] h-[48px]"
              type="password"
              placeholder="Abdur-rasheed "
            />
          </div>
          <div className="mt-[52px] mb-[70px] w-[536px] flex items-center justify-center ml-[24px] h-[56px] bg-[#FEB737] rounded-[6px] ">
            <p className="text-[16px] font-semibold  ">Save changes</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
