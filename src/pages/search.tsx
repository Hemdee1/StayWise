import Layout from "@/components/layout";
import SearchBox from "@/components/searchBox";
import Image from "next/image";

const Search = () => {
  return (
    <Layout>
      <main className="max-w-full mx-auto w-fullscreen padding">
        <div className="w-full h-[230px] bg-[#543786] rounded-3xl text-center pt-11">
          <span className="text-4xl font-semibold text-white">
            Search and get a reliable results in seconds
          </span>
        </div>
        <SearchBox />

        <div className="w-[80%] mt-[100px] flex gap-4">
          <div></div>
          <div>
            <span className="mb-4 text-2xl">Lagos: 201 properties found</span>

            <article className="flex flex-1 gap-3 p-5 border rounded-[20px] border-[#6C6C6C]">
              <Image
                src="/images.hero.png"
                alt="search image"
                height={0}
                width={0}
                sizes="100vw"
                className="h-[250px] rounded-2xl"
              />
              <div className="flex justify-between">
                <span className="flex gap-2">
                  <h3 className="text-[#543786] text-xl">
                    Caesar’s Luxury Hotel
                  </h3>
                  <div className="flex gap-2">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </span>
              </div>
            </article>
          </div>
        </div>
      </main>
    </Layout>
  );
};

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

export default Search;
