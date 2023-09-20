import { useMyStore } from "@/store/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useMyStore();
  const route = useRouter();

  useEffect(() => {
    if (!user) {
      route.push("/auth/login");
    }
  }, [user, route]);

  return children;
};

export default ProtectedRoute;
