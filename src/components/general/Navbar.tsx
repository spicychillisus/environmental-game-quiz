import Link from "next/link";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import pool from "../../../config";

const inter = Inter({});
const interBold = Inter({});

let links = [
    { name: "Home", path: "/"},
    { name: "Quiz", path: "/quiz"}
]

export default function Navbar() {
    return (
        <nav className="flex justify-center border-solid  ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 bg-white rounded-lg border-black">
                {
                    links.map((link, index) => {
                        return (
                            <Link key={index} href={link.path} className={`px-4 py-1 text-gray-800 dark:text-gray-200 ${inter.className}`}>
                                {link.name}
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
    )
}