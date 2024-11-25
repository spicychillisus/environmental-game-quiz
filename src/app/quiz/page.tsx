import Navbar from "@/components/self/Navbar";
import { useState, useEffect } from "react";
import { Inter, Montserrat } from "next/font/google";
import Question from "@/entities/QuestionClass";
import QuestionType from "@/entities/QuestionType";
import QuestionDisplay from "@/entities/Question";



let questions = [];

const QuizPage = () => {
    const [currentQn, setCurrentQn] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    return (
        <div>
            
        </div>
    )
    
}

export default QuizPage;