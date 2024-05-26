"use client";

// import React from "react";
// // import { Login } from "@/features/Auth/Login";

// const page = () => {
//   return (
//     <div>
//       asd
//     </div>
//   );
// };

// export default page;

import React, { useEffect } from "react";
// import GoogleButton from "@/features/Auth/GoogleButton";
import { Login } from "@/features/Auth/Login";
import { useUserSessionContext } from "../../../context/UserSessionContext"; // Adjust the import path accordingly
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { session } = useUserSessionContext();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      // Redirect to the homepage if the user is authenticated
      router.push("/");
    }
  }, [session, router]);

  // Show a loading state while checking authentication status
  if (session === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Login />
    </div>
  );
};
export default LoginPage;
