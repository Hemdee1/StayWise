import Header from "@/components/header";
import { LeftIcon, RightIcon } from "@/components/icons";
import SearchBox from "@/components/searchBox";
import Image from "next/image";

const offerData = [
  {
    image: "/images/offers1.png",
    title: "Work, relax, or do a bit of both",
    desc: "Browse properties offering extended stays, many with reduced monthly rates",
  },
  {
    image: "/images/offers2.png",
    title: "Work, relax, or do a bit of both",
    desc: "Browse properties offering extended stays, many with reduced monthly rates",
  },
  {
    image: "/images/offers3.png",
    title: "Work, relax, or do a bit of both",
    desc: "Browse properties offering extended stays, many with reduced monthly rates",
  },
];

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

export default function Home() {
  return (
    <main className="">
      <Header />

      {/*   HERO SECTION */}
      <div className="w-fullscreen mx-auto max-w-full padding h-[610px]">
        <div className="relative h-full rounded-[36px] overflow-clip mt-5">
          <Image src="/images/hero.png" fill alt="hero image" />
          <div className="relative text-white pl-[6%] pt-[110px]">
            <h1 className="text-[96px] font-semibold">Find your next stay</h1>
            <h3 className="text-[30px]">
              Search deals on hotels, homes and much more...
            </h3>
          </div>
        </div>

        <SearchBox />

        {/* OFFERS SECTION */}
        <div className="pt-[100px] w-[80%] max-w-full mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[36px] font-semibold mb-1">Offers</h3>
              <h4>Promotions, deals, and special offers for you</h4>
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

          <div className="flex mt-8 gap-7">
            {offerData.map((offer, index) => {
              const { desc, image, title } = offer;

              return (
                <article
                  key={index}
                  className="relative w-[440px] h-[300px] rounded-2xl overflow-clip font-Grotesk"
                >
                  <Image
                    src={image}
                    alt="offer image"
                    fill
                    className="object-cover"
                  />
                  <div className="relative p-10 text-white">
                    <h3 className="text-3xl font-medium mb-4 w-[210px] max-w-full">
                      {title}
                    </h3>
                    <h5 className="w-[295px] max-w-full">{desc}</h5>
                    <button className="mt-10 text-black primary-btn">
                      Find a Stay
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* TRENDING SECTION */}
        <div className="pt-[100px] w-[80%] max-w-full mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[36px] font-semibold mb-1">
                Trending destinations
              </h3>
              <h4>Travelers searching for Nigeria also booked these</h4>
            </div>
          </div>

          <div className="flex w-full mt-8 gap-7">
            <div className="w-full space-y-5">
              <div className="flex gap-5 h-[408px]">
                <div className="relative w-[40%] h-full rounded-xl overflow-clip">
                  <Image
                    src="/images/lagos.png"
                    alt="lagos house"
                    fill
                    className="object-cover"
                  />
                  <h2 className="p-8 text-[32px] font-medium relative text-white">
                    Lagos
                  </h2>
                </div>
                <div className="relative h-full rounded-xl overflow-clip w-[60%]">
                  <Image
                    src="/images/abuja.png"
                    alt="abuja house"
                    fill
                    className="object-cover"
                  />
                  <h2 className="p-8 text-[32px] font-medium relative text-white">
                    Abuja
                  </h2>
                </div>
              </div>

              <div className="flex gap-5 h-[408px]">
                <div className="relative flex-1 h-full rounded-xl overflow-clip">
                  <Image
                    src="/images/kano.png"
                    alt="kano house"
                    fill
                    className="object-cover"
                  />
                  <h2 className="p-8 text-[32px] font-medium relative text-white">
                    Kano
                  </h2>
                </div>
                <div className="relative flex-1 h-full rounded-xl overflow-clip">
                  <Image
                    src="/images/port harcourt.png"
                    alt="port harcourt house"
                    fill
                    className="object-cover"
                  />
                  <h2 className="p-8 text-[32px] font-medium relative text-white">
                    Port Harcourt
                  </h2>
                </div>
                <div className="relative flex-1 h-full rounded-xl overflow-clip">
                  <Image
                    src="/images/jos.png"
                    alt="jos house"
                    fill
                    className="object-cover"
                  />
                  <h2 className="p-8 text-[32px] font-medium relative text-white">
                    Jos
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EXPLORE SECTION */}
        <div className="pt-[100px] w-[80%] max-w-full mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[36px] font-semibold mb-1">
                Explore Nigeria
              </h3>
              <h4>Travelers searching for Nigeria also booked these</h4>
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

          <div className="flex mt-8 gap-7">
            {explore.map((data, index) => {
              const { city, img } = data;

              return (
                <article
                  key={index}
                  className=" flex-1 relative h-[270px] font-Grotesk"
                >
                  <div className="w-full h-[240px] rounded-2xl overflow-clip">
                    <Image
                      src={img}
                      alt="offer image"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="relative p-1 text-black">
                    <h3 className="text-xl font-medium">{city}</h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
