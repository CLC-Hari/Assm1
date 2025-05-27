// Tab switching function
function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');
}

// Show weight tab by default
document.addEventListener('DOMContentLoaded', () => {
  showTab('weight-tab');
});

// Weight conversion
document.getElementById('weight-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.getElementById('weight-value').value;
  const direction = document.getElementById('weight-direction').value;
  const resultDiv = document.getElementById('weight-result');

  if (!input) return resultDiv.textContent = 'Please enter a value.';

  const values = input.split(',').map(v => parseFloat(v.trim()));
  if (values.some(isNaN)) return resultDiv.textContent = 'Please enter valid numbers.';

  const result = values.map(value => {
    if (direction === 'kg-lb') return `${value} kg = ${(value * 2.20462).toFixed(2)} lbs`;
    else return `${value} lbs = ${(value * 0.453592).toFixed(2)} kg`;
  }).join('\n');

  resultDiv.textContent = result;
});

// Distance conversion
document.getElementById('distance-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.getElementById('distance-value').value;
  const direction = document.getElementById('distance-direction').value;
  const resultDiv = document.getElementById('distance-result');

  if (!input) return resultDiv.textContent = 'Please enter a value.';

  const values = input.split(',').map(v => parseFloat(v.trim()));
  if (values.some(isNaN)) return resultDiv.textContent = 'Please enter valid numbers.';

  const result = values.map(value => {
    if (direction === 'km-mi') return `${value} km = ${(value * 0.621371).toFixed(2)} miles`;
    else return `${value} miles = ${(value / 0.621371).toFixed(2)} km`;
  }).join('\n');

  resultDiv.textContent = result;
});

// Temperature conversion
document.getElementById('temperature-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.getElementById('temperature-value').value;
  const direction = document.getElementById('temperature-direction').value;
  const resultDiv = document.getElementById('temperature-result');

  if (!input) return resultDiv.textContent = 'Please enter a value.';

  const values = input.split(',').map(v => parseFloat(v.trim()));
  if (values.some(isNaN)) return resultDiv.textContent = 'Please enter valid numbers.';

  const result = values.map(value => {
    if (direction === 'c-f') return `${value} °C = ${((value * 9 / 5) + 32).toFixed(2)} °F`;
    else return `${value} °F = ${((value - 32) * 5 / 9).toFixed(2)} °C`;
  }).join('\n');

  resultDiv.textContent = result;
});
