import Layout from "@/components/layout";
import React from "react";

export default function ListProperty2() {
  return (
    <Layout>
      <div className="w-full min-h-screen border-t flex justify-center bg-[#FBF9F9]">
        <div className="w-[65%]">
          <p className="text-[32px] mt-[36px] font-semibold">Referrals</p>

          <span className="text-[32px] mt-[24px] block font-bold">
            Referral offers
          </span>

          <div className="w-[50%] mt-[32px]  h-[56px] flex items-center rounded-[6px] justify-center bg-[#FEB737] ">
            <p className="text-[14px] font-normal">Copy link</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
