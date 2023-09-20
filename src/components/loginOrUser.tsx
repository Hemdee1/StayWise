import useOutsideClick from "@/hooks/useClickOutside";
import { useMyStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { UserIcon } from "./icons";

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
  const { user } = useMyStore();

  const ref = useOutsideClick(() => setOpenNav(false));

  return (
    <>
      {user ? (
        <div
          ref={ref}
          className="relative flex items-center gap-2 cursor-pointer"
          onClick={() => setOpenNav(true)}
        >
          {user.image ? (
            <div className="relative grid border-2 w-14 h-14 place-content-center rounded-xl border-primary">
              <Image
                src={user.image}
                alt="user image"
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <UserIcon />
          )}
          <span>
            {user.firstName} {user.lastName}
          </span>

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

export default LoginOrUser;
