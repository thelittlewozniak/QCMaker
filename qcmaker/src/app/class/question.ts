export class Question {
    answers: string[];
    question: string;
    constructor(quest: string) {
        this.question = quest;
        this.answers = [];
    }
}
