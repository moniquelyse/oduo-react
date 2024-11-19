import { useState } from 'react';
import Question from './Question';
import Result from './Result';
import { questions } from './testData';
import './Test.css';

const Test = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (points) => {
    setScore(score + points);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      if (onComplete) {
        onComplete(score + points);
      }
    }
  };

  if (showResult) {
    return <Result score={score} totalQuestions={questions.length} />;
  }

  return (
    <div className="test-container">
      <div className="test-progress">
        Pregunta {currentQuestion + 1} de {questions.length}
      </div>
      
      <Question 
        data={questions[currentQuestion]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Test; 