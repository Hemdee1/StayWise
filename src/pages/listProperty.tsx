import Layout from "@/components/layout";
import React from "react";

export default function ListProperty() {
  return (
    <Layout>
      <div className="w-full h-full justify-center flex -mb-[170px] border-t  border-gray-200 bg-[#543787]">
        <div className="w-[80%] ">
          <p className="text-[24px]  w-[25%] text-white font-medium  mt-[26px]">
            List your property among th 3000+ houses in Nigeria
          </p>
          <div className=" flex items-center mt-[30px] mb-[50px]  ">
            <div className="w-[700px] h-[680px] bg-white rounded-[16px]">
              {/* map here */}
            </div>
            <div className="w-[651px]   ml-[104px] h-[605px] bg-white rounded-[16px]">
              <div className="py-[30px] text-[36px] font-bold px-[60px]">
                <p>Earn more with consistent bookings</p>
                <div className="gap-[16px] mt-[36px] flex items-center">
                  <Mark />
                  <p className="text-[20px] w-full font-medium">
                    45% of partners get their first booking within a week
                  </p>
                </div>
                <div className="gap-[16px] mt-[24px] flex items-center">
                  <Mark />
                  <p className="text-[20px] w-full font-medium">
                    45% of partners get their first booking within a week
                  </p>
                </div>
                <div className="gap-[16px] mt-[24px] flex items-center">
                  <Mark />
                  <p className="text-[20px] w-full font-medium">
                    45% of partners get their first booking within a week
                  </p>
                </div>
                <div className="w-[100%] mt-[48px]  h-[56px] flex items-center rounded-[6px] justify-center bg-[#FEB737] ">
                  <p className="text-[14px] font-normal">Copy link</p>
                </div>
                <div className="mt-[44px] flex items-center justify-center gap-[16px]">
                  <p className="text-[20px] font-medium">
                    Already started a registration?
                  </p>
                  <span className="block text-[20px] font-semibold text-[#FEB737]">
                    Log in
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Mark = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 12.9852L12.243 17.2282L20.727 8.74316M3 12.9852L7.243 17.2282M15.728 8.74316L12.5 12.0002"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
