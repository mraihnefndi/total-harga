document.addEventListener('DOMContentLoaded', function() {
    const qtyInput = document.getElementById('qty');
    const priceInput = document.getElementById('price');
    const calculateButton = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');

    calculateButton.addEventListener('click', function() {
        const qty = parseInt(qtyInput.value) || 0;
        const price = parseInt(priceInput.value) || 0;
        const total = qty * price;
        resultDiv.textContent = 'Total Harga: ' + total;
    });
});