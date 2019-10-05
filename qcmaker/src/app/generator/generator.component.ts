import { Component, OnInit } from '@angular/core';
import { Qcm } from '../class/qcm';
import { Question } from '../class/question';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  private qcmGenerated: Qcm;
  public currentQuestion: string;
  public curentAnswer: string;
  constructor() {
    this.qcmGenerated.questions = [];
  }

  ngOnInit() {
  }
  addQuestion() {
    this.qcmGenerated.questions.push(new Question(this.currentQuestion));
    this.currentQuestion = '';
  }
  addAnswer(num: number) {
    this.qcmGenerated.questions[num].answers.push(this.curentAnswer);
    this.curentAnswer = '';
  }
}
