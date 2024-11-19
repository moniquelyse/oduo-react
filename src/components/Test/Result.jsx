import { personalityTypes } from './testData';
import './Result.css';

const Result = ({ score }) => {
  const getPersonalityType = (score) => {
    if (score <= 10) return "D";
    if (score <= 17) return "C";
    if (score <= 23) return "B";
    return "A";
  };

  const type = getPersonalityType(score);
  const result = personalityTypes[type];

  return (
    <div className="result-container">
      <h2>Tu resultado</h2>
      <div className="personality-type">
        <h3>{result.title}</h3>
        <p>{result.description}</p>
      </div>
    </div>
  );
};

export default Result; 