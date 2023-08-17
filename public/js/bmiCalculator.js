document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bmiForm');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const age = parseFloat(form.age.value);
    const weight = Math.round(parseFloat(form.weight.value)); 
    const heightFeet = parseFloat(form.heightFeet.value);
    const heightInches = parseFloat(form.heightInches.value);

    // Convert height to centimeters and weight to kilograms
    const height = (heightFeet * 12 + heightInches) * 2.54; // Conversion: inches to cm
    const weightKg = weight * 0.45359237; // Conversion: pounds to kg

    calculateBMI(age, weightKg, height);
  });

  function calculateBMI(age, weight, height) {
    const API_BASE_URL = 'https://fitness-calculator.p.rapidapi.com/bmi';
    const API_KEY = '34cddc4eaemsh7b4fff3ebbbf2dep1bda71jsn3129dfc1d349';
  
    const queryParams = new URLSearchParams({
      age: age,
      weight: weight,
      height: height
    });
  
    const url = `${API_BASE_URL}?${queryParams.toString()}`;
  
    fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const bmiValue = data.data.bmi.toFixed(2);
        const healthStatus = data.data.health;
  
        resultDiv.textContent = `BMI Calculation Result: ${bmiValue}, ${healthStatus}`;
      })
      .catch(error => {
        resultDiv.textContent = `Error: ${error.message}`;
      });
  }
});
