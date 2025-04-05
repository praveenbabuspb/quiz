export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface Subject {
  id: string;
  name: string;
  questions: Question[];
}

export interface ClassLevel {
  id: string;
  name: string;
  subjects: Subject[];
}

export interface QuizState {
  currentClass: string | null;
  currentSubject: string | null;
  currentQuestion: Question | null;
  score: number;
  totalAnswered: number;
  showFeedback: boolean;
  selectedAnswer: string | null;
  isCorrect: boolean;
  shownQuestions: Set<string>;
  isComplete: boolean;
}
