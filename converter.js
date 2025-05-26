// Higher-order function to create conversion functions
const createConverter = (fromUnit, toUnit) => {
    const conversionFactors = {
        'lb-kg': 0.45359237,    // 1 pound = 0.45359237 kg
        'kg-lb': 2.20462262,    // 1 kg = 2.20462262 pounds
        'miles-km': 1.609344,   // 1 mile = 1.609344 km
        'km-miles': 0.62137119, // 1 km = 0.62137119 miles
        'c-f': (c) => (c * 9/5) + 32,  // Celsius to Fahrenheit
        'f-c': (f) => (f - 32) * 5/9   // Fahrenheit to Celsius
    };

    const conversionKey = `${fromUnit}-${toUnit}`;
    const factor = conversionFactors[conversionKey];

return (value) => {
    if (Array.isArray(value)) {
        if (value.length === 1 && value[0] === '') {
            return ['Please enter a value'];
        }

        return value.map(v => {
            const num = parseFloat(v);
            if (isNaN(num)) return 'Invalid input';
            const result = typeof factor === 'function' ? factor(num) : num * factor;
            return typeof result === 'number' ? result.toFixed(2) : result;
        });
    } else {
        if (value.trim() === '') return 'Please enter a value';

        const num = parseFloat(value);
        if (isNaN(num)) return 'Invalid input';
        const result = typeof factor === 'function' ? factor(num) : num * factor;
        return typeof result === 'number' ? result.toFixed(2) : result;
    }
    };
};

// Tab functionality
function showTab(tabName) {
    // Hide all conversion sections
    document.getElementById('Weight_conversion').style.display = 'none';
    document.getElementById('Distance_conversion').style.display = 'none';
    document.getElementById('tem_conversion').style.display = 'none';

    // Show selected tab
    if (tabName === 'Temperature') {
        document.getElementById('tem_conversion').style.display = 'block';
    } else {
        document.getElementById(tabName + '_conversion').style.display = 'block';
    }
}

// Conversion functions
function Weight_convert() {
    const input = document.getElementById('weight-input').value;
    const unit = document.getElementById('weight-unit').value;
    const values = input.split(',').map(v => v.trim());
    
    const converter = createConverter(unit.split('-')[0], unit.split('-')[1]);
    const result = converter(values);
    
    const resultDiv = document.getElementById('weight-result');
    resultDiv.innerHTML = `<p class="text-lg">Result: ${result.join(', ')} ${unit.split('-')[1]}</p>`;
}

function Distance_convert() {
    const input = document.getElementById('distance-input').value;
    const unit = document.getElementById('distance-unit').value;
    const values = input.split(',').map(v => v.trim());
    
    const converter = createConverter(unit.split('-')[0], unit.split('-')[1]);
    const result = converter(values);
    
    const resultDiv = document.getElementById('distance-result');
    resultDiv.innerHTML = `<p class="text-lg">Result: ${result.join(', ')} ${unit.split('-')[1]}</p>`;
}

// Temperature conversion
function Temperature_convert() {
    const input = document.getElementById('temperature-input').value;
    const unit = document.getElementById('temperature-unit').value;
    const values = input.split(',').map(v => v.trim());
    
    const converter = createConverter(unit.split('-')[0], unit.split('-')[1]);
    const result = converter(values);
    
    const resultDiv = document.getElementById('temperature-result');
    resultDiv.innerHTML = `<p class="text-lg">Result: ${result.join(', ')} ${unit.split('-')[1]}</p>`;
}



// Initialize the page to show Weight tab by default
document.addEventListener('DOMContentLoaded', () => {
    showTab('Weight');
}); 
