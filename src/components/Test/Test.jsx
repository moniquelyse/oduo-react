import { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';
import { questions } from './testData';
import './Test.css';
import { advanceStage, saveTestResult, getTestResult, getCurrentStage } from '../../utils/progress';
import LeadForm from '../LeadForm/LeadForm';

const Test = ({ onClose, onShowResult }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));
  const [showResult, setShowResult] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [userName, setUserName] = useState('');
  const [isFirstCompletion, setIsFirstCompletion] = useState(true);
  
  // Nuevos estados para el formulario
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');

  const totalSteps = 8;
  
  const calculateProgress = () => {
    if (showLeadForm) {
      return 7 + ((formName.length > 0 || formEmail.length > 0) ? 1 : 0);
    } else {
      return currentQuestion;
    }
  };

  const progress = calculateProgress();

  useEffect(() => {
    const savedResult = getTestResult();
    if (savedResult !== null) {
      setIsFirstCompletion(false);
    }
  }, []);

  useEffect(() => {
    if (currentQuestion === questions.length - 1 && answers[currentQuestion]) {
      setShowLeadForm(true);
    }
  }, [currentQuestion, answers]);

  const handleAnswer = (points) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = points;
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleLeadSubmit = async (name) => {
    setShowLeadForm(false);
    setIsCalculating(true);
    setUserName(name);

    const finalScore = answers.reduce((a, b) => a + b, 0);
    
    setTimeout(() => {
      setIsCalculating(false);
      setShowResult(true);
      saveTestResult(finalScore);
      
      if (isFirstCompletion) {
        advanceStage();
      }
    }, 4000);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setIsComplete(false);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleFormPrevious = () => {
    setShowLeadForm(false);
    setCurrentQuestion(questions.length - 1);
    setFormName('');
    setFormEmail('');
  };

  if (showLeadForm) {
    return (
      <div className="test-container">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ 
              width: `${(progress / totalSteps) * 100}%`,
              transition: 'width 0.3s ease-out'
            }}
          />
        </div>
        
        <LeadForm 
          onSubmit={handleLeadSubmit}
          score={answers.reduce((a, b) => a + b, 0)}
          onPrevious={handleFormPrevious}
          name={formName}
          email={formEmail}
          onNameChange={setFormName}
          onEmailChange={setFormEmail}
        />
      </div>
    );
  }

  if (isCalculating) {
    return (
      <div className="calculating-container">
        <div className="calculating-content">
          <div className="calculating-animation">
            <div className="math-symbols">
              <span>ƒ</span>
              <span>∀</span>
              <span>∅</span>
              <span>∈</span>
              <span>∑</span>
              <span>∐</span>
              <span>∢</span>
              <span>∝</span>
            </div>
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
        <Result 
          score={answers.reduce((a, b) => a + b, 0)} 
          userName={userName}
        />
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
            setShowLeadForm(false);
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
          style={{ 
            width: `${(progress / totalSteps) * 100}%`,
            transition: 'width 0.3s ease-out'
          }}
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
        {currentQuestion < questions.length - 1 && (
          <button 
            className="navigation-button"
            onClick={handleNext}
            disabled={!answers[currentQuestion]}
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
    </div>
  );
};

export default Test; 