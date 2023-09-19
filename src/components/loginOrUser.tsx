import useOutsideClick from "@/hooks/useClickOutside";
import Link from "next/link";
import { useState } from "react";

const userLinks = [
  {
    title: "Profile",
    // link: "/profile",
    link: "#",
  },
  {
    title: "Payment",
    // link: "/payment",
    link: "#",
  },
  {
    title: "Messages",
    // link: "/messages",
    link: "#",
  },
  {
    title: "Saved Apartment",
    // link: "/saved-apartment",
    link: "#",
  },
  {
    title: "Bookings",
    // link: "/bookings",
    link: "#",
  },
  {
    title: "Ratings & reviews",
    // link: "/ratings",
    link: "#",
  },
  {
    title: "Customer support",
    // link: "/customer-support",
    link: "#",
  },
  {
    title: "Referrals",
    // link: "/referrals",
    link: "#",
  },
  {
    title: "Language settings",
    // link: "/language",
    link: "#",
  },
];

const LoginOrUser = () => {
  const [openNav, setOpenNav] = useState(false);

  const ref = useOutsideClick(() => setOpenNav(false));

  const login = true;
  return (
    <>
      {login ? (
        <div
          ref={ref}
          className="relative flex items-center gap-2 cursor-pointer"
          onClick={() => setOpenNav(true)}
        >
          {/* <div className="grid border-2 w-14 h-14 place-content-center rounded-xl border-primary"></div> */}
          <UserIcon />
          <span>Ifeoluwa Alao</span>

          {/* dropdown */}
          <div
            className={`absolute right-0 w-[300px] p-8 rounded-2xl bg-white space-y-5 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.15)] z-30 font-medium transition-all duration-500 ${
              openNav
                ? "opacity-100 visible top-16"
                : "top-0 opacity-0 invisible"
            }`}
          >
            {userLinks.map((link, index) => (
              <Link key={index} href={link.link} className="block">
                {link.title}
              </Link>
            ))}
            <button className="text-[#E33629]">Logout</button>
          </div>
        </div>
      ) : (
        <>
          <Link
            href="/auth/login"
            className="block transition-all duration-500 hover:opacity-70"
          >
            Log In
          </Link>
          <Link
            href="/auth/register"
            className="flex items-center gap-2 px-4 py-2 transition-all duration-500 border rounded-xl border-primary hover:bg-primary"
          >
            Sign Up
          </Link>
        </>
      )}
    </>
  );
};

const UserIcon = () => (
  <svg
    width="56"
    height="50"
    viewBox="0 0 56 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="54"
      height="48"
      rx="11"
      fill="black"
      stroke="#FEB737"
      strokeWidth="2"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.0001 14.25C26.7403 14.25 25.5321 14.7504 24.6413 15.6412C23.7505 16.532 23.2501 17.7402 23.2501 19C23.2501 20.2598 23.7505 21.468 24.6413 22.3588C25.5321 23.2496 26.7403 23.75 28.0001 23.75C29.2598 23.75 30.468 23.2496 31.3588 22.3588C32.2496 21.468 32.7501 20.2598 32.7501 19C32.7501 17.7402 32.2496 16.532 31.3588 15.6412C30.468 14.7504 29.2598 14.25 28.0001 14.25ZM24.7501 19C24.7501 18.138 25.0925 17.3114 25.702 16.7019C26.3115 16.0924 27.1381 15.75 28.0001 15.75C28.862 15.75 29.6887 16.0924 30.2982 16.7019C30.9076 17.3114 31.2501 18.138 31.2501 19C31.2501 19.862 30.9076 20.6886 30.2982 21.2981C29.6887 21.9076 28.862 22.25 28.0001 22.25C27.1381 22.25 26.3115 21.9076 25.702 21.2981C25.0925 20.6886 24.7501 19.862 24.7501 19ZM28.0001 25.25C25.6871 25.25 23.5551 25.776 21.9761 26.664C20.4201 27.54 19.2501 28.866 19.2501 30.5V30.602C19.2491 31.764 19.2481 33.222 20.5271 34.264C21.1561 34.776 22.0371 35.141 23.2271 35.381C24.4191 35.623 25.9741 35.75 28.0001 35.75C30.0261 35.75 31.5801 35.623 32.7741 35.381C33.9641 35.141 34.8441 34.776 35.4741 34.264C36.7531 33.222 36.7511 31.764 36.7501 30.602V30.5C36.7501 28.866 35.5801 27.54 34.0251 26.664C32.4451 25.776 30.3141 25.25 28.0001 25.25ZM20.7501 30.5C20.7501 29.649 21.3721 28.725 22.7111 27.972C24.0271 27.232 25.8951 26.75 28.0011 26.75C30.1051 26.75 31.9731 27.232 33.2891 27.972C34.6291 28.725 35.2501 29.649 35.2501 30.5C35.2501 31.808 35.2101 32.544 34.5261 33.1C34.1561 33.402 33.5361 33.697 32.4761 33.911C31.4191 34.125 29.9741 34.25 28.0001 34.25C26.0261 34.25 24.5801 34.125 23.5241 33.911C22.4641 33.697 21.8441 33.402 21.4741 33.101C20.7901 32.544 20.7501 31.808 20.7501 30.5Z"
      fill="white"
    />
  </svg>
);

export default LoginOrUser;
