document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Payment successful! Thank you for shopping.');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
});




