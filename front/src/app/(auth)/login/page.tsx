import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

function login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[550px] bg-white rounded-xl px-10 py-5">
        <h1 className="text-center text-4xl md:text-4xl lg:text-9xl font-extrabold bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text">
          Clash
        </h1>
        <h2 className="text-3xl font-bold">Login</h2>
        <p>Welcome Back</p>
        <form>
          <div className="mt-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email"  placeholder="Enter your email.."></Input>
          </div>
          <div className="mt-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" placeholder="Enter your password.."></Input>
          </div>
          <div className="text-right font-bold">
          <Link href="forgot-password ">Forgot password ?</Link>
          </div>
          <div className="mt-4">
              <Button className="w-full">Submit</Button>
          </div>
        </form>
        <p className="text-center mt-1">Don't have an account ?{" "} <strong><Link href="register">Register</Link></strong> </p>
      </div>
    </div>
  );
}

export default login;
