const pageviewAmount = document.getElementById('pageview-amount');
const pricingAmount = document.getElementById('pricing-amount');
const rangeInput = document.getElementById('range-input');
const monthlyOption = document.getElementById('monthly-option');
const yearlyOption = document.getElementById('yearly-option');
const billingToggle = document.getElementById('billing-toggle');

function setPricing(pageviews, price, value) {
    pageviewAmount.innerHTML = pageviews;
    pricingAmount.innerHTML = price;
    rangeInput.value = value;
}

function updateRangeInputStyle() {
    const value = rangeInput.value;
    rangeInput.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${value}%)`;
}

function updatePricing() {
    let value = parseFloat(rangeInput.value);
    const isYearly = billingToggle.checked;

    if (isYearly) {
        if (value <= 12.5) {
            setPricing('10K', '$72.00', 0);
        } else if (value <= 37.5) {
            setPricing('50K', '$108.00', 25);
        } else if (value <= 62.5) {
            setPricing('100K', '$144.00', 50);
        } else if (value <= 87.5) {
            setPricing('500K', '$216.00', 75);
        } else {
            setPricing('1M', '$324.00', 100);
        }
    } else {
        if (value <= 12.5) {
            setPricing('10K', '$8.00', 0);
        } else if (value <= 37.5) {
            setPricing('50K', '$12.00', 25);
        } else if (value <= 62.5) {
            setPricing('100K', '$16.00', 50);
        } else if (value <= 87.5) {
            setPricing('500K', '$24.00', 75);
        } else {
            setPricing('1M', '$36.00', 100);
        }
    }
}

// Initial setup
updatePricing();
updateRangeInputStyle();

monthlyOption.addEventListener('click', (event) => {
    event.preventDefault();
    billingToggle.checked = false;
    updatePricing();
});

yearlyOption.addEventListener('click', (event) => {
    event.preventDefault();
    billingToggle.checked = true;
    updatePricing();
});

rangeInput.addEventListener('input', () => {
    updatePricing();
    updateRangeInputStyle();
});

billingToggle.addEventListener('change', () => {
    updatePricing();
});

rangeInput.addEventListener('mousedown', () => {
    rangeInput.classList.add('active-mode');
});

rangeInput.addEventListener('mouseup', () => {
    rangeInput.classList.remove('active-mode');
});
