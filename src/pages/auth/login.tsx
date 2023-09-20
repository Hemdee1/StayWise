import Link from "next/link";
import Logo from "../../components/logo";
import { EyeIcon, FbIcon, GoogleIcon } from "../../components/icons";
import { FormEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import LoginHeader from "@/components/loginHeader";
import axiosInstance from "@/API Request/axiosconfig";
import { isAxiosError } from "axios";
import { useMyStore } from "@/store/store";

type formType = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const { updateEmail, updateUser } = useMyStore();

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<formType>();

  const onSubmit: SubmitHandler<formType> = async (data) => {
    setError("");

    try {
      const res = await axiosInstance("/user/login", {
        method: "POST",
        data,
      });

      updateUser(res.data);
      router.push("/");
    } catch (error) {
      if (isAxiosError(error)) {
        const err = error.response?.data;

        // if user has not verify email
        if (err?.email) {
          updateEmail(data.email);
          return router.push("/auth/verify-email");
        }

        setError(err);
        console.log(err);
      }
    }
  };

  return (
    <section className="grid min-h-screen pb-10 place-content-center padding">
      <LoginHeader />

      <div className="sm:w-[617px] mt-24 max-w-full px-3 sm:px-[100px] py-8 rounded-xl bg-primary/10 font-Manrope">
        <h1 className="py-3 mb-5 text-2xl font-bold text-center">
          Log in your account
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-base font-semibold sm:text-lg text-[#1F1C23]"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg"
              required
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-base font-semibold sm:text-lg text-[#1F1C23]"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: true })}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg"
                required
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute -translate-y-1/2 top-1/2 right-3"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <EyeIcon />
              </button>
            </div>
          </div>

          <button
            className="w-full py-3 font-semibold text-center rounded-lg bg-primary"
            disabled={isSubmitting}
          >
            {!isSubmitting ? "Login" : "Please wait...."}
          </button>

          <p className="text-center text-red-500 -translate-y-5">{error}</p>

          <span className="text-center font-medium text-[#1F1C23] relative w-full block">
            or
          </span>

          <button
            type="button"
            className="flex justify-center w-full gap-5 py-3 font-semibold text-center border border-gray-400 rounded-lg"
          >
            <GoogleIcon />
            Continue with Google
          </button>
          <button
            type="button"
            className="flex justify-center w-full gap-5 py-3 font-semibold text-center border border-gray-400 rounded-lg"
          >
            <FbIcon />
            Continue with Facebook
          </button>
        </form>

        <p className="pt-5 text-center">
          New on our platform?{" "}
          <Link href="/auth/register" className="font-semibold text-primary">
            Create an account
          </Link>
        </p>

        <p className="pt-16 text-center">
          By signing in or creating an account, you agree with our{" "}
          <button className="text-primary">Terms & conditions</button> and{" "}
          <button className="text-primary">Privacy statement</button>
        </p>
      </div>
    </section>
  );
};

export default Login;
