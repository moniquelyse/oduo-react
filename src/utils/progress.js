// Constante para la key del localStorage
const PROGRESS_KEY = 'ordenarme_current_stage';
const TEST_RESULT_KEY = 'ordenarme_test_result';

/**
 * Obtiene el stage actual desde localStorage
 * @returns {number} El número de stage actual (0 si no hay progreso guardado)
 */
export const getCurrentStage = () => {
  try {
    const stage = localStorage.getItem(PROGRESS_KEY);
    return stage ? parseInt(stage) : 0;
  } catch (e) {
    console.error('Error getting current stage:', e);
    return 0;
  }
};

/**
 * Avanza al siguiente stage
 * @returns {number} El nuevo número de stage
 */
export const advanceStage = () => {
  try {
    const currentStage = getCurrentStage();
    const newStage = currentStage + 1;
    localStorage.setItem(PROGRESS_KEY, newStage.toString());
    return newStage;
  } catch (e) {
    console.error('Error advancing stage:', e);
    return currentStage;
  }
};

/**
 * Resetea el progreso
 * @returns {boolean} true si se reseteó correctamente
 */
export const resetProgress = () => {
  try {
    localStorage.removeItem(PROGRESS_KEY);
    return true;
  } catch (e) {
    console.error('Error resetting progress:', e);
    return false;
  }
};

export const saveTestResult = (score, userName) => {
  localStorage.setItem('testScore', score.toString());
  localStorage.setItem('testUserName', userName);
};

export const getTestResult = () => {
  const score = localStorage.getItem('testScore');
  return score ? parseInt(score) : null;
};

export const getTestUserName = () => {
  return localStorage.getItem('testUserName') || '';
}; 