import Layout from "@/components/layout";
import React from "react";

export default function CreateRateAndReview() {
  return (
    <Layout>
      <div className="w-full min-h-screen border-t flex justify-center border-gray-200">
        <div className="w-[65%]">
          <p className="text-[32px] flex items-center gap-[10px] mt-[36px] font-semibold">
            <Arrow />
            Rate & review
          </p>
          <div className="w-[92%] px-[27px]  min-h-[791px] border border-[#E5E5E5] mt-[36px] rounded-[24px]">
            <div className=" w-full ">
              <div className="flex gap-[17px] mt-[26px]">
                <img src="/images/lagos3.png" alt="" />
                <div>
                  <p className="text-[#543786] block text-[20px] font-bold">
                    Caesar’s Luxury Hotel
                  </p>

                  <div className="flex gap-[17px] mt-[12px]">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
              </div>
            </div>
            <span className="text-[20px] block font-bold mt-[57px]">
              Leave a review
            </span>
            <div className="flex gap-[93px]">
              <form className=" flex flex-col gap-[7px] mt-[31px]" action="">
                <label className="text-[16px] font-medium" htmlFor="">
                  Review title
                </label>
                <input
                  className="p-4 w-[120%] border rounded-[6px] border-x-gray-200"
                  type="text"
                  placeholder="I love it"
                />
              </form>
              <form className=" flex flex-col gap-[7px] mt-[31px]" action="">
                <label className="text-[16px] font-medium" htmlFor="">
                  Name
                </label>
                <input
                  className="p-4 w-[120%] border rounded-[6px] border-x-gray-200"
                  type="text"
                  placeholder="AbdulRasheed"
                />
              </form>
            </div>
            <form className=" flex flex-col gap-[7px] mt-[31px]" action="">
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
              <p className="text-[14px] font-normal">Submit your review</p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const StarIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.9842 11.2249L17.7561 14.9149L19.0226 20.4086C19.0897 20.6958 19.0705 20.9964 18.9677 21.2728C18.8648 21.5492 18.6827 21.7891 18.4442 21.9626C18.2057 22.1361 17.9214 22.2354 17.6267 22.2481C17.3321 22.2609 17.0402 22.1865 16.7876 22.0343L11.9961 19.128L7.21483 22.0343C6.96223 22.1865 6.67038 22.2609 6.37574 22.2481C6.0811 22.2354 5.79676 22.1361 5.55826 21.9626C5.31976 21.7891 5.13769 21.5492 5.03481 21.2728C4.93193 20.9964 4.9128 20.6958 4.97983 20.4086L6.24451 14.9205L2.01545 11.2249C1.79177 11.032 1.63003 10.7773 1.5505 10.4928C1.47098 10.2084 1.47721 9.90675 1.56842 9.62581C1.65964 9.34486 1.83176 9.0971 2.06322 8.91359C2.29468 8.73009 2.57517 8.619 2.86951 8.59427L8.44389 8.11145L10.6198 2.92145C10.7335 2.64912 10.9251 2.4165 11.1707 2.25288C11.4163 2.08926 11.7047 2.00195 11.9998 2.00195C12.2949 2.00195 12.5834 2.08926 12.829 2.25288C13.0745 2.4165 13.2662 2.64912 13.3798 2.92145L15.5623 8.11145L21.1348 8.59427C21.4292 8.619 21.7097 8.73009 21.9411 8.91359C22.1726 9.0971 22.3447 9.34486 22.4359 9.62581C22.5271 9.90675 22.5334 10.2084 22.4538 10.4928C22.3743 10.7773 22.2126 11.032 21.9889 11.2249H21.9842Z"
      fill="#B5B5B5"
    />
  </svg>
);

const Arrow = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.9999 11.0006H7.82992L12.7099 6.12065C13.0999 5.73065 13.0999 5.09065 12.7099 4.70065C12.6174 4.60794 12.5075 4.5344 12.3865 4.48421C12.2656 4.43403 12.1359 4.4082 12.0049 4.4082C11.874 4.4082 11.7443 4.43403 11.6233 4.48421C11.5023 4.5344 11.3924 4.60794 11.2999 4.70065L4.70992 11.2906C4.61722 11.3832 4.54367 11.493 4.49349 11.614C4.44331 11.735 4.41748 11.8647 4.41748 11.9956C4.41748 12.1266 4.44331 12.2563 4.49349 12.3773C4.54367 12.4982 4.61722 12.6081 4.70992 12.7006L11.2999 19.2906C11.3925 19.3832 11.5024 19.4567 11.6234 19.5068C11.7443 19.5569 11.874 19.5827 12.0049 19.5827C12.1359 19.5827 12.2655 19.5569 12.3865 19.5068C12.5074 19.4567 12.6173 19.3832 12.7099 19.2906C12.8025 19.1981 12.8759 19.0882 12.9261 18.9672C12.9762 18.8462 13.0019 18.7166 13.0019 18.5856C13.0019 18.4547 12.9762 18.3251 12.9261 18.2041C12.8759 18.0831 12.8025 17.9732 12.7099 17.8806L7.82992 13.0006H18.9999C19.5499 13.0006 19.9999 12.5506 19.9999 12.0006C19.9999 11.4506 19.5499 11.0006 18.9999 11.0006Z"
      fill="black"
    />
  </svg>
);
