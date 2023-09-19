import LoginHeader from "@/components/loginHeader";
import Link from "next/link";

const Page = () => {
  return (
    <section className="grid w-full min-h-screen pb-10 place-content-center padding">
      <LoginHeader />

      <div className="sm:w-[617px] mt-24 w-full px-3 sm:px-[100px] py-8 rounded-xl bg-primary/10 font-Manrope">
        <div className="grid w-full place-content-center">
          <MessageIcon />
        </div>
        <div className="text-center">
          <h1 className="py-3 mb-5 text-2xl font-bold text-center">
            Congratulation
          </h1>
          <p className="mt-2 font-medium">
            Your email has been verified successfully.
          </p>

          <Link href="/auth/login">
            <button className="w-full py-3 mt-10 font-semibold text-center rounded-lg bg-primary">
              Go to Login
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const MessageIcon = () => (
  <svg
    width="109"
    height="108"
    viewBox="0 0 109 108"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="54.5547" cy="54" r="54" fill="#FFF9ED" />
    <path
      d="M35.4781 73.0762C34.1666 73.0762 33.0434 72.6088 32.1087 71.6741C31.174 70.7393 30.7074 69.617 30.709 68.3071V39.6927C30.709 38.3812 31.1764 37.258 32.1111 36.3233C33.0458 35.3886 34.1682 34.922 35.4781 34.9236H73.6306C74.9421 34.9236 76.0652 35.391 77 36.3257C77.9347 37.2604 78.4013 38.3828 78.3997 39.6927V68.3071C78.3997 69.6186 77.9323 70.7417 76.9976 71.6764C76.0629 72.6112 74.9405 73.0778 73.6306 73.0762H35.4781ZM54.5543 55.9671C54.7531 55.9671 54.9621 55.9369 55.1815 55.8765C55.4009 55.8161 55.6091 55.7271 55.8062 55.6094L72.6768 45.0579C72.9948 44.8592 73.2332 44.6104 73.3922 44.3115C73.5511 44.0126 73.6306 43.6852 73.6306 43.3291C73.6306 42.5342 73.2928 41.9381 72.6172 41.5407C71.9416 41.1433 71.2461 41.1631 70.5307 41.6003L54.5543 51.6153L38.578 41.6003C37.8626 41.1631 37.1671 41.1536 36.4915 41.5717C35.8159 41.9898 35.4781 42.5756 35.4781 43.3291C35.4781 43.7265 35.5575 44.0746 35.7165 44.3735C35.8755 44.6724 36.1139 44.9005 36.4319 45.0579L53.3025 55.6094C53.5012 55.7287 53.7102 55.8185 53.9296 55.8789C54.149 55.9393 54.3572 55.9687 54.5543 55.9671Z"
      fill="#FEB737"
    />
    <circle cx="79.2318" cy="34.9236" r="5.25035" fill="#E33629" />
  </svg>
);

export default Page;
