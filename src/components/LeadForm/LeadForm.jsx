import { useState } from 'react';
import { useForm } from '@formspree/react';
import './LeadForm.css';

const LeadForm = ({ onSubmit, score }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [state, handleFormspreeSubmit] = useForm("xpwzlrkw");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Enviamos a Formspree
    await handleFormspreeSubmit({
      name,
      email,
      testScore: score,
      timestamp: new Date().toISOString()
    });

    // Si el envío fue exitoso
    if (state.succeeded) {
      // Guardar nombre en localStorage
      localStorage.setItem('ordenarme_user_name', name);
      onSubmit(name);
    }
  };

  return (
    <div className="lead-form-container">
      <h2>¡Felicitaciones!</h2>
      <p>Ingresa tus datos para ver tu resultado y participar en el concurso:</p>
      
      <form onSubmit={handleSubmit} className="lead-form">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button 
          type="submit" 
          disabled={state.submitting}
          className="result-button"
        >
          {state.submitting ? 'Enviando...' : 'Ver mi resultado'}
        </button>
      </form>
    </div>
  );
};

export default LeadForm; 