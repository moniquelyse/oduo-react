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

export const saveTestResult = (score) => {
  try {
    localStorage.setItem(TEST_RESULT_KEY, score.toString());
    return true;
  } catch (e) {
    console.error('Error saving test result:', e);
    return false;
  }
};

export const getTestResult = () => {
  try {
    const result = localStorage.getItem(TEST_RESULT_KEY);
    return result ? parseInt(result) : null;
  } catch (e) {
    console.error('Error getting test result:', e);
    return null;
  }
}; 