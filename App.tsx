import React, { useState, useCallback } from 'react';
import { TopicSelector } from './components/TopicSelector';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizState, Question } from './types';
import { quizData } from './data/questions';
import { Brain, RotateCcw } from 'lucide-react';

function getRandomQuestion(classId: string, subjectId: string, shownQuestions: Set<string>): Question | null {
  const classLevel = quizData.classes.find((c) => c.id === classId);
  if (!classLevel) throw new Error('Class not found');
  
  const subject = classLevel.subjects.find((s) => s.id === subjectId);
  if (!subject) throw new Error('Subject not found');
  
  const availableQuestions = subject.questions.filter(q => !shownQuestions.has(q.id));
  if (availableQuestions.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  return availableQuestions[randomIndex];
}

function App() {
  const [state, setState] = useState<QuizState>({
    currentClass: null,
    currentSubject: null,
    currentQuestion: null,
    score: 0,
    totalAnswered: 0,
    showFeedback: false,
    selectedAnswer: null,
    isCorrect: false,
    shownQuestions: new Set<string>(),
    isComplete: false
  });

  const handleSubjectSelect = useCallback((classId: string, subjectId: string) => {
    setState({
      currentClass: classId,
      currentSubject: subjectId,
      currentQuestion: getRandomQuestion(classId, subjectId, new Set<string>()),
      score: 0,
      totalAnswered: 0,
      showFeedback: false,
      selectedAnswer: null,
      isCorrect: false,
      shownQuestions: new Set<string>(),
      isComplete: false
    });
  }, []);

  const handleAnswerSelect = useCallback((answer: string) => {
    if (state.currentQuestion) {
      const isCorrect = answer === state.currentQuestion.correctAnswer;
      setState(prev => ({
        ...prev,
        selectedAnswer: answer,
        showFeedback: true,
        isCorrect,
      }));
    }
  }, [state.currentQuestion]);

  const handleNextQuestion = useCallback(() => {
    if (state.currentClass && state.currentSubject && state.selectedAnswer && state.currentQuestion) {
      const newShownQuestions = new Set(state.shownQuestions);
      newShownQuestions.add(state.currentQuestion.id);
      
      const nextQuestion = getRandomQuestion(state.currentClass, state.currentSubject, newShownQuestions);
      const isComplete = !nextQuestion;
      
      setState(prev => ({
        ...prev,
        currentQuestion: nextQuestion,
        showFeedback: false,
        selectedAnswer: null,
        score: prev.score + (prev.isCorrect ? 1 : 0),
        totalAnswered: prev.totalAnswered + 1,
        shownQuestions: newShownQuestions,
        isComplete
      }));
    }
  }, [state.currentClass, state.currentSubject, state.selectedAnswer, state.currentQuestion]);

  const handleReset = useCallback(() => {
    if (state.currentClass && state.currentSubject) {
      handleSubjectSelect(state.currentClass, state.currentSubject);
    }
  }, [state.currentClass, state.currentSubject, handleSubjectSelect]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-12 h-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Entrance Exam Prep</h1>
          <p className="text-lg text-gray-600">Master your JEE and NEET preparation with targeted practice!</p>
        </div>

        {!state.currentClass ? (
          <TopicSelector classes={quizData.classes} onSelectSubject={handleSubjectSelect} />
        ) : state.isComplete ? (
          <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Final Score: {state.score} out of {state.totalAnswered} ({Math.round((state.score / state.totalAnswered) * 100)}%)
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleReset}
                className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg 
                         transition-colors duration-200 font-medium flex items-center"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Try Again
              </button>
              <button
                onClick={() => setState(prev => ({ ...prev, currentClass: null, currentSubject: null }))}
                className="py-3 px-6 bg-gray-600 hover:bg-gray-700 text-white rounded-lg 
                         transition-colors duration-200 font-medium"
              >
                Choose Another Subject
              </button>
            </div>
          </div>
        ) : state.currentQuestion ? (
          <QuizQuestion
            question={state.currentQuestion}
            selectedAnswer={state.selectedAnswer}
            showFeedback={state.showFeedback}
            isCorrect={state.isCorrect}
            onSelectAnswer={handleAnswerSelect}
            onNextQuestion={handleNextQuestion}
            score={state.score}
            totalAnswered={state.totalAnswered}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
