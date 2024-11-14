import Link from "next/link";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({});

let links = [
    { name: "Home", path: "/"},
    { name: "Calculator", path: "/calculator"},
]

export default function Navbar() {
    return (
        <nav className="bg-white border-gray-400 dark:bg-gray-800">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
            </div>
        </nav>
    )
}