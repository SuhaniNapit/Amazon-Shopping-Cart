document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');

    function updateCartCount() {
        cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    }

    // Add items to the cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = parseFloat(button.getAttribute('data-price'));

            const existingItem = cart.find(item => item.product === product);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ product, price, quantity: 1 });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${product} has been added to your cart!`);
            window.location.href = 'cart.html';
        });
    });

    // Update cart count on each page
    updateCartCount();
});




