import { SubmitHandler, useForm } from "react-hook-form";
import { CalendarIcon, LocationIcon, PersonIcon, SearchIcon } from "./icons";
import { useRouter } from "next/router";

type formType = {
  location: string;
  checkInDate: string;
  checkOutDate: string;
  category: string;
};

const SearchBox = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<formType>();

  const onSubmit: SubmitHandler<formType> = (data) => {
    router.push({
      pathname: "search",
      query: {
        location: data.location,
        checkInDate: data.checkInDate,
        checkOutDate: data.checkOutDate,
        category: data.category,
      },
    });
  };

  return (
    <form
      className="w-[80%] mx-auto bg-white shadow-[0px_4px_14px_0px_rgba(0,0,0,0.15)] min-h-[170px] flex justify-between items-center gap-5 rounded-[20px] -mt-20 px-[3%] relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative flex items-center gap-2">
        <h3 className="absolute left-8 -top-7">Location</h3>
        <LocationIcon />
        <input
          type="text"
          className="py-4 w-[150px] 2xl:w-[280px] text-lg px-3 border border-borderColor rounded-[10px]"
          placeholder="Where are you going?"
          {...register("location")}
        />
      </div>

      <div className="relative flex items-center gap-2">
        <h3 className="absolute left-8 -top-7">Check-in Date</h3>
        <CalendarIcon />
        <input
          type="date"
          className="py-4 w-[150px] 2xl:w-[280px] text-lg px-3 border border-borderColor rounded-[10px]"
          placeholder="Check-in Date"
          {...register("checkInDate")}
        />
      </div>

      <div className="relative flex items-center gap-2">
        <h3 className="absolute left-8 -top-7">Check-out Date</h3>
        <CalendarIcon />
        <input
          type="date"
          className="py-4 w-[150px] 2xl:w-[280px] text-lg px-3 border border-borderColor rounded-[10px]"
          placeholder="Check-out Date"
          {...register("checkOutDate")}
        />
      </div>

      <div className="relative flex items-center gap-2">
        <h3 className="absolute left-8 -top-7">Category</h3>
        <PersonIcon />
        <select
          {...register("category")}
          id="category"
          className="py-4 w-[150px] 2xl:w-[280px] text-lg px-3 border border-borderColor rounded-[10px]"
        >
          <option value="2 adults- 0 children - 1 room">
            2 adults- 0 children - 1 room
          </option>
          <option value="3 adults- 1 children - 2 room">
            3 adults- 1 children - 2 room
          </option>
          <option value="1 adults- 2 children - 1 room">
            1 adults- 2 children - 1 room
          </option>
        </select>
      </div>

      <button className="p-3 flex font-bold items-center gap-1 rounded-[10px] bg-primary">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBox;
