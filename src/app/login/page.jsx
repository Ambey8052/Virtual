'use client';
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br via-green-00 to-blue-00 p-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 w-full max-w-md shadow-2xl text-center">
        
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-white mb-8 drop-shadow-lg">
          Welcome to <span className="text-pink-300">Virtual Guide</span>
        </h1>

        {/* Login Form */}
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="mt-2 w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500 text-white font-semibold py-3 rounded-xl transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/30"></div>
          <span className="text-white/80 mx-3 text-sm">or continue with</span>
          <div className="flex-1 h-px bg-white/30"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center gap-6">
          <button className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition">
            <FcGoogle size={24} />
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition">
            <FaFacebookF size={22} />
          </button>
        </div>

        {/* Footer */}
        <p className="text-white/70 text-sm mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-pink-300 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
