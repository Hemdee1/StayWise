import { LeftIcon, LoveIcon, RightIcon, StarIcon } from "@/components/icons";
import Layout from "@/components/layout";
import Image from "next/image";

const explore = [
  {
    city: "Lekki",
    img: "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg?size=626&ext=jpg&ga=GA1.1.1845495995.1695116234&semt=ais",
  },
  {
    city: "Asokoro",
    img: "https://img.freepik.com/premium-photo/red-orange-living-room_244125-969.jpg?size=626&ext=jpg&ga=GA1.1.1845495995.1695116234&semt=ais",
  },
  {
    city: "Maitama",
    img: "https://img.freepik.com/premium-photo/frame-3d-interior-illustration-wall-design-modern-empty-space-creative-3d_262243-2123.jpg?size=626&ext=jpg&ga=GA1.1.1845495995.1695116234&semt=ais",
  },
  {
    city: "Wuse",
    img: "https://img.freepik.com/free-photo/interior-design-with-photoframes-plants_23-2149385437.jpg?size=626&ext=jpg&ga=GA1.1.1845495995.1695116234&semt=ais",
  },
  {
    city: "Jabi",
    img: "https://img.freepik.com/free-photo/3d-render-blank-picture-leaning-against-wall-room-interior_1048-6282.jpg?size=626&ext=jpg&ga=GA1.2.1845495995.1695116234&semt=ais",
  },
];

const Page = () => {
  return (
    <Layout>
      <main className="max-w-full w-[80%] mx-auto mt-10 padding">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex gap-2">
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className="flex gap-5">
              <h2 className="text-[32px] text-secondary font-bold">
                Caesar’s Luxury Hotel
              </h2>
              <div className="flex items-center gap-3">
                <span className="block text-sm font-bold">Very good</span>
                <span className="text-xs text-gray-500">20 reviews</span>
                <div className="grid w-8 h-8 text-white rounded-md bg-secondary place-content-center">
                  6.7
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-secondary">
              <button className="px-2 py-1 text-white rounded bg-primary">
                Show on map
              </button>
              <span>
                Plot 14, Providence Street, Off Admiralty way, Lekki Phase 1,
                101001 Lagos, Nigeria
              </span>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <button>
              <LoveIcon />
            </button>
            <button className="!px-10 !py-3 primary-btn">Reserve</button>
          </div>
        </div>

        <div className="flex w-full mt-10 gap-7">
          <div className="w-full space-y-5">
            <div className="flex gap-5 h-[408px]">
              <div className="relative w-[40%] h-full rounded-xl overflow-clip">
                <Image
                  src="/images/lagos.png"
                  alt="lagos house"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-full rounded-xl overflow-clip w-[60%]">
                <Image
                  src="/images/abuja.png"
                  alt="abuja house"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-5">
              <div className="relative w-[300px] h-[408px] rounded-xl overflow-clip">
                <Image
                  src="/images/kano.png"
                  alt="kano house"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-[300px] h-[408px] rounded-xl overflow-clip">
                <Image
                  src="/images/kano.png"
                  alt="kano house"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full rounded-3xl h-[300px] border border-borderColor flex justify-between mt-7">
          <div className="flex flex-col justify-center h-full px-10 space-y-4 text-lg">
            <span className="block font-bold ">Superior Double Room</span>
            <span className="block font-bold ">Bed: 1 King Bed</span>
            <span className="block font-bold ">Your Child stays for free</span>
            <span className="block font-bold text-secondary">
              Free Concellation before the booked date
            </span>
          </div>
          <div className="flex flex-col justify-center h-full px-10 space-y-4 border-l border-borderColor">
            <span className="block text-gray-500">
              1 night, 2 adults, 1 child
            </span>
            <span className="block text-[48px] font-bold">NGN 57, 200</span>
            <span className="block text-gray-500">Includes taxes and fees</span>
            <button className="primary-btn !py-3 w-[300px] font-bold text-xl">
              Reserve
            </button>
          </div>
        </div>

        <div className="w-full rounded-3xl px-9 items-center h-[170px] border border-borderColor flex justify-between mt-7">
          <div className="flex items-center gap-7">
            <UserIcon />
            <div>
              <h3 className="text-2xl font-bold">Meet the host</h3>
              <p className="text-xl font-medium">
                Send a question to the property to find out more
              </p>
            </div>
          </div>
          <button className="w-[300px] !py-3 rounded-lg border-2 border-secondary font-bold">
            Message host
          </button>
        </div>

        {/* EXPLORE SECTION */}
        <div className="mt-[200px] max-w-full mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[36px] font-semibold mb-1">
                Inspired properties you should look at
              </h3>
            </div>
            <div className="flex gap-8">
              <button className="w-[30px] h-[30px] scale-125 grid place-content-center rounded-full bg-primary">
                <LeftIcon />
              </button>
              <button className="w-[30px] h-[30px] scale-125 grid place-content-center rounded-full bg-primary">
                <RightIcon />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap mt-8 gap-x-7 gap-y-10">
            {explore.map((data, index) => {
              const { city, img } = data;

              return (
                <article
                  key={index}
                  className="relative flex-1 min-w-[300px] shadow-lg rounded-2xl overflow-clip font-Grotesk"
                >
                  <div className="w-full h-[240px]">
                    <Image
                      src={img}
                      alt="offer image"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="relative px-4 py-2 text-black">
                    <h3 className="text-xl font-medium">
                      Aparthotel Stare Miasto
                    </h3>
                    <h4 className="text-[#6C6C6C]">Aparthotel Stare Miasto</h4>

                    <div className="flex flex-wrap  mt-5 gap-2 text-[#6C6C6C] text-sm">
                      <span className="grid w-6 h-6 rounded-md place-content-center bg-primary">
                        6.7
                      </span>
                      <p className="">Excellent</p>
                      <p className="">2,445 reviews</p>
                    </div>
                    <p className="mt-2 text-right">
                      Starting from{" "}
                      <span className="font-bold">NGN 56,233</span>
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
};

const UserIcon = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="36" cy="36" r="36" fill="#FFF9ED" />
    <g clip-path="url(#clip0_82_16)">
      <path
        d="M36 36C33.8783 36 31.8434 35.1571 30.3431 33.6569C28.8429 32.1566 28 30.1217 28 28C28 25.8783 28.8429 23.8434 30.3431 22.3431C31.8434 20.8429 33.8783 20 36 20C38.1217 20 40.1566 20.8429 41.6569 22.3431C43.1571 23.8434 44 25.8783 44 28C44 30.1217 43.1571 32.1566 41.6569 33.6569C40.1566 35.1571 38.1217 36 36 36ZM35.0688 42.45L33.9062 40.5125C33.5062 39.8438 33.9875 39 34.7625 39H37.2312C38.0062 39 38.4875 39.85 38.0875 40.5125L36.925 42.45L39.0125 50.1938L41.2625 41.0125C41.3875 40.5063 41.875 40.175 42.3813 40.3062C46.7625 41.4062 50 45.3687 50 50.0812C50 51.1437 49.1375 52 48.0812 52H39.8438C39.7125 52 39.5938 51.975 39.4813 51.9312L39.5 52H32.5L32.5188 51.9312C32.4063 51.975 32.2812 52 32.1562 52H23.9188C22.8625 52 22 51.1375 22 50.0812C22 45.3625 25.2438 41.4 29.6188 40.3062C30.125 40.1812 30.6125 40.5125 30.7375 41.0125L32.9875 50.1938L35.075 42.45H35.0688Z"
        fill="#FEB737"
      />
    </g>
    <defs>
      <clipPath id="clip0_82_16">
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

export default Page;
