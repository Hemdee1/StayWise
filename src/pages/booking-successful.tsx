import React from "react";
import Layout from "@/components/layout";
import Link from "next/link";
import ProtectedRoute from "@/components/protectedRoute";

export default function BookingSuccesful() {
  return (
    <Layout>
      <ProtectedRoute>
        <div className="min-h-[60vh] grid place-content-center">
          <div className="sm:w-[617px] mx-auto mt-24 w-full px-3 sm:px-[100px] py-8 rounded-xl bg-primary/10 font-Manrope">
            <p className="mb-10 text-4xl font-semibold text-center">
              Booking Successful
            </p>

            <Link
              href="/"
              className="w-[264px] mx-auto h-[68px] border flex items-center justify-center border-borderColor bg-primary rounded-lg text-[25px] font-normal"
            >
              Go back home
            </Link>
          </div>
        </div>
      </ProtectedRoute>
    </Layout>
  );
}
