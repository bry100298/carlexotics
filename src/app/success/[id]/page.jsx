"use server";
import { orderedMail } from "@/actions/order";
import Order from "@/models/Order";
import React from "react";

const Success = async ({ params }) => {
  const updateEmail = await orderedMail(params.id);
  return (
    <div className="grid items-center justify-center h-[90vh]">
      {updateEmail && (
        <div className="flex justify-center items-center gap-10 flex-col">
          <img src="https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fsuccess.png?alt=media&token=69821ad7-9889-4588-8c32-85c73789ea41" className="w-40 h-40" />
          <h1 className="text-4xl text-green-500">Successful payment</h1>
        </div>
      )}
    </div>
  );
};

export default Success;