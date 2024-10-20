"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import loginImage from "@/images/image.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import { Poppins, Roboto } from "next/font/google";
import { loginAction } from "@/app/actions/loginAction";
import { toast } from "sonner";
import { Github, Mail } from "lucide-react";
import { googleLogin } from "@/app/actions/googleLogin";
import { githubLogin } from "@/app/actions/githubLogin";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
});

const LoginCredentials = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await loginAction(new FormData(e.currentTarget));
      toast.success("Logged in successfully!"); 
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid credentials"); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4 ${poppins.variable} ${roboto.variable} font-sans`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full flex"
      >
        <div className="w-1/2 hidden md:block relative">
          <Image
            alt="Login image"
            src={loginImage}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 transform hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-indigo-900 opacity-20 hover:opacity-30 transition-opacity duration-300"></div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-2 font-poppins">
              Welcome Back
            </h1>
            <p className="text-purple-600 font-roboto">
              Log in to continue your journey with us.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <LabelInputContainer>
                <Label htmlFor="email" className="text-indigo-700">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  type="email"
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-purple-500 font-roboto"
                />
              </LabelInputContainer>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <LabelInputContainer>
                <Label htmlFor="password" className="text-indigo-700">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-purple-500 font-roboto"
                />
              </LabelInputContainer>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md py-3 font-medium transition-all duration-200 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 relative overflow-hidden font-poppins"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                  className="absolute left-0 top-0 h-full bg-indigo-800"
                />
              ) : null}
              <span className="relative z-10">
                {isLoading ? "Logging In..." : "Log In"}
              </span>
              <BottomGradient />
            </motion.button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-between space-x-4">
              <form action={googleLogin}> 
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Mail className="w-5 h-5 mr-2 text-red-500" />
                Google
              </motion.button>
              </form>
              <form action={githubLogin}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </motion.button>
              </form>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-indigo-600 font-roboto">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-purple-600 hover:underline font-semibold"
              >
                Sign Up
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginCredentials;

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      <span className="absolute inset-x-10 -bottom-px mx-auto h-px w-1/2 blur-sm bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col space-y-2", className)}>{children}</div>;
};