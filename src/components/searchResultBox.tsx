import Image from "next/image";
import { StarIcon } from "./icons";
import { ApartmentType } from "@/types";
import Link from "next/link";
import { formatPrice } from "@/utils";

const SearchResultBox = ({ data }: { data: ApartmentType }) => {
  return (
    <article className="flex gap-5 p-5 border rounded-[20px] border-borderColor">
      <Image
        src={data?.images[0]}
        alt="search image"
        height={0}
        width={0}
        sizes="100vw"
        className="h-[200px] min-w-[230px] rounded-2xl object-cover"
      />
      <div className="flex justify-between w-full">
        <div>
          <span className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-secondary">{data?.title}</h3>
            <div className="flex gap-2">
              {Array(Math.floor(data?.rating / 2))
                .fill(null)
                .map((_item, i) => (
                  <StarIcon key={i} />
                ))}
            </div>
          </span>
          <span className="flex items-center gap-2 mt-2 text-sm font-semibold text-secondary">
            <span>
              {data?.location?.address}, {data?.location?.city},{" "}
              {data?.location?.country}
            </span>
          </span>

          <div className="mt-3 space-y-1 text-sm text-secondary">
            <span className="block font-bold ">Superior Double Room</span>
            <span className="block font-bold ">
              Room: {data?.description?.rooms}
            </span>
            <span className="block font-bold ">Bed: 1 King Bed</span>
            <span className="block font-bold ">Your Child stays for free</span>
            <span className="block text-lg font-bold text-secondary">
              Free Concellation before the booked date
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between">
          <div className="flex items-center gap-2">
            <div>
              <span className="block text-sm font-bold">Very good</span>
              <span className="text-xs text-gray-500">
                {data?.numReviews} reviews
              </span>
            </div>
            <div className="grid w-8 h-8 text-white rounded-md bg-secondary place-content-center">
              6.7
            </div>
          </div>
          <div>
            <span className="block text-xs text-gray-600">
              {data?.description.duration} night, {data?.description.adults}{" "}
              adults, 1 child
            </span>
            <h2 className="text-2xl font-bold">{formatPrice(data?.price)}</h2>
            <span className="block text-xs text-gray-600">
              Includes taxes and fees
            </span>
            <Link href={"/checkout/" + data?._id}>
              <button className="mt-2 flex items-center justify-center gap-2 font-semibold primary-btn w-[150px]">
                Reserve
                <RightArrow />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

const RightArrow = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.79516 1.99062C4.62788 2.14813 4.53391 2.36172 4.53391 2.58443C4.53391 2.80714 4.62788 3.02074 4.79516 3.17824L9.21195 7.33574L4.79516 11.4932C4.63263 11.6516 4.54269 11.8638 4.54472 12.084C4.54675 12.3042 4.64059 12.5149 4.80603 12.6706C4.97147 12.8263 5.19526 12.9147 5.42921 12.9166C5.66317 12.9185 5.88856 12.8338 6.05685 12.6809L11.1045 7.92955C11.2718 7.77204 11.3657 7.55845 11.3657 7.33574C11.3657 7.11303 11.2718 6.89944 11.1045 6.74193L6.05685 1.99062C5.88952 1.83317 5.6626 1.74471 5.426 1.74471C5.1894 1.74471 4.96249 1.83317 4.79516 1.99062Z"
      fill="black"
    />
  </svg>
);

export default SearchResultBox;
