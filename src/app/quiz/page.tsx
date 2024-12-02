"use client";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

type Question = {
  question: string;
  answer: string | boolean;
  options?: string[];
  type: number;
  points: number;
  difficulty: string;
  explanation: string;
  topic: string;
  hint?: string;
};

const questions: Question[] = [
  // Add your questions here
];

export default function QuizPage() {
  const router = useRouter();
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (router.isReady) {
      const { difficulty, qnamt, topics } = router.query;

      // Convert qnamt and topics to appropriate types
      const questionAmount = parseInt(qnamt as string) || questions.length;
      const topicList = (topics as string)?.split(",") || [];

      // Filter questions
      const filtered = questions.filter((q) => {
        const matchesDifficulty = difficulty ? q.difficulty.toLowerCase() === difficulty : true;
        const matchesTopic = topicList.length > 0 ? topicList.includes(q.topic) : true;
        return matchesDifficulty && matchesTopic;
      });

      // Limit to questionAmount
      setFilteredQuestions(filtered.slice(0, questionAmount));
    }
  }, [router.isReady, router.query]);

  return (
    <div>
      <h1>Quiz Questions</h1>
      {filteredQuestions.length > 0 ? (
        filteredQuestions.map((question, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Question {index + 1}</CardTitle>
              <CardDescription>Topic: {question.topic} | Difficulty: {question.difficulty}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{question.question}</p>
              {question.options && (
                <ul>
                  {question.options.map((option, idx) => (
                    <li key={idx}>{option}</li>
                  ))}
                </ul>
              )}
              <p>Points: {question.points}</p>
            </CardContent>
          </Card>
        ))
      ) : (
        <p>No questions match the selected criteria.</p>
      )}
    </div>
  );
}
