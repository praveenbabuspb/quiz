import React from 'react';
import { Question } from '../types';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: string | null;
  showFeedback: boolean;
  isCorrect: boolean;
  onSelectAnswer: (answer: string) => void;
  onNextQuestion: () => void;
  score: number;
  totalAnswered: number;
}

export function QuizQuestion({
  question,
  selectedAnswer,
  showFeedback,
  isCorrect,
  onSelectAnswer,
  onNextQuestion,
  score,
  totalAnswered,
}: QuizQuestionProps) {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-500">
            Score: {score}/{totalAnswered}
          </span>
          <span className="text-sm font-medium text-gray-500">
            {Math.round((score / Math.max(totalAnswered, 1)) * 100)}%
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{question.text}</h3>
      </div>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => !showFeedback && onSelectAnswer(option)}
            disabled={showFeedback}
            className={`w-full p-4 rounded-lg transition-colors duration-200 text-left
              ${
                showFeedback
                  ? option === question.correctAnswer
                    ? 'bg-green-100 text-green-800'
                    : option === selectedAnswer
                    ? 'bg-red-100 text-red-800'
                    : 'bg-gray-50 text-gray-800'
                  : selectedAnswer === option
                  ? 'bg-indigo-100 text-indigo-800'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
              }`}
          >
            {option}
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className="mt-6">
          <div className={`flex items-center ${isCorrect ? 'text-green-600' : 'text-red-600'} mb-4`}>
            {isCorrect ? (
              <CheckCircle className="w-6 h-6 mr-2" />
            ) : (
              <XCircle className="w-6 h-6 mr-2" />
            )}
            <span className="font-medium">
              {isCorrect ? 'Correct!' : `Incorrect. The correct answer is: ${question.correctAnswer}`}
            </span>
          </div>
          <button
            onClick={onNextQuestion}
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg 
                     transition-colors duration-200 font-medium"
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}