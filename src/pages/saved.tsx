import Layout from "@/components/layout";
import React from "react";

export default function Saved() {
  return (
    <Layout>
      <div className="w-full min-h-screen border-t flex justify-center border-gray-200">
        <div className="w-[65%]">
          <p className="text-[32px] mt-[69px] font-semibold mb-[38px]">
            Saved items
          </p>
          <div className="flex w-[100%] justify-between">
            <div className="flex gap-[26px]">
              <div>
                <img src="/images/saved.png" alt="" />
              </div>

              <div>
                <div className="flex items-center gap-[14px]">
                  <span className="text-[20px] font-bold text-[#543786]">
                    Caesar’s Luxury Hotel
                  </span>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <div className="flex mt-[10px] gap-[15px]">
                  <p className="text-[12px] text-[#543786]  font-medium">
                    Lekki Phase 1, Lagos
                  </p>
                  <p className="text-[12px] text-[#543786]  font-medium ">
                    Show on map
                  </p>
                  <p className="text-[12px] font-medium">13.4 Km from center</p>
                </div>
                <div className="w-[189] mt-[30px] h-[25px] border  rounded-[6px] text-[#6C6C6C] flex items-center justify-center border-[#6C6C6C]">
                  Recommended for your group
                </div>
                <span className="text-[14px] mt-[10px] font-semibold block">
                  Superior Double Room
                </span>
                <span className="text-[14px] mt-[10px] block font-normal text-[#6C6C6C]">
                  1 King Bed
                </span>
                <span className="block mt-[10px] text-[#543786] text-[14px] font-normal">
                  Your Child stays for free
                </span>
                <span className="block mt-[10px] text-[#543786] text-[14px] font-bold">
                  Free Concellation
                </span>
              </div>
            </div>
            <div className="flex justify-center flex-col gap-[100px]">
              <div className="flex gap-[5px] items-center">
                <div>
                  <span className="block text-[14px] font-bold">Very Good</span>
                  <span className="block text-[#6C6C6C] font-normal text-[14px]">
                    20 reviews
                  </span>
                </div>
                <div className="w-[22px] h-[22px] text-[13px] font-normal text-white rounded-[6px] flex items-center justify-center bg-[#543786]">
                  6.7
                </div>
              </div>
              <div>
                <p className="text-[12px] font-medium text-[#6C6C6C]">
                  1 night, 2 adults, 1 child
                </p>
                <span className="block text-[24px] font-semibold">
                  NGN 57, 200
                </span>
                <p className="text-[12px] font-medium text-[#6C6C6C]">
                  Includes taxes and fees
                </p>
                <div className="w-[148px] h-[38px] flex items-center rounded-[12px] justify-center bg-[#FEB737]">
                  <p className="text-[14px] font-normal">See Availability</p>
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[100%] mt-[50px] justify-between">
            <div className="flex gap-[26px]">
              <div>
                <img src="/images/saved.png" alt="" />
              </div>

              <div>
                <div className="flex items-center gap-[14px]">
                  <span className="text-[20px] font-bold text-[#543786]">
                    Caesar’s Luxury Hotel
                  </span>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <div className="flex mt-[10px] gap-[15px]">
                  <p className="text-[12px] text-[#543786]  font-medium">
                    Lekki Phase 1, Lagos
                  </p>
                  <p className="text-[12px] text-[#543786]  font-medium ">
                    Show on map
                  </p>
                  <p className="text-[12px] font-medium">13.4 Km from center</p>
                </div>
                <div className="w-[189] mt-[30px] h-[25px] border  rounded-[6px] text-[#6C6C6C] flex items-center justify-center border-[#6C6C6C]">
                  Recommended for your group
                </div>
                <span className="text-[14px] mt-[10px] font-semibold block">
                  Superior Double Room
                </span>
                <span className="text-[14px] mt-[10px] block font-normal text-[#6C6C6C]">
                  1 King Bed
                </span>
                <span className="block mt-[10px] text-[#543786] text-[14px] font-normal">
                  Your Child stays for free
                </span>
                <span className="block mt-[10px] text-[#543786] text-[14px] font-bold">
                  Free Concellation
                </span>
              </div>
            </div>
            <div className="flex justify-center flex-col gap-[100px]">
              <div className="flex gap-[5px] items-center">
                <div>
                  <span className="block text-[14px] font-bold">Very Good</span>
                  <span className="block text-[#6C6C6C] font-normal text-[14px]">
                    20 reviews
                  </span>
                </div>
                <div className="w-[22px] h-[22px] text-[13px] font-normal text-white rounded-[6px] flex items-center justify-center bg-[#543786]">
                  6.7
                </div>
              </div>
              <div>
                <p className="text-[12px] font-medium text-[#6C6C6C]">
                  1 night, 2 adults, 1 child
                </p>
                <span className="block text-[24px] font-semibold">
                  NGN 57, 200
                </span>
                <p className="text-[12px] font-medium text-[#6C6C6C]">
                  Includes taxes and fees
                </p>
                <div className="w-[148px] h-[38px] flex items-center rounded-[12px] justify-center bg-[#FEB737]">
                  <p className="text-[14px] font-normal">See Availability</p>
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const StarIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.2384 7.94506L12.4106 10.413L13.2577 14.0872C13.3025 14.2793 13.2897 14.4803 13.2209 14.6652C13.1521 14.85 13.0304 15.0105 12.8708 15.1265C12.7113 15.2425 12.5212 15.309 12.3241 15.3175C12.1271 15.326 11.9319 15.2763 11.7629 15.1745L8.55829 13.2307L5.36054 15.1745C5.19161 15.2763 4.99641 15.326 4.79936 15.3175C4.6023 15.309 4.41213 15.2425 4.25262 15.1265C4.09311 15.0105 3.97134 14.85 3.90253 14.6652C3.83372 14.4803 3.82093 14.2793 3.86576 14.0872L4.71159 10.4167L1.88316 7.94506C1.73356 7.81604 1.62539 7.64572 1.5722 7.45546C1.51901 7.2652 1.52318 7.06347 1.58418 6.87558C1.64519 6.68768 1.76031 6.52198 1.91511 6.39924C2.06991 6.27651 2.25751 6.20222 2.45436 6.18567L6.18255 5.86277L7.63784 2.39165C7.71383 2.20951 7.84202 2.05394 8.00626 1.9445C8.1705 1.83507 8.36344 1.77668 8.56079 1.77668C8.75815 1.77668 8.95109 1.83507 9.11533 1.9445C9.27956 2.05394 9.40775 2.20951 9.48375 2.39165L10.9434 5.86277L14.6704 6.18567C14.8672 6.20222 15.0548 6.27651 15.2096 6.39924C15.3644 6.52198 15.4795 6.68768 15.5405 6.87558C15.6015 7.06347 15.6057 7.2652 15.5525 7.45546C15.4993 7.64572 15.3912 7.81604 15.2416 7.94506H15.2384Z"
      fill="#FEB737"
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.95666 1.5174C4.78938 1.6749 4.69541 1.88849 4.69541 2.1112C4.69541 2.33391 4.78938 2.54751 4.95666 2.70501L9.37345 6.86251L4.95666 11.02C4.79412 11.1784 4.70419 11.3906 4.70622 11.6108C4.70825 11.831 4.80209 12.0417 4.96753 12.1974C5.13297 12.3531 5.35676 12.4415 5.59071 12.4434C5.82467 12.4453 6.05006 12.3606 6.21834 12.2076L11.266 7.45632C11.4333 7.29882 11.5272 7.08522 11.5272 6.86251C11.5272 6.6398 11.4333 6.42621 11.266 6.2687L6.21834 1.5174C6.05102 1.35994 5.8241 1.27148 5.5875 1.27148C5.3509 1.27148 5.12399 1.35994 4.95666 1.5174Z"
      fill="black"
    />
  </svg>
);
