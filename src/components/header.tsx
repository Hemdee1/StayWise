import Link from "next/link";
import Logo from "./logo";
import { CarIcon, SleepIcon } from "./icons";

const Header = () => {
  return (
    <header className="max-w-full mx-auto bg-white w-fullscreen padding font-Manrope">
      <div className="relative flex items-center justify-between pt-10 pb-5">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex gap-12 ml-[7%]">
          <button className="flex items-center gap-2 primary-btn">
            <SleepIcon /> Stay
          </button>
          <button className="flex items-center gap-2 px-4 py-2 transition-all duration-500 border hover:opacity-70 rounded-xl border-primary">
            <CarIcon /> Cars
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="mr-10 transition-all duration-500 hover:opacity-70"
          >
            List your property
          </Link>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
