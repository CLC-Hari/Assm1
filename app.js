document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    document.querySelectorAll('.tab').forEach(tab => tab.classList.add('hidden'));

    document.getElementById(`${targetTab}-tab`).classList.remove('hidden');
  });
});

document.getElementById('weight-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const value = parseFloat(document.getElementById('weight-value').value);
  const direction = document.getElementById('weight-direction').value;
  let result = '';

  if (!isNaN(value)) {
    if (direction === 'kg-lb') {
      result = `${(value * 2.20462).toFixed(2)} lbs`;
    } else {
      result = `${(value / 2.20462).toFixed(2)} kg`;
    }
  } else {
    result = 'Please enter a valid number.';
  }

  document.getElementById('weight-result').textContent = result;
});

document.getElementById('distance-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const value = parseFloat(document.getElementById('distance-value').value);
  const direction = document.getElementById('distance-direction').value;
  let result = '';

  if (!isNaN(value)) {
    if (direction === 'km-mi') {
      result = `${(value * 0.621371).toFixed(2)} miles`;
    } else {
      result = `${(value / 0.621371).toFixed(2)} km`;
    }
  } else {
    result = 'Please enter a valid number.';
  }

  document.getElementById('distance-result').textContent = result;
});

document.getElementById('temperature-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const value = parseFloat(document.getElementById('temperature-value').value);
  const direction = document.getElementById('temperature-direction').value;
  let result = '';

  if (!isNaN(value)) {
    if (direction === 'c-f') {
      result = `${((value * 9 / 5) + 32).toFixed(2)} °F`;
    } else {
      result = `${((value - 32) * 5 / 9).toFixed(2)} °C`;
    }
  } else {
    result = 'Please enter a valid number.';
  }

  document.getElementById('temperature-result').textContent = result;
});
