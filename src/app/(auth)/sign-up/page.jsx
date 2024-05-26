"use client";

import React, { useEffect } from "react";
import { Signup } from "@/features/Auth/Signup";
import { useUserSessionContext } from "../../../context/UserSessionContext"; // Adjust the import path accordingly
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const { session } = useUserSessionContext();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      // Redirect to the homepage if the user is authenticated
      router.push("/");
    }
  }, [session, router]);

  return (
    <div>
      <Signup />
    </div>
  );
};
export default SignupPage;
