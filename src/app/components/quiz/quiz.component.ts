import { Component } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  selectedAnswer: number | null = null;
  score: number = 0;
  addingQuestion: boolean = false;
  newQuestion: Question = {
    text: '',
    options: ['', '', '', ''],
    correctAnswer: 0
  };

  constructor() {
    // write your logic here
  }

  loadQuestions() {
    this.questions = [
      {
        text: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        correctAnswer: 0
      },
      {
        text: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Earth', 'Jupiter'],
        correctAnswer: 0
      },
      {
        text: 'What is the largest mammal?',
        options: ['Elephant', 'Giraffe', 'Blue Whale', 'Lion'],
        correctAnswer: 2
      },
    ];
  }

  selectAnswer(index: number) {
    // write your logic here
  }

  nextQuestion() {
    // write your logic here
  }

  previousQuestion() {
    // write your logic here
  }

  submitQuiz() {
    // write your logic here
  }

  resetQuiz() {
    // write your logic here
  }

  showAddQuestionForm() {
    // write your logic here
  }

  addNewQuestion() {
    // write your logic here
  }

  isAddButtonDisabled(): boolean {
    // write your logic here
    return false;
  }

  cancelAddQuestionForm() {
    // write your logic here
  }
}
