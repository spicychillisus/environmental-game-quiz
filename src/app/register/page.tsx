import { useState } from "react";
import Navbar from "@/components/self/Navbar";
import pool from "../../../config";
import { Form, FormDescription, FormField, FormItem, FormMessage, FormLabel, FormControl } from "@/components/ui/form";
import { Inter } from "next/font/google";
import { Input } from "@/components/ui/input";



export default function Register() {

    const [username, setUsername] = useState("");
    const [pin, setPin] = useState(0);

    async function registerUser(name: string, pin: number) {

    }

    return (
        <></>
    )
}