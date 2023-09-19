import Link from "next/link";
import Logo from "./logo";

const LoginHeader = () => {
  return (
    <header className="fixed top-0 left-0 z-10 flex items-center w-full h-20 bg-white px-11">
      <div className="max-w-full mx-auto w-fullscreen">
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </header>
  );
};

export default LoginHeader;
