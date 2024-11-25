"use client";

import Navbar from "@/components/self/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({});

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-green-400 via-cyan-500 to-blue-300 min-h-screen w-screen">
      <Navbar />
      <h1>Home</h1>
    </div>
  );
}