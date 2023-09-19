import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import LoginHeader from "@/components/loginHeader";
import axiosInstance from "@/API Request/axiosconfig";
import { useMyStore } from "@/store/store";
import { isAxiosError } from "axios";
import { useRouter } from "next/router";

const Page = () => {
  const { email, updateEmail } = useMyStore();
  const router = useRouter();

  const [pin, setPin] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(email);

  const verifyEmail = useCallback(async () => {
    setError("");
    setLoading(true);
    try {
      const res = await axiosInstance("/emailVerification/verifyEmail", {
        method: "post",
        data: {
          email,
          otp: pin.join(""),
        },
      });

      router.push("/auth/email-verified");
    } catch (error) {
      if (isAxiosError(error)) {
        const err = error.response?.data;
        setError(err);
        setPin([]);
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  }, [email, pin, router]);

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
        if (pin.length !== 4) return setError("Pin is not completed");

        // Submit the code
        verifyEmail();
      }
    };
    window.addEventListener("keydown", addPin);

    return () => {
      window.removeEventListener("keydown", addPin);
    };
  }, [pin, verifyEmail]);

  return (
    <section className="grid w-full min-h-screen pb-10 place-content-center padding">
      <LoginHeader />

      <div className="sm:w-[617px] mt-24 w-full px-3 sm:px-[100px] py-8 rounded-xl bg-primary/10 font-Manrope">
        <div className="text-center">
          <h1
            className="mt-3 text-2xl font-bold text-center"
            // onClick={() => updateEmail("sanusi5110@gmail.com")}
          >
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

          <div className="mt-10 ">
            <p className="text-center text-red-600 ">{error}</p>
            <button
              className={`w-full py-3 mt-2 font-semibold text-center rounded-lg bg-primary ${
                pin.length !== 4 ? "bg-opacity-60" : "bg-opacity-100"
              }`}
              disabled={loading || pin.length !== 4}
              onClick={verifyEmail}
            >
              {loading ? "Verifying...." : "Verify"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
