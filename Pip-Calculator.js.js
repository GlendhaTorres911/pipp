function calculatePip() {
    const lotSize = parseFloat(document.getElementById('lotSize').value);
    const pipValue = parseFloat(document.getElementById('pipValue').value);
    const currency = document.getElementById('currency').value;

    if (isNaN(lotSize) || isNaN(pipValue)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    const pipTotal = lotSize * pipValue;
    let currencySymbol = '';

    switch (currency) {
        case 'USD':
        case 'AUD':
            currencySymbol = '$';
            break;
        case 'EUR':
            currencySymbol = '€';
            break;
        case 'GBP':
            currencySymbol = '£';
            break;
        case 'JPY':
            currencySymbol = '¥';
            break;
        default:
            currencySymbol = '';
    }

    document.getElementById('result').textContent = `Total Pip Value: ${currencySymbol}${pipTotal.toFixed(2)}`;
}