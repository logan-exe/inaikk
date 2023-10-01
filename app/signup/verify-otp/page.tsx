// src/components/OTPVerification.tsx
"use client";
import { Button } from "@/components/ui/button";
// src/components/OTPVerification.tsx

import React, { useState } from "react";

const OTPVerification: React.FC = () => {
  const [otp, setOtp] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("OTP:", otp);
    // Typically validate the OTP with your server here
  };

  return (
    <div className="flex h-screen bg-gray-200 text-black justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Verification</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Enter OTP
            </label>
            <input
              type="text"
              maxLength={6} // assuming a 6-digit OTP
              className="mt-1 p-2 w-full border rounded-md text-black"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <Button>Verify</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
