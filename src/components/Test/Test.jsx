import { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';
import { questions } from './testData';
import './Test.css';

const Test = ({ onComplete, onClose, onShowResult }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));
  const [showResult, setShowResult] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    if (onShowResult) {
      onShowResult(showResult);
    }
  }, [showResult, onShowResult]);

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
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResult(true);
      if (onComplete) {
        onComplete(answers.reduce((a, b) => a + b, 0));
      }
    }, 2000); // 2 segundos de "cálculo"
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

  if (isCalculating) {
    return (
      <div className="calculating-container">
        <div className="calculating-content">
          <div className="calculating-animation">
            <div className="coin-animation"></div>
          </div>
          <div className="calculating-text-container">
            <p className="calculating-text">Analizando tus respuestas...</p>
            <p className="calculating-subtext">Descubriendo tu personalidad financiera</p>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="test-container">
        <Result score={answers.reduce((a, b) => a + b, 0)} />
        <button 
          className="result-button"
          onClick={onClose}
        >
          Finalizar
        </button>
        <button 
          className="result-button ghost"
          onClick={() => {
            setCurrentQuestion(0);
            setAnswers(new Array(questions.length).fill(0));
            setShowResult(false);
            setIsComplete(false);
          }}
        >
          Repetir el test
        </button>
      </div>
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