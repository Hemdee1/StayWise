import Link from "next/link";
import { useEffect, useState } from "react";
import LoginHeader from "@/components/loginHeader";

const Page = () => {
  const [pin, setPin] = useState<string[]>([]);

  useEffect(() => {
    const addPin = (e: KeyboardEvent) => {
      if (e.code.includes("Digit")) {
        if (pin.length === 4) return;

        setPin([...pin, e.key]);
      }

      if (e.code === "Backspace") {
        if (pin.length === 0) return;

        setPin((prev) => prev.slice(0, pin.length - 1));
      }

      if (e.code === "Enter") {
        // Submit the code
        console.log("submitting");
      }
    };
    window.addEventListener("keydown", addPin);

    return () => {
      window.removeEventListener("keydown", addPin);
    };
  }, [pin]);

  return (
    <section className="grid w-full min-h-screen pb-10 place-content-center padding">
      <LoginHeader />

      <div className="sm:w-[617px] mt-24 w-full px-3 sm:px-[100px] py-8 rounded-xl bg-primary/10 font-Manrope">
        <div className="text-center">
          <h1 className="mt-3 text-2xl font-bold text-center">
            Verify your email
          </h1>
          <p className="mt-4 font-medium">Enter your 4 digit pin</p>

          <div className="flex justify-center gap-8 mt-10 min-h-[50px]">
            <span className="block w-12 pb-3 text-3xl font-bold border-b-2 border-gray-400">
              {pin[0]}
            </span>
            <span className="block w-12 pb-3 text-3xl font-bold border-b-2 border-gray-400">
              {pin[1]}
            </span>
            <span className="block w-12 pb-3 text-3xl font-bold border-b-2 border-gray-400">
              {pin[2]}
            </span>
            <span className="block w-12 pb-3 text-3xl font-bold border-b-2 border-gray-400">
              {pin[3]}
            </span>
          </div>

          <button
            className={`w-full py-3 mt-10 font-semibold text-center rounded-lg bg-primary ${
              pin.length !== 4 ? "bg-opacity-60" : "bg-opacity-100"
            }`}
          >
            Verify
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;
