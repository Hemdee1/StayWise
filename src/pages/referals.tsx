import Layout from "@/components/layout";
import { useMyStore } from "@/store/store";
import React, { useState } from "react";

export default function Referals() {
  const [copyText, setCopyText] = useState("Copy link");
  const { user } = useMyStore();

  const text = user
    ? `staywise/r/${user.firstName}-${user.lastName}`
    : "staywise/r/no-user.com";

  const copyLink = () => {
    navigator.clipboard.writeText(text);
    setCopyText("Copied!");
  };

  return (
    <Layout>
      <div className="flex justify-center w-full min-h-screen border-t border-gray-200">
        <div className="w-[65%]">
          <p className="text-[32px] mt-[36px] font-semibold">Referrals</p>
          <div className="w-[92%]  px-[27px] flex items-center  flex-col min-h-[791px] border border-[#E5E5E5] mt-[36px] rounded-[24px]">
            <div className="mt-[100px]">
              <Thumb />
            </div>
            <span className="text-[32px] mt-[24px] block font-bold">
              Referral offers
            </span>
            <span className="block w-[70%] text-center text-[20px] font-medium">
              Invite 3 people and get 50% off all your next booking for the next
              3 months
            </span>

            <div className="w-[50%]  h-[56px] mt-[35px] flex items-center rounded-[6px] justify-center border border-[#FEB737] ">
              <p className="text-[14px] font-normal">{text}</p>
            </div>
            <button
              className="w-[50%] mt-[32px]  h-[56px] flex items-center rounded-[6px] justify-center bg-[#FEB737]"
              onClick={copyLink}
            >
              {copyText}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Thumb = () => (
  <svg
    width="73"
    height="72"
    viewBox="0 0 73 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="36.5" cy="36" r="36" fill="#F4F2F2" />
    <path
      d="M51.1666 33.334C51.1666 32.6267 50.8857 31.9485 50.3856 31.4484C49.8855 30.9483 49.2072 30.6673 48.5 30.6673H40.0733L41.3533 24.574C41.38 24.4407 41.3933 24.294 41.3933 24.1473C41.3933 23.6007 41.1666 23.094 40.8066 22.734L39.3933 21.334L30.62 30.1073C30.1266 30.6007 29.8333 31.2673 29.8333 32.0007V45.334C29.8333 46.0412 30.1143 46.7195 30.6144 47.2196C31.1145 47.7197 31.7927 48.0006 32.5 48.0006H44.5C45.6066 48.0006 46.5533 47.334 46.9533 46.374L50.98 36.974C51.1 36.6673 51.1666 36.3473 51.1666 36.0007V33.334ZM21.8333 48.0006H27.1666V32.0007H21.8333V48.0006Z"
      fill="#FEB737"
    />
  </svg>
);
