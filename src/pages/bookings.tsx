import Layout from "@/components/layout";
import React from "react";

export default function Bookings() {
  return (
    <Layout>
      <div className="w-full min-h-screen border-t flex justify-center border-gray-200">
        <div className="w-[65%]">
          <p className="text-[32px] mt-[36px] font-semibold">Bookings</p>
          <div className="w-[92%] mt-[31px] h-fit bg-slate-400 rounded-[24px]">
            <img className="w-full h-full" src="/images/lagos2.png" alt="" />
          </div>
          <div className="w-[92%] flex px-[27px] items-center min-h-[220px] border border-[#E5E5E5] mt-[36px] rounded-[24px]">
            <div className=" w-full ">
              <div className="flex gap-[17px]">
                <img src="/images/lagos3.png" alt="" />
                <div>
                  <p className="text-[#543786] text-[20px] font-bold">
                    Caesar’s Luxury Hotel
                  </p>
                  <span className="block text-[#543786] text-[12px] font-normal mt-[2px]">
                    Lekki Phase 1, Lagos
                  </span>
                  <span className="block text-[#319F43] text-[12px] mt-[2px] font-medium">
                    Confirmed
                  </span>
                  <span className="block text-[12px] mt-[7px]  font-medium">
                    Check - in: Tue 19 sept from 12:00
                  </span>
                  <span className="block text-[12px] mt-[4px] font-medium">
                    Check - in: Tue 19 sept from 12:00
                  </span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[12px] font-medium text-[#6C6C6C]">
                1 night, 2 adults, 1 child
              </p>
              <span className="block text-[24px] font-semibold">
                NGN 57, 200
              </span>
              <div className="w-[148px] h-[38px] flex items-center rounded-[6px] justify-center bg-[#E33629] mt-[21px]">
                <p className="text-[14px] text-white font-normal">
                  Cancel booking
                </p>
              </div>
            </div>
          </div>
          <p className="text-[32px] mt-[36px] font-semibold ">Car rentals</p>
          <div className="w-[92%] flex px-[27px] items-center min-h-[181px] border border-[#E5E5E5] mt-[36px] rounded-[24px]">
            <div className=" w-full ">
              <div className="flex items-center gap-[17px]">
                <Car />
                <div>
                  <p className=" text-[20px] font-bold">Rent a car</p>
                  <p className=" text-[12px] font-medium">
                    As a thanks for booking you have earned 5% discount on our
                    car rentals
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[148px] h-[38px] flex items-center rounded-[6px] justify-center bg-[#FEB737] mt-[21px]">
                <p className="text-[14px] font-normal">Rent a car</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Car = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="36" cy="36" r="36" fill="#FFF9ED" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24.6869 25.7562C25.3506 24.6511 26.2891 23.7367 27.411 23.1019C28.5329 22.4671 29.8 22.1336 31.0891 22.1338H40.9109C42.1996 22.134 43.4663 22.4677 44.5878 23.1024C45.7093 23.7372 46.6474 24.6514 47.3109 25.7562L52 33.5642V46.6671C52 47.5158 51.6629 48.3298 51.0627 48.9299C50.4626 49.53 49.6487 49.8671 48.8 49.8671H46.6667C45.818 49.8671 45.004 49.53 44.4039 48.9299C43.8038 48.3298 43.4667 47.5158 43.4667 46.6671V45.6005H28.5333V46.6671C28.5333 47.5158 28.1962 48.3298 27.5961 48.9299C26.996 49.53 26.182 49.8671 25.3333 49.8671H23.2C22.3513 49.8671 21.5374 49.53 20.9373 48.9299C20.3371 48.3298 20 47.5158 20 46.6671V33.5642L24.6869 25.7562ZM45.6 34.9338H26.4V32.8005H45.6V34.9338ZM24.2667 41.3338H30.6667V39.2005H24.2667V41.3338ZM47.7333 39.2005H41.3333V41.3338H47.7333V39.2005Z"
      fill="#FEB737"
    />
  </svg>
);
