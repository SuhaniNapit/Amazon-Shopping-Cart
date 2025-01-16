// Product data with complete information
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 139900,
        image: "https://m.media-amazon.com/images/I/81+GIkwqLIL._SL1500_.jpg",
        description: "Latest iPhone with advanced features"
    },
    {
        id: 2,
        name: "Apple Watch",
        price: 40000,
        image: "https://m.media-amazon.com/images/I/71YdE55GwjL._SL1500_.jpg",
        description: "Premium Smartwatch"
    },
    {
        id: 3,
        name: "MacBook Pro",
        price: 162990,
        image: "https://m.media-amazon.com/images/I/61lYIKPieDL._SL1500_.jpg",
        description: "Powerful laptop for professionals"
    },
    {
        id: 4,
        name: "AirPods Pro",
        price: 24000,
        image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg",
        description: "Premium wireless earbuds"
    },
    
];


function displayProducts() {
    const shopSection = document.getElementById('shop-section');
    shopSection.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">Rs${product.price.toFixed(2)}</p>
                <p class="description">${product.description}</p>
                <button onclick="addToCart(${product.id})" class="add-to-cart-btn">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}


function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showPopup(`${product.name} added to cart!`);
    }
}


function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}


function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    
    popupMessage.textContent = message;
    popup.classList.add('show', 'success');
    
    setTimeout(() => {
        popup.classList.remove('show', 'success');
    }, 3000);
}


window.onload = () => {
    displayProducts();
    updateCartCount();
};
