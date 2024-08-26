"use client"
import Register from "@/components/auth/Register";
import Link from "next/link";
import React from "react";
import {useFormState} from "react-dom"

function register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[550px] bg-white rounded-xl px-10 py-5">
        <h1 className="text-center text-4xl md:text-4xl lg:text-9xl font-extrabold bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text">
          Clash
        </h1>
        <h2 className="text-3xl font-bold">Register</h2>
        <p>Welcome to clash</p>
        <Register></Register>
        <p className="text-center mt-1">Already have an account ?{" "} <strong><Link href="login">Login</Link></strong> </p>
      </div>
    </div>
  );
}

export default register;
