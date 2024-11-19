import { useState } from 'react';
import Question from './Question';
import Result from './Result';
import { questions } from './testData';
import './Test.css';

const Test = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));
  const [showResult, setShowResult] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (points) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = points;
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
    if (onComplete) {
      onComplete(answers.reduce((a, b) => a + b, 0));
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

  // Calculamos el progreso basado en respuestas completadas
  const progress = answers.filter(answer => answer !== 0).length;

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
            setIsComplete(false);
          }}
        >
          Volver a empezar
        </button>
      </>
    );
  }

  return (
    <div className="test-container">
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${(progress / questions.length) * 100}%` }}
        />
      </div>
      
      <div className="navigation-buttons">
        <button 
          className="navigation-button"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          ← Anterior
        </button>
        {!isComplete && (
          <button 
            className="navigation-button"
            onClick={handleNext}
            disabled={currentQuestion === questions.length - 1 || !answers[currentQuestion]}
          >
            Siguiente →
          </button>
        )}
      </div>
      
      <Question 
        data={questions[currentQuestion]}
        selectedAnswer={answers[currentQuestion]}
        onAnswer={handleAnswer}
      />

      {isComplete && (
        <button 
          className="result-button"
          onClick={handleShowResult}
        >
          Ver resultado
        </button>
      )}
    </div>
  );
};

export default Test; 