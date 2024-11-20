import { personalityTypes } from './testData';
import './Result.css';

const Result = ({ score, userName }) => {
  const getPersonalityType = (score) => {
    if (score <= 10) return "D";
    if (score <= 17) return "C";
    if (score <= 23) return "B";
    return "A";
  };

  const type = getPersonalityType(score);
  const result = personalityTypes[type];
  const description = result.description.replace('{name}', userName || '');

  return (
    <div className="result-container">
      <div className="personality-type">
        <p className="overline">¡Felicitaciones,<br />
        {userName}! 👋</p>
        <h2 className="title">Tu Personalidad Financiera® es<br/><span className="bold">{result.title}</span></h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Result; 