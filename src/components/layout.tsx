import { useMyStore } from "@/store/store";
import Footer from "./footer";
import Header from "./header";
import { useEffect } from "react";
import axiosInstance from "@/API Request/axiosconfig";
import { ApartmentType } from "@/types";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { updateApartments, appartments } = useMyStore();

  // console.log(appartments);

  useEffect(() => {
    const fetchApartments = async () => {
      const appartments = localStorage.getItem("appartments");
      if (appartments) return updateApartments(JSON.parse(appartments));

      try {
        const res = await axiosInstance("/apartment");

        const appartments = res.data;

        localStorage.setItem("appartments", JSON.stringify(appartments));

        updateApartments(appartments);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApartments();
  }, [updateApartments]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
