import Link from "next/link";
import Logo from "./logo";
import { CarIcon, SleepIcon } from "./icons";
import LoginOrUser from "./loginOrUser";

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

          <LoginOrUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
