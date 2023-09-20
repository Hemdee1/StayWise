import ExploreMore from "@/components/exploreMore";
import { UserIcon } from "@/components/icons";
import Layout from "@/components/layout";
import ProtectedRoute from "@/components/protectedRoute";
import { useMyStore } from "@/store/store";
import { ApartmentType } from "@/types";
import { formatPrice } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function CheckoutLayout() {
  const router = useRouter();
  const { appartments, user } = useMyStore();

  const [appartmentData, setAppartmentData] = useState<ApartmentType | null>(
    null
  );

  const { apartmentId } = router.query;
  useEffect(() => {
    if (!apartmentId || !appartments) return;

    const appartment = appartments.filter((app) => app._id === apartmentId);

    setAppartmentData(appartment[0]);
  }, [apartmentId, appartments]);

  if (!appartmentData)
    return (
      <Layout>
        <div className="min-h-[80vh] grid place-content-center">
          <span className="loader"></span>
        </div>
      </Layout>
    );

  const {
    _id,
    description,
    hostId,
    images,
    location,
    numReviews,
    price,
    rating,
    title,
  } = appartmentData;
  const { address, city, country } = location;
  const { adults, details, duration, rooms } = description;

  return (
    <Layout>
      <ProtectedRoute>
        <main className="max-w-full mx-auto w-fullscreen padding">
          <div className="w-full min-h-[230px] bg-[#543786] rounded-3xl text-center pt-11">
            <span className="text-4xl font-semibold text-white">Checkout</span>
          </div>
          <section className="w-[80%] mx-auto bg-white shadow-[0px_4px_14px_0px_rgba(0,0,0,0.15)] min-h-[170px] flex justify-between items-center gap-5 rounded-[20px] -mt-20 px-[3%] relative">
            <div className=" flex w-full justify-between gap-[17px] mx-auto items-center ">
              <div className="flex justify-center items-center gap-[8px] font-normal">
                <div className="min-w-[48px] h-[48px] bg-[#FEB737] text-[32px] flex items-center justify-center rounded-full">
                  1
                </div>
                <p className="font-Manrope text-[16px] font-semibold ">
                  Your Selection
                </p>
              </div>
              <span className="w-[320px] h-[1px] block bg-black"></span>
              <div className="flex justify-between items-center gap-[8px] font-normal">
                <div className="min-w-[48px] h-[48px] bg-[#FEB737] text-[32px] flex items-center justify-center rounded-full">
                  2
                </div>
                <p className="font-Manrope text-[16px] font-semibold ">
                  Your Details
                </p>
              </div>
              <span className="w-[320px] h-[1px] block bg-black"></span>
              <div className="flex justify-center items-center gap-[8px] font-normal">
                <div className="min-w-[48px] h-[48px] text-[32px] border border-black flex items-center justify-center rounded-full">
                  3
                </div>
                <p className="font-Manrope text-[16px] font-semibold ">
                  Final Step
                </p>
              </div>
            </div>
          </section>

          <div className="w-[80%] mx-auto mt-[100px]">
            <div className="w-full flex gap-[20px]">
              {/* parent */}
              <div className="w-[40%]">
                <div className="w-full  min-h-[237px] rounded-[8px] border-[1px] border-[#6C6C6C]">
                  <div className="mt-[32px] ml-[28px]">
                    <div className="flex gap-2">
                      {Array(Math.floor(rating / 2))
                        .fill(null)
                        .map((_item, i) => (
                          <StarIcon key={i} />
                        ))}
                    </div>
                    <p className=" text-[32px] font-bold text-[#543786]">
                      {title}
                    </p>
                    <p className="text-[#543786] text-[14px] font-medium mt-[8px]">
                      {address}, {city}, {country}
                    </p>
                    <div className="flex gap-[14px] w-[250px] mt-[24px] h-[29px] items-center">
                      <div>
                        <h1 className="text-[14px] font-bold ">Very Good</h1>
                      </div>
                      <div>
                        {" "}
                        <h2 className="text-[14px] font-normal text-[#6C6C6C] ">
                          {numReviews} reviews
                        </h2>
                      </div>
                      <div className=" bg-[#543786] flex items-center justify-center h-[30px] w-[30px] rounded-[7px]">
                        <h3 className="text-[16px] font-normal text-white ">
                          {rating}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-h-[436px] w-full rounded-[8px] border-[1px] border-[#6C6C6C] mt-[11px] ">
                  <div className="mt-[32px]">
                    <span className="block ml-[24px] text-[18px] font-bold">
                      Your booking details
                    </span>
                    <div className="flex justify-between mx-[24px] pr-4">
                      <div>
                        <span className="block text-[14px] mt-[16px] font-medium">
                          Check-In
                        </span>
                        <span className="block text-[16px] font-bold mt-[15px]">
                          Fri, Sep 22,2023
                        </span>
                        <span className="block text-[14px] mt-[10px] font-medium text-[#6C6C6C]">
                          12:00 AM- !2:00 PM
                        </span>
                      </div>
                      <div>
                        <span className="block text-[14px] mt-[16px] font-medium">
                          Check-Out
                        </span>
                        <span className="block text-[16px] font-bold mt-[15px]">
                          Sat, Sep 23, 2023
                        </span>
                        <span className="text-[14px] block mt-[10px] font-medium text-[#6C6C6C]">
                          12:00 PM- 1:00 PM
                        </span>
                      </div>
                    </div>
                    <div className="mt-[41px] ml-[24px]">
                      <span className="text-[14px] block font-semibold text-[#6C6C6C]">
                        Total length of stay:
                      </span>
                      <span className="mt-[10px] text-[14px] font-bold">
                        1 night
                      </span>
                    </div>
                    <span className="mt-[36px] h-[1px]   w-[80%] mx-auto bg-[#6C6C6C] block"></span>
                    <div className="mt-[24px] flex items-center gap-[120px]">
                      <div className="ml-[24px]">
                        <span className="block text-[14px] text-[#6C6C6C] font-semibold">
                          You selected
                        </span>
                        <span className="mt-[10px] block text-[14px] font-bold">
                          1 room for 2 adults, 1 child
                        </span>
                        <span className="mt-[24px] mb-[28px] block text-[#FEB737] text-[14px] font-bold">
                          Change your selection
                        </span>
                      </div>
                      <div>
                        <ArrowDown />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-h-[348px] w-full rounded-[8px] border-[1px] border-[#6C6C6C] mt-[11px]">
                  <div className="mt-[32px] ">
                    <span className="block ml-[24px] text-[18px] font-bold">
                      Your price summary
                    </span>
                    <div className="mt-[50px] mx-[24px] flex justify-between">
                      <div>
                        <span className="block text-[#6C6C6C]  text-[14px] font-medium">
                          Original price
                        </span>
                        <span className="block mt-[10px] text-[14px] text-[#6C6C6C] font-medium">
                          Discount
                        </span>
                      </div>
                      <div>
                        <span className=" block text-[16px] text-[#6C6C6C] font-medium">
                          {formatPrice(price)}
                        </span>
                        <span className="block text-[16px] mt-[22px] text-[#6C6C6C] font-medium ">
                          {formatPrice(8)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[28px] bg-[#FFEBAD] flex  justify-center  rounded-[8px] w-full min-h-[139px]">
                    <div className="flex justify-between w-full mx-[22px]">
                      <div className="mt-[50px]">
                        <span className="block text-[28px] font-bold">
                          Total
                        </span>
                      </div>
                      <div className="mt-[35px]">
                        <span className="block text-[36px] font-bold">
                          {formatPrice(price + 8)}
                        </span>
                        <span className="block text-[14px] font-medium">
                          Includes taxes and fees
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  */}

              <div className="w-[60%]">
                <div className="w-full h-[102px] rounded-[8px] border-[1px] border-[#6C6C6C]">
                  <div className="flex ml-[36px] gap-[6px] items-center h-full">
                    {user?.image ? (
                      <div className="relative grid border-2 w-14 h-14 place-content-center rounded-xl border-primary overflow-clip">
                        <Image
                          src={user.image}
                          alt="user image"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <UserIcon />
                    )}

                    <div>
                      <p className="text-[16px] font-normal">
                        You are signed in
                      </p>
                      <p className="text-[16px] text-[#6C6C6C] font-normal">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full, rounded-[8px] border-[1px] border-[#6C6C6C] min-h-[511px] mt-[10px] ">
                  <p className="text-[24px] font-bold mt-[18px] ml-[26px]">
                    Enter you details
                  </p>
                  <span className=" block text-[16px] mt-[30px] ml-[26px] font-bold">
                    Are you travelling for work?
                  </span>
                  <div className="flex gap-[20px] mt-[13px]">
                    <div className=" flex ml-[26px] gap-[8px]">
                      <input type="checkbox" name="" id="" className="w-7" />
                      <p className="text-[16px]  font-normal">Yes</p>
                    </div>
                    <div className=" flex ml-[26px] gap-[8px]">
                      <input type="checkbox" name="" id="" className="w-7" />
                      <p className="text-[16px]  font-normal">No</p>
                    </div>
                  </div>
                  <form action="" className="w-full">
                    <div className="flex gap-[21px] ">
                      <div className="flex ml-[26px] mt-[30px] gap-[5px] flex-col">
                        <label htmlFor="" className="text-[16px] font-bold">
                          First Name *
                        </label>
                        <input
                          className=" border-[1px] px-3 border-[#6C6C6C] rounded-[8px] w-[105%] h-[48px]"
                          type="text"
                          value={user?.firstName}
                        />
                      </div>
                      <div className="flex ml-[26px] mt-[30px] gap-[5px] flex-col">
                        <label htmlFor="" className="text-[16px] font-bold">
                          Last Name *
                        </label>
                        <input
                          className="px-3 border-[1px] border-[#6C6C6C] rounded-[8px] w-[105%] h-[48px]"
                          value={user?.lastName}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex ml-[26px] mt-[30px] gap-[5px] flex-col">
                      <label htmlFor="" className="text-[16px] font-bold">
                        Email Address *
                      </label>
                      <input
                        className="px-3 border-[1px] border-[#6C6C6C] rounded-[8px] w-[37%] h-[48px]"
                        type="text"
                        value={user?.email}
                      />
                    </div>
                  </form>
                  <div className="mt-[42px] ml-[26px]">
                    <p className="text-[16px] font-bold">
                      Who are you booking for?
                    </p>
                    <div className="flex gap-[11px] items-center mt-[12px]">
                      <input
                        type="radio"
                        name="booking"
                        id="booking"
                        className="w-6 h-6"
                      />
                      <p className="text-[16px] font-normal text-[#6C6C6C]">
                        I’m the main guest
                      </p>
                    </div>
                    <div className="flex gap-[11px] items-center mt-[22px] mb-[27px]">
                      <input
                        type="radio"
                        name="booking"
                        id="booking"
                        className="w-6 h-6"
                      />
                      <p className="text-[16px] font-normal text-[#6C6C6C]">
                        I’m booking for someone else
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full, rounded-[8px] border-[1px] border-[#6C6C6C] min-h-[287px] mt-[10px] ">
                  <span className="block mt-[24px] ml-[24px] text-[16px] font-bold">
                    Your arrival time
                  </span>
                  <span className="block mt-[22px] ml-[24px] text-[16px] font-normal text-[#6C6C6C]">
                    Your room will be ready for check-in between 12:00 AM and
                    12:00 PM
                  </span>
                  <span className="block mt-[14px] ml-[24px] text-[16px] font-normal text-[#6C6C6C]">
                    24-hours front desk - help whenever you need it!
                  </span>

                  <form
                    action=""
                    className="mt-[28px] w-[60%] ml-[26px] flex flex-col"
                  >
                    <label
                      htmlFor=""
                      className="text-[16px] mb-[5px] font-medium"
                    >
                      Add your estimated arrival time (optional)
                    </label>

                    <select className="mt-[5px] border p-[11px] active:border-none border-[#6C6C6C]">
                      <option>please select</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </form>
                  <span className="text-[14px] text-[#6C6C6C] ml-[26px] font-normal mt-[20px]">
                    Time is for Lagos time zone
                  </span>
                </div>
                <Link
                  href={"/checkout2/" + _id}
                  className="px-4 py-3 rounded-[12px] bg-[#FEB737] flex items-center justify-center mt-[45px] ml-[350px] text-xl font-semibold"
                >
                  Next : Final details
                </Link>
              </div>
              {/*  */}
            </div>
            <div className="w-full flex items-center mx-auto mt-[169.5px] rounded-[24px] min-h-[173px] border border-[#868686]">
              <div className="w-full flex px-[26px] justify-between items-center">
                <div className="flex w-[40%]  gap-[30px] items-center">
                  <Avatar />
                  <div className="">
                    <span className="block text-[24px] font-bold ">
                      Meet the host
                    </span>
                    <span className="block text-[20px] font-medium mt-[7px]">
                      Send a question to the property to find out more
                    </span>
                  </div>
                </div>
                <Link
                  href={"/message/" + _id}
                  className="w-[300px] !py-3 rounded-lg border-2 text-center border-secondary font-bold"
                >
                  Message host
                </Link>
              </div>
            </div>
          </div>
        </main>

        <ExploreMore />
      </ProtectedRoute>
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

const ArrowDown = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4667 4.9623C13.2909 4.78654 13.0525 4.68781 12.8039 4.68781C12.5553 4.68781 12.3169 4.78654 12.1411 4.9623L7.50047 9.60292L2.85985 4.9623C2.68303 4.79152 2.44622 4.69703 2.20041 4.69916C1.9546 4.7013 1.71946 4.79989 1.54564 4.97372C1.37182 5.14754 1.27323 5.38267 1.27109 5.62848C1.26896 5.87429 1.36345 6.1111 1.53422 6.28792L6.83766 11.5914C7.01347 11.7671 7.25188 11.8658 7.50047 11.8658C7.74907 11.8658 7.98748 11.7671 8.16329 11.5914L13.4667 6.28792C13.6425 6.11211 13.7412 5.8737 13.7412 5.62511C13.7412 5.37652 13.6425 5.1381 13.4667 4.9623Z"
      fill="black"
    />
  </svg>
);

const Avatar = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="36" cy="36" r="36" fill="#FFF9ED" />
    <g clip-path="url(#clip0_0_1)">
      <path
        d="M36 36C33.8783 36 31.8434 35.1571 30.3431 33.6569C28.8429 32.1566 28 30.1217 28 28C28 25.8783 28.8429 23.8434 30.3431 22.3431C31.8434 20.8429 33.8783 20 36 20C38.1217 20 40.1566 20.8429 41.6569 22.3431C43.1571 23.8434 44 25.8783 44 28C44 30.1217 43.1571 32.1566 41.6569 33.6569C40.1566 35.1571 38.1217 36 36 36ZM35.0688 42.45L33.9062 40.5125C33.5063 39.8438 33.9875 39 34.7625 39H37.2312C38.0063 39 38.4875 39.85 38.0875 40.5125L36.925 42.45L39.0125 50.1938L41.2625 41.0125C41.3875 40.5063 41.875 40.175 42.3813 40.3062C46.7625 41.4062 50 45.3687 50 50.0812C50 51.1437 49.1375 52 48.0812 52H39.8438C39.7125 52 39.5938 51.975 39.4813 51.9312L39.5 52H32.5L32.5188 51.9312C32.4062 51.975 32.2812 52 32.1562 52H23.9188C22.8625 52 22 51.1375 22 50.0812C22 45.3625 25.2438 41.4 29.6188 40.3062C30.125 40.1812 30.6125 40.5125 30.7375 41.0125L32.9875 50.1938L35.075 42.45H35.0688Z"
        fill="#FEB737"
      />
    </g>
    <defs>
      <clipPath id="clip0_0_1">
        <rect
          width="28"
          height="32"
          fill="white"
          transform="translate(22 20)"
        />
      </clipPath>
    </defs>
  </svg>
);
