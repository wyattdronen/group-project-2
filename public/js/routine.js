const fetchRoutines = async () => {
  try {
    const response = await fetch('/api/routine'); 
    if (response.ok) {
      const routines = await response.json();
      renderRoutines(routines);
    }
  } catch (error) {
    console.error('Error fetching routines:', error);
  }
};

const renderRoutines = (routines) => {
  const routineTemplate = document.getElementById('routine-template').innerHTML;
  const compiledTemplate = Handlebars.compile(routineTemplate);
  const renderedHTML = compiledTemplate({ routines });
  document.getElementById('routine-container').innerHTML = renderedHTML;
};

document.addEventListener('DOMContentLoaded', () => {
  fetchRoutines();
});