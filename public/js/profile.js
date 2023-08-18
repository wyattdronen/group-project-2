const newExerciseFormHandler = async (event) => {
  event.preventDefault();

  const exerciseName = document.querySelector('#exercise-name').value.trim();
  const exerciseType = document.querySelector('#exercise-type').value.trim();
  const maxWeight = document.querySelector('#max-weight').value.trim();
  const routineId = document.querySelector('#routine-id').value.trim();

  if (exerciseName && exerciseType && maxWeight && routineId) {
    const response = await fetch(`/api/exercise`, {
      method: 'POST',
      body: JSON.stringify({ exerciseName, exerciseType, maxWeight, routineId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create new exercise');
    }
  }
};

document
  .querySelector('.new-exercise-form')
  .addEventListener('submit', newExerciseFormHandler);
