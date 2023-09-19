import Layout from "@/components/layout";
import SearchBox from "@/components/searchBox";
import SearchResultBox from "@/components/searchResultBox";
import Image from "next/image";

const Search = () => {
  return (
    <Layout>
      <main className="max-w-full mx-auto mt-10 w-fullscreen padding">
        <div className="w-full h-[230px] bg-secondary rounded-3xl text-center pt-11">
          <span className="text-4xl font-semibold text-white">
            Search and get a reliable results in seconds
          </span>
        </div>
        <SearchBox />

        <div className="w-full 2xl:w-[80%] mt-[100px] flex gap-10">
          <div className="">
            <div className="h-[250px] flex justify-center items-center w-[300px] rounded-2xl overflow-clip relative border border-borderColor">
              <Image
                src="/images/map.png"
                alt="map"
                fill
                className="object-cover"
              />
              <button className="relative font-semibold primary-btn">
                Show on map
              </button>
            </div>

            <div className="relative mt-5 border borderColor rounded-2xl overflow-clip">
              <span className="block p-3 font-semibold border-b borderColor">
                Filter by:
              </span>

              <div className="p-5">
                <span className="block font-semibold">
                  Your Budget (per night)
                </span>
                <span className="text-gray-600">NGN 0 - NGN 200,000+</span>
              </div>

              <div className="p-5">
                <span className="font-semibold">Popular Filters</span>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="filter" id="filter" />
                  <span>Breakfast Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="filter" id="filter" />
                  <span>Terrace</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="filter" id="filter" />
                  <span>Free for child</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            <span className="block mb-4 text-2xl">
              Lagos: 201 properties found
            </span>

            <div className="space-y-4">
              {[
                Array(5)
                  .fill(null)
                  .map((item, index) => <SearchResultBox key={index} />),
              ]}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Search;
