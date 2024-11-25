// generates different types of questions
export default class Question {

    private question: String;
    private points: number;
    private answer: any;
    
    constructor(question: String, points:number, answer: any) {
        this.question = question;
        this.points = points;
    }

    public getQuestion() {
        return this.question;
    }

    public getPoints() {
        return this.points;
    }

    public getAnswer() {
        return this.answer;
    }

    


}