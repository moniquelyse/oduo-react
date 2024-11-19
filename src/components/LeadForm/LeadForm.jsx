import { useState } from 'react';
import { useForm } from '@formspree/react';
import './LeadForm.css';

const LeadForm = ({ 
  onSubmit, 
  score, 
  onPrevious, 
  name, 
  email, 
  onNameChange, 
  onEmailChange 
}) => {
  const [state, handleFormspreeSubmit] = useForm("xpwzlrkw");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state.submitting) return;
    await handleFormspreeSubmit({
      name,
      email,
      testScore: score,
      timestamp: new Date().toISOString()
    });
    onSubmit(name);
  };

  return (
    <>
      <div className="navigation-buttons">
        <button 
          className="navigation-button"
          onClick={onPrevious}
          disabled={state.submitting}
        >
          ← Anterior
        </button>
      </div>

      <div className="question-content">
        <h2 className="question-title">¡Ya casi terminamos!</h2>
        <p className="question-description">
          Ingresa tus datos para ver tu resultado y participar en el concurso:
        </p>
        
        <form onSubmit={handleSubmit} className="lead-form">
          <div className="form-fields">
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
              disabled={state.submitting}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              disabled={state.submitting}
              required
            />
          </div>

          <button 
            type="submit"
            className="result-button"
            disabled={state.submitting || !name || !email}
          >
            {state.submitting ? 'Enviando...' : 'Ver mi resultado'}
          </button>
        </form>
      </div>
    </>
  );
};

export default LeadForm; 