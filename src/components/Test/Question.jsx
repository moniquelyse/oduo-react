import './Question.css';

const Question = ({ data, selectedAnswer, onAnswer }) => {
  const { question, description, answers } = data;

  return (
    <div className="question-container">
      <h2 className="question-text">{question}</h2>
      {description && (
        <p className="question-description">{description}</p>
      )}
      
      <div className="answers-grid">
        {answers.map((answer, index) => (
          <button
            key={index}
            className={`answer-button ${selectedAnswer === answer.points ? 'selected' : ''}`}
            onClick={() => onAnswer(answer.points)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question; 