import useOutsideClick from "@/hooks/useClickOutside";
import { useMyStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { UserIcon } from "./icons";
import axiosInstance from "@/API Request/axiosconfig";
import { useRouter } from "next/router";

const userLinks = [
  {
    title: "Profile",
    link: "/profile",
  },
  {
    title: "Messages",
    link: "/message/id",
  },
  {
    title: "Saved Apartment",
    link: "/saved",
  },
  {
    title: "Bookings",
    link: "/bookings",
  },
  {
    title: "Ratings & reviews",
    link: "/rating-and-review",
  },
  {
    title: "Customer support",
    link: "/custommer-support",
  },
  {
    title: "Referrals",
    link: "/referals",
  },
];

const LoginOrUser = () => {
  const router = useRouter();

  const [openNav, setOpenNav] = useState(false);
  const { user, updateUser } = useMyStore();

  const ref = useOutsideClick(() => setOpenNav(false));

  const logout = async () => {
    try {
      const res = axiosInstance.post("/user/logout");

      updateUser(null);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user ? (
        <div
          ref={ref}
          className="relative flex items-center gap-2 cursor-pointer"
          onClick={() => setOpenNav(true)}
        >
          {user.image ? (
            <div className="relative grid border-2 overflow-clip w-14 h-14 place-content-center rounded-xl border-primary">
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
            <button className="text-[#E33629]" onClick={logout}>
              Logout
            </button>
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
