import Question from "./QuestionClass";

export default class QuestionType extends Question {

    private options: any[];
    private type: String;

    constructor(question: String, points:number, answer: any, options: any[], type: String) {
        super(question, points, answer);
        this.options = options;
        this.type = type;
    }

    private numberRandomiser(): number {
        return Math.floor(Math.random() * 10);

    }

    public getQuestionType() {
        return this.type;
    }

    public createQuestionOptions(answer: any) {
        // create the question options based on the question type
        // make sure to put the answer inside also
        let qnType = this.getQuestionType();
        
        switch(qnType) {
            case "multiple_choice":
                break;
            case "true_false":
                break;
            case "open_ended":
                break;
            case "checkboxes":
                this.generateCheckboxOptions(2, answer);
                break;

        }
    }

    private generateRandomOptions() {
        return ""
    }   

    private generateCheckboxOptions(amount: number, answer: any) {
        let options = this.options;
        let wrongOption = this.generateRandomOptions()

        // 1 = true, 0 = false

        const trueOption = {
            // this will be associated with the answer
            value: 1,
            option: answer
        }

        const falseOption = {
            value: 0,
            option: wrongOption
        }

        if (amount = 2) {
            options.push(trueOption);
            options.push(falseOption);
        } 
        // or else run for loop to generate the options
        // it is randomised, so even i wouldn't know the answer
        for (let i = 0; i < amount; i++) {

        }
    }

    public showOptions() {
        return this.options;
    }
}