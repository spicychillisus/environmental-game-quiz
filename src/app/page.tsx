"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Inter, Titillium_Web } from "next/font/google";
import { questions, questionTypes, topics } from "@/data/questions";
import { Button, buttonVariants } from "@/components/ui/button";
import Navbar from "@/components/general/Navbar";
import { FaPlayCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


const inter = Inter({
  weight: "400",
  style: "normal",
  subsets: ["latin"]
})

const interBold = Inter({
  weight: "600",
  style: "normal",
  subsets: ["latin"]
})

const tw = Titillium_Web({
  weight: "600",
  style: "normal",
  subsets: ["latin"]
})

export default function Home() {
  return (
    <div className="bg-white min-h-screen w-screen">
      <Navbar />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="grid grid-cols-2 mb-20 mt-20" id="header">
            <div>
              <h1 className={`${tw.className} text-4xl font-bold`}>
                  Environmental Learning, Made Fun
              </h1>
              <p className={`${inter.className} text-sm text-gray-500`}>
                This game quiz brings fun into learning about the environment and spreading awareness
              </p>
              <Link href={'/quiz'}>
                <Button variant={`outline`} className="mt-3">
                  <FaPlayCircle />Play Now
                </Button>
              </Link>
            </div>
          </div>
            <div className="">
              <h2 className={`text-center ${tw.className} text-3xl`}>How We Work</h2>
              <p className={`text-center ${inter.className} text-sm text-gray-700`}>Learn from the different environmental categories below</p>
              {
                topics.map((topic, index) => {
                  return (
                    <Card key={index} className="mt-5 w-1/2 mx-auto">
                      <CardHeader>
                        <CardTitle>{topic.topic}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{topic.description}</CardDescription>
                      </CardContent>
                    </Card>
                  )
                })
              }
            </div>
      </div>

    </div>
  );
}