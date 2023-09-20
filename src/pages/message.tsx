import Layout from "@/components/layout";
import React from "react";

export default function Message() {
  return (
    <Layout>
      <div className=" w-full min-h-screen flex">
        <div className=" w-[45%] min-h-screen border-r border-gray-200 border-t">
          <p className="text-[24px] font-medium ml-[105px] mt-[26px]">
            Message
          </p>
          <span className="block w-[full] h-[0.5px] bg-gray-200 mt-[26px]  "></span>
          <div className="w-[80%] h-[142px] flex items-center bg-gray-100 rounded-[16px] mt-[33px] ml-[105px]">
            <div className="flex gap-[25px] ml-[24px]">
              <div>
                <img src="/images/message.png" alt="" />
              </div>
              <div>
                <span className="block text-[#543787] text-[24px] font-medium">
                  New booking update
                </span>
                <p className="text-[24px] font-medium">
                  Apartment Stare Miasto
                </p>
                <span className="block text-[18px] text-[#868686] font-normal">
                  Booked: Sept. 18 - 19
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[55%] border-gray-200 border-t">
          <p className="text-[24px] font-medium ml-[23px] mt-[26px]">
            Apartment Stare Miasto
          </p>
          <span className="block w-[full] h-[0.5px] bg-gray-200 mt-[26px]  "></span>
          <p className="flex justify-center mt-[35px]">Sept. 18 2023</p>
          <div className="w-[90%] h-[130px] flex items-center bg-gray-100 rounded-[16px] mt-[33px] ml-[29px]">
            <div className="flex gap-[25px] ml-[24px]">
              <div>
                <Messanger />
              </div>
              <div>
                <span className="block text-[#543787] text-[24px] font-medium">
                  New booking update
                </span>
                <p className="text-[24px] font-medium">
                  Apartment Stare Miasto
                </p>
                <span className="block text-[18px] text-[#868686] font-normal">
                  Booked: Sept. 18 - 19
                </span>
              </div>
            </div>
          </div>
          <p className="flex justify-center mt-[106px]">Sept. 18 2023</p>
          <div className="w-[90%] h-[130px] flex items-center bg-gray-100 rounded-[16px] mt-[33px] ml-[29px]">
            <div className="flex gap-[25px] ml-[24px]">
              <div>
                <Host />
              </div>
              <div>
                <span className="block text-[#543787] text-[24px] font-medium">
                  New booking update
                </span>
                <p className="text-[24px] font-medium">
                  Apartment Stare Miasto
                </p>
                <span className="block text-[18px] text-[#868686] font-normal">
                  Booked: Sept. 18 - 19
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Messanger = () => (
  <svg
    width="82"
    height="82"
    viewBox="0 0 82 82"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="41" cy="41" r="41" fill="#FEB737" />
    <g clip-path="url(#clip0_96_89)">
      <path
        d="M56.9279 26.3716C57.0007 26.1899 57.0185 25.9908 56.9792 25.7991C56.9398 25.6073 56.8451 25.4313 56.7067 25.2929C56.5682 25.1545 56.3923 25.0597 56.2005 25.0204C56.0088 24.9811 55.8097 24.9989 55.6279 25.0716L26.5339 36.7096H26.5319L25.6279 37.0696C25.4567 37.1379 25.3077 37.2522 25.1974 37.3999C25.087 37.5475 25.0197 37.7228 25.0027 37.9064C24.9857 38.0899 25.0198 38.2746 25.1012 38.44C25.1826 38.6054 25.3081 38.7451 25.4639 38.8436L26.2839 39.3636L26.2859 39.3676L36.2759 45.7236L42.6319 55.7136L42.6359 55.7176L43.1559 56.5376C43.2548 56.6928 43.3945 56.8177 43.5598 56.8986C43.7251 56.9795 43.9095 57.0132 44.0927 56.996C44.2759 56.9789 44.4508 56.9115 44.5981 56.8013C44.7455 56.6912 44.8596 56.5425 44.9279 56.3716L56.9279 26.3716ZM53.2619 30.1516L38.2739 45.1396L37.8439 44.4636C37.7652 44.3396 37.66 44.2344 37.5359 44.1556L36.8599 43.7256L51.8479 28.7376L54.2039 27.7956L53.2639 30.1516H53.2619Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_96_89">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(25 25)"
        />
      </clipPath>
    </defs>
  </svg>
);

const Host = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="36" cy="36" r="36" fill="#FFF9ED" />
    <g clip-path="url(#clip0_96_98)">
      <path
        d="M36.0001 36C33.8784 36 31.8436 35.1571 30.3433 33.6569C28.843 32.1566 28.0001 30.1217 28.0001 28C28.0001 25.8783 28.843 23.8434 30.3433 22.3431C31.8436 20.8429 33.8784 20 36.0001 20C38.1219 20 40.1567 20.8429 41.657 22.3431C43.1573 23.8434 44.0001 25.8783 44.0001 28C44.0001 30.1217 43.1573 32.1566 41.657 33.6569C40.1567 35.1571 38.1219 36 36.0001 36ZM35.0689 42.45L33.9064 40.5125C33.5064 39.8438 33.9876 39 34.7626 39H37.2314C38.0064 39 38.4876 39.85 38.0876 40.5125L36.9251 42.45L39.0126 50.1938L41.2626 41.0125C41.3876 40.5063 41.8751 40.175 42.3814 40.3062C46.7626 41.4062 50.0001 45.3687 50.0001 50.0812C50.0001 51.1437 49.1376 52 48.0814 52H39.8439C39.7126 52 39.5939 51.975 39.4814 51.9312L39.5001 52H32.5001L32.5189 51.9312C32.4064 51.975 32.2814 52 32.1564 52H23.9189C22.8626 52 22.0001 51.1375 22.0001 50.0812C22.0001 45.3625 25.2439 41.4 29.6189 40.3062C30.1251 40.1812 30.6126 40.5125 30.7376 41.0125L32.9876 50.1938L35.0751 42.45H35.0689Z"
        fill="#FEB737"
      />
    </g>
    <defs>
      <clipPath id="clip0_96_98">
        <rect
          width="28"
          height="32"
          fill="white"
          transform="translate(22.0001 20)"
        />
      </clipPath>
    </defs>
  </svg>
);
