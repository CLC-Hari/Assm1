// Higher-order function to create conversion functions
const createConverter = (fromUnit, toUnit) => {
    const conversionFactors = {
        'lb-kg': 0.45359237,
        'kg-lb': 2.20462262,
        'miles-km': 1.609344,
        'km-miles': 0.621371192,
        'c-f': (c) => (c * 9/5) + 32,
        'f-c': (f) => (f - 32) * 5/9
    };

    const conversionKey = `${fromUnit}-${toUnit}`;
    const factor = conversionFactors[conversionKey];

    return (value) => {
        if (Array.isArray(value)) {
            return value.map(v => {
                if (typeof factor === 'function') {
                    return Number(factor(Number(v)).toFixed(2));
                }
                return Number((Number(v) * factor).toFixed(2));
            });
        }
        
        if (typeof factor === 'function') {
            return Number(factor(Number(value)).toFixed(2));
        }
        return Number((Number(value) * factor).toFixed(2));
    };
};

// Create specific conversion functions
const weightConverter = createConverter('lb', 'kg');
const distanceConverter = createConverter('miles', 'km');
const temperatureConverter = createConverter('c', 'f');

// Function to display results
function displayResult(resultDiv, inputValues, resultValues, fromUnit, toUnit) {
    const resultHTML = inputValues.map((input, index) => {
        return `<div class="mt-2 p-2 bg-gray-100 rounded">
            <p class="text-gray-700">${input} ${fromUnit} = ${resultValues[index]} ${toUnit}</p>
        </div>`;
    }).join('');
    
    resultDiv.innerHTML = resultHTML;
}

// Function to handle weight conversion
function Weight_convert() {
    const input = document.getElementById('weight-input').value;
    const unit = document.getElementById('weight-unit').value;
    const resultDiv = document.getElementById('weight-result');
    const values = input.split(',').map(v => v.trim());
    
    if (!input) {
        resultDiv.innerHTML = '<p class="text-red-500 mt-2">Please enter a value to convert</p>';
        return;
    }
    
    let result;
    let fromUnit, toUnit;
    
    if (unit === 'lb-kg') {
        result = weightConverter(values);
        fromUnit = 'lb';
        toUnit = 'kg';
    } else {
        result = createConverter('kg', 'lb')(values);
        fromUnit = 'kg';
        toUnit = 'lb';
    }
    
    displayResult(resultDiv, values, result, fromUnit, toUnit);
}

// Function to handle distance conversion
function Distance_convert() {
    const input = document.getElementById('distance-input').value;
    const unit = document.getElementById('distance-unit').value;
    const resultDiv = document.getElementById('distance-result');
    const values = input.split(',').map(v => v.trim());
    
    if (!input) {
        resultDiv.innerHTML = '<p class="text-red-500 mt-2">Please enter a value to convert</p>';
        return;
    }
    
    let result;
    let fromUnit, toUnit;
    
    if (unit === 'miles-km') {
        result = distanceConverter(values);
        fromUnit = 'miles';
        toUnit = 'km';
    } else {
        result = createConverter('km', 'miles')(values);
        fromUnit = 'km';
        toUnit = 'miles';
    }
    
    displayResult(resultDiv, values, result, fromUnit, toUnit);
}

// Function to handle temperature conversion
function Temperature_convert() {
    const input = document.getElementById('temperature-input').value;
    const unit = document.getElementById('temperature-unit').value;
    const resultDiv = document.getElementById('temperature-result');
    const values = input.split(',').map(v => v.trim());
    
    if (!input) {
        resultDiv.innerHTML = '<p class="text-red-500 mt-2">Please enter a value to convert</p>';
        return;
    }
    
    let result;
    let fromUnit, toUnit;
    
    if (unit === 'c-f') {
        result = temperatureConverter(values);
        fromUnit = '°C';
        toUnit = '°F';
    } else {
        result = createConverter('f', 'c')(values);
        fromUnit = '°F';
        toUnit = '°C';
    }
    
    displayResult(resultDiv, values, result, fromUnit, toUnit);
}

// Function to show/hide tabs
function showTab(tabName) {
    const tabs = ['Weight_conversion', 'Distance_conversion', 'Temperature_conversion'];
    tabs.forEach(tab => {
        document.getElementById(tab).style.display = tab === `${tabName}_conversion` ? 'block' : 'none';
    });
}

// Initialize the page
window.onload = function() {
    showTab('Weight');
}; 
