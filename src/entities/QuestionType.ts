import { AnyTxtRecord } from "dns";
import Question from "./QuestionClass";

export default class QuestionType extends Question {

    private options: any[];
    private type: String;
    private questionFormat: any;

    constructor(question: String, points:number, answer: any, options: any[], type: String) {
        super(question, points, answer);
        this.options = options;
        this.type = type;
    }

    public getQuestionType() {
        return this.type;
    }

    private generateRandomQuestionOptions() {
        // get the type of question first
        let qnType = this.getQuestionType();
    }

    public createQuestionOptions(answer: any) {
        // create the question options
        // make sure to put the answer inside also

    }
}