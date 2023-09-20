import ApartmentBox from "@/components/apartmentBox";
import { LeftIcon, RightIcon } from "@/components/icons";
import Layout from "@/components/layout";
import SearchBox from "@/components/searchBox";
import { useMyStore } from "@/store/store";
import { ApartmentType } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const { appartments } = useMyStore();

  const [exploredApartments, setExploredApartments] = useState<ApartmentType[]>(
    []
  );

  const title = router.query.location ?? "Your Area";

  useEffect(() => {
    const { location } = router.query;
    const stringLocation = location as string;

    if (!location) {
      return setExploredApartments(appartments);
    }

    setExploredApartments(
      appartments.filter(
        (app) =>
          app.location.city.toLowerCase() === stringLocation.toLowerCase()
      )
    );
  }, [router.query, appartments]);

  return (
    <Layout>
      <main className="max-w-full mx-auto mt-10 w-fullscreen padding">
        <div className="w-full min-h-[230px] bg-[#543786] rounded-3xl text-center pt-11">
          <span className="text-4xl font-semibold text-white capitalize">
            Popular places in {title}
          </span>
        </div>
        <SearchBox />

        <div className="mt-20 w-[80%] mx-auto">
          <ApartmentBox data={exploredApartments} />
        </div>
        <div className="flex justify-center gap-20 mt-20">
          <button className="w-[30px] h-[30px] scale-125 grid place-content-center rounded-full bg-primary">
            <LeftIcon />
          </button>
          <button className="w-[30px] h-[30px] scale-125 grid place-content-center rounded-full bg-primary">
            <RightIcon />
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default Page;
