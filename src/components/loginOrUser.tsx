import Link from "next/link";

const LoginOrUser = () => {
  const login = false;
  return (
    <div>
      {login ? (
        <span></span>
      ) : (
        <div>
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
      )}
    </div>
  );
};

export default LoginOrUser;