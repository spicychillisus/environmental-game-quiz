"use client"
import Navbar from "@/components/general/Navbar";
import { useState, useEffect } from "react";
import { Inter, Montserrat } from "next/font/google";
import Question from "@/entities/QuestionClass";
import QuestionType from "@/entities/QuestionType";
import QuestionDisplay from "@/entities/Question";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from 'zod';
import pool from "../../../config";
import { metadata } from "../layout";
import { questions, questionTypes } from "@/data/questions";

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

const QuizPage = () => {
    const [questionAmount , setQuestionAmount] = useState(0);
    const [currentQn, setCurrentQn] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const form = useForm();

    let questions = []; // stores all the questions that will be displayed

    let correctAnswers = [];
    let wrongAnswers = [];
    
    const categories = [
        "Environmental Sustainability",
    ]

    return (
        <div className="bg-white min-h-screen w-screen">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="text-center">
                    <h1 className={`${interBold.className} text-4xl`}>Environmental Quiz Game</h1>
                </div>
            </div>
        </div>
    )
    
}

export default QuizPage;