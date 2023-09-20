import Layout from "@/components/layout";
import Link from "next/link";
import React from "react";

export default function RatingAndReview() {
  return (
    <Layout>
      <div className="flex justify-center w-full min-h-screen border-t border-gray-200">
        <div className="w-[65%]">
          <p className="text-[32px] mt-[36px] font-semibold">
            Ratings & Reviews
          </p>
          <div className="w-[92%] flex px-[27px] items-center min-h-[220px] border border-[#E5E5E5] mt-[36px] rounded-[24px]">
            <div className="w-full ">
              <div className="flex gap-[17px]">
                <img src="/images/lagos3.png" alt="" />
                <div>
                  <p className="text-[#543786] text-[20px] font-bold">
                    Caesar’s Luxury Hotel
                  </p>
                  <span className="block text-[#543786] text-[12px] font-normal mt-[10px]">
                    Lekki Phase 1, Lagos
                  </span>
                  <span className="block text-[#319F43] text-[12px] mt-[10px] font-medium">
                    Booked on 19 - 21 Sept. 2023
                  </span>
                </div>
              </div>
            </div>
            <div>
              <Link
                href="/create-review"
                className="w-[148px] h-[38px] flex items-center rounded-[6px] justify-center border border-[#543787] mt-[21px]"
              >
                <p className="text-[16px] text-[#543787] font-normal">
                  Leave a review
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
