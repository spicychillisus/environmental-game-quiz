import Question from "./QuestionClass";
import QuestionType from "./QuestionType";
import { Inter } from "next/font/google";

type QuestionProps = {
    question: Question;
}

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


const QuestionDisplay = () => {
    return (
        <div>
            <header className={`${interBold.className}`}>Question</header>
        </div>
    )
}

export default QuestionDisplay;