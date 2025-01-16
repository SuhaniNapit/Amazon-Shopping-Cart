document.getElementById('place-order').addEventListener('click', () => {
    const paymentMethod = document.getElementById('payment-method').value;

    if (!paymentMethod) {
        alert('Please select a payment method!');
        return;
    }

    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    localStorage.removeItem('userDetails');
    window.location.href = "index.html";
});
