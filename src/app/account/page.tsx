"use client"
import Navbar from "@/components/self/Navbar";
import pool from "../../../config";
import { useState } from "react";

const getUser = async () => {
    
}

export default function Account() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <main>
            <Navbar />
        </main>
    )
}