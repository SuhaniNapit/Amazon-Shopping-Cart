document.addEventListener('DOMContentLoaded', () => {
    const cartSection = document.getElementById('cart-section');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        cartSection.innerHTML = '';
        cart.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <span>${item.name}</span>
                <span>Quantity: ${item.quantity}</span>
                <button data-index="${index}">Remove</button>
            `;
            cartSection.appendChild(div);
        });
    }

    cartSection.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const index = parseInt(e.target.getAttribute('data-index'));
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        }
    });

    renderCart();
});


