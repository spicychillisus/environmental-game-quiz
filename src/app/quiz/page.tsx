"use client"
import Navbar from "@/components/self/Navbar";
import { useState, useEffect } from "react";
import { Inter, Montserrat } from "next/font/google";
import Question from "@/entities/QuestionClass";
import QuestionType from "@/entities/QuestionType";
import QuestionDisplay from "@/entities/Question";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from 'zod';
import pool from "../../../config";

const QuizPage = () => {
    const [questionAmount , setQuestionAmount] = useState(0);
    const [currentQn, setCurrentQn] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const form = useForm();

    return (
        <div className="bg-gradient-to-r from-green-400 via-cyan-500 to-blue-300 min-h-screen w-screen">
            <Navbar />
            <div className="flex justify-center">
                
            </div>
        </div>
    )
    
}

export default QuizPage;