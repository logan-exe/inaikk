// src/components/SignUp.tsx
"use client";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex h-screen bg-gray-200 justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className=" justify-center flex my-2">
          <Logo />
        </div>

        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="sample@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="enter password"
            />
          </div>

          <div className="flex justify-end">
            <Button>Login</Button>
          </div>
        </form>
        <div className="text-center mt-4">
          <Link href={"/signup"} className="text-blue-500">
            {` Don't have an account?`}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
