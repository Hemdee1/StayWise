import { CalendarIcon, LocationIcon, PersonIcon, SearchIcon } from "./icons";

const SearchBox = () => {
  return (
    <section className="w-[80%] mx-auto bg-white shadow-[0px_4px_14px_0px_rgba(0,0,0,0.15)] min-h-[170px] flex justify-between items-center gap-5 rounded-[20px] -mt-20 px-[3%] relative">
      <div className="flex items-center gap-2">
        <LocationIcon />
        <input
          type="text"
          className="py-4 w-[200px] 2xl:w-[280px] text-lg px-3 border border-black rounded-xl"
          placeholder="Where are you going?"
        />
      </div>

      <div className="flex items-center gap-2">
        <CalendarIcon />
        <input
          type="text"
          className="py-4 w-[200px] 2xl:w-[280px] text-lg px-3 border border-black rounded-xl"
          placeholder="Check-in Date - Check-out Date"
        />
      </div>

      <div className="flex items-center gap-2">
        <PersonIcon />
        <select
          name="category"
          id="category"
          className="py-4 w-[200px] 2xl:w-[280px] text-lg px-3 border border-black rounded-xl"
        >
          <option value="">2 adults- 0 children - 1 room</option>
          <option value="">2 adults- 0 children - 1 room</option>
          <option value="">2 adults- 0 children - 1 room</option>
        </select>
      </div>

      <button className="p-8 rounded-[30px] bg-primary">
        <SearchIcon />
      </button>
    </section>
  );
};

export default SearchBox;
