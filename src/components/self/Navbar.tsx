import Link from "next/link";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({});
const interBold = Inter({});

let links = [
    { name: "Home", path: "/"},
    { name: "Quiz", path: "/quiz"},
]

export default function Navbar() {
    return (
        <nav className="border-gray-400 dark:bg-gray-800 flex justify-center">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                {
                    links.map((link, index) => {
                        return (
                            <Link key={index} href={link.path} className={`hover:text-blue-500 px-2 py-1 text-gray-800 dark:text-gray-200 ${inter.className}`}>
                                {link.name}
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
    )
}