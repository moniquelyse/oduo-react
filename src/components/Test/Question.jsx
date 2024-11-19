import './Question.css';

const Question = ({ data, onAnswer }) => {
  const { question, answers } = data;

  return (
    <div className="question-container">
      <h3 className="question-text">{question}</h3>
      
      <div className="answers-grid">
        {answers.map((answer, index) => (
          <button
            key={index}
            className="answer-button"
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