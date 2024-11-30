import Question from "./QuestionClass";

/**
 * Different question types generates different types of options and content
 */
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
        
        /**
         * case 1: multiple choise
         * case 2: true/false
         * case 3: open ended
         * case 4: checkboxes
         */
        switch(qnType.toString()) {
            case "1":
                this.generateMultipleChoiceOptions(answer);
                break;
            case "2":
                break;
            case "3":
                break;
            case "4":
                this.generateCheckboxOptions(2, answer);
                break;

        }
    }

    private generateRandomOptions() {
        return ""
    }
    
    private generateMultipleChoiceOptions(answer: any) {
        let amountOfOptions = this.numberRandomiser();
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
            this.showOptions();
        } 
        // or else run for loop to generate the options
        // it is randomised, so even i wouldn't know the answer
        for (let i = 0; i < amount; i++) {

        }
    }

    private showOptions() {
        return this.options;
    }
}