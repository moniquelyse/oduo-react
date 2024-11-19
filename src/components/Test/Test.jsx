import { useState } from 'react';
import Question from './Question';
import Result from './Result';
import { questions } from './testData';
import './Test.css';

const Test = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (points) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = points;
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      if (onComplete) {
        onComplete(newAnswers.reduce((a, b) => a + b, 0));
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if (showResult) {
    return (
      <>
        <Result score={answers.reduce((a, b) => a + b, 0)} />
        <button 
          className="navigation-button restart"
          onClick={() => {
            setCurrentQuestion(0);
            setAnswers(new Array(questions.length).fill(0));
            setShowResult(false);
          }}
        >
          Volver a empezar
        </button>
      </>
    );
  }

  return (
    <div className="test-container">
      <div className="test-progress">
        Pregunta {currentQuestion + 1} de {questions.length}
      </div>
      
      <Question 
        data={questions[currentQuestion]}
        selectedAnswer={answers[currentQuestion]}
        onAnswer={handleAnswer}
      />

      <div className="navigation-buttons">
        <button 
          className="navigation-button"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          ← Anterior
        </button>
        <button 
          className="navigation-button"
          onClick={handleNext}
          disabled={currentQuestion === questions.length - 1 || !answers[currentQuestion]}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
};

export default Test; 