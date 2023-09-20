import { useMyStore } from "@/store/store";
import ApartmentBox from "./apartmentBox";

const ExploreMore = () => {
  const { appartments } = useMyStore();
  const inspiredProperties = appartments.slice(
    appartments.length - 6,
    appartments.length - 1
  );
  return (
    <div className="mt-[200px] max-w-full mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[36px] font-semibold mb-1">
            Inspired properties you should look at
          </h3>
        </div>
        {/* <div className="flex gap-8">
        <button className="w-[30px] h-[30px] scale-125 grid place-content-center rounded-full bg-primary">
          <LeftIcon />
        </button>
        <button className="w-[30px] h-[30px] scale-125 grid place-content-center rounded-full bg-primary">
          <RightIcon />
        </button>
      </div> */}
      </div>

      <ApartmentBox data={inspiredProperties} />
    </div>
  );
};

export default ExploreMore;
