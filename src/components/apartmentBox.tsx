import { ApartmentType } from "@/types";
import { formatPrice } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const ApartmentBox = ({ data }: { data: ApartmentType[] }) => {
  return (
    <div className="flex flex-wrap mt-8 gap-x-7 gap-y-10">
      {data.map((info) => {
        return (
          <Link
            href={"/apartment/" + info?._id}
            key={info?._id}
            className="relative flex-1 min-w-[300px] max-w-[600px] shadow-lg rounded-2xl overflow-clip font-Grotesk"
          >
            <div className="w-full h-[240px]">
              <Image
                src={info?.images[0]}
                alt="offer image"
                height={0}
                width={0}
                sizes="100vw"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative px-4 py-2 text-black">
              <h3 className="text-xl font-medium">{info?.title}</h3>
              <h4 className="text-[#6C6C6C]">
                {info?.location?.address}, {info?.location?.city},{" "}
                {info?.location?.country}
              </h4>

              <div className="flex flex-wrap  mt-5 gap-2 text-[#6C6C6C] text-sm">
                <span className="grid w-6 h-6 rounded-md place-content-center bg-primary">
                  {info?.rating}
                </span>
                <p className="">Excellent</p>
                <p className="">{info?.numReviews} reviews</p>
              </div>
              <p className="mt-2 text-right">
                Starting from{" "}
                <span className="font-bold">{formatPrice(info?.price)}</span>
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ApartmentBox;
