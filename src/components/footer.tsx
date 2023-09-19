import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-fullScreen mt-40 max-w-full mx-auto text-xs md:text-base space-y-11 md:space-y-[100px] pt-11 md:pt-[100px] padding bg-[#FFEBAD]">
      <div className="flex flex-wrap justify-between gap-x-10 gap-y-10 md:gap-y-16 px-3 xl:px-[50px] 2xl:px-[100px] w-fullscreen mx-auto max-w-full">
        <div className="flex flex-col items-start gap-3">
          <h5 className="font-semibold">Countries</h5>
          <button className="transition duration-200 hover:underline">
            Regions
          </button>
          <button className="transition duration-200 hover:underline">
            City
          </button>
          <button className="transition duration-200 hover:underline">
            Hideouts
          </button>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h5 className="font-semibold">Car Rental</h5>
          <button className="transition duration-200 hover:underline">
            Hotels
          </button>
          <button className="transition duration-200 hover:underline">
            Homes
          </button>
          <button className="transition duration-200 hover:underline">
            Apartments
          </button>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h5 className="font-semibold">Discover</h5>
          <button className="transition duration-200 hover:underline">
            Reviews
          </button>
          <button className="transition duration-200 hover:underline">
            Unique Places
          </button>
          <button className="transition duration-200 hover:underline">
            Seasonal & holiday deals
          </button>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h5 className="font-semibold">Help</h5>
          <button className="transition duration-200 hover:underline">
            Careers
          </button>
          <button className="transition duration-200 hover:underline">
            FAQs
          </button>
          <button className="transition duration-200 hover:underline">
            Privacy
          </button>
        </div>
      </div>

      <div className="flex justify-between py-5 border-t border-gray-500 md:py-10 px-3 xl:px-[50px] 2xl:px-[100px]">
        <span className="font-Grotesk">
          © Staywise {new Date().getFullYear()}
        </span>
        <div className="flex gap-5 md:gap-20">
          <button>Terms of use</button>
          <button>Privacy Policy</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
