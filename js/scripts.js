document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let products = {
        'vin-rosu': { name: 'Vin Roșu', price: 50 },
        'tuica': { name: 'Țuică', price: 45 },
        'gem-capsuni': { name: 'Gem de Căpșuni', price: 20 },
        'gem-caise': { name: 'Gem de Caise', price: 20 }
    };

    function addToCart(productId) {
        const product = products[productId];
        if (product) {
            cart.push({ id: productId, ...product });
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
            updateCartSection();
        }
    }

    function updateCartDisplay() {
        const cartDisplay = document.getElementById('cart-display');
        if (cartDisplay) {
            cartDisplay.innerHTML = `Coș: ${cart.length} produse`;
        }
    }

    function updateCartSection() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        
        if (cartItems) {
            cartItems.innerHTML = '';
            let total = 0;

            cart.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                    <p>${item.name} - ${item.price} RON
                    <button onclick="removeFromCart(${index})">Șterge</button></p>
                `;
                cartItems.appendChild(itemElement);
                total += item.price;
            });

            if (cartTotal) {
                cartTotal.innerHTML = `Total: ${total} RON`;
            }
        }
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        updateCartSection();
    }

    // Add to cart button handlers
    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', function(e) {
            const productId = this.closest('.product').dataset.id;
            addToCart(productId);
        });
    });

    // Checkout button handler
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function(e) {
            if (cart.length === 0) {
                alert('Coșul este gol!');
                return;
            }
            alert('Vă mulțumim pentru comandă! Veți fi contactat în curând pentru confirmare.');
            cart = [];
            localStorage.removeItem('cart');
            updateCartDisplay();
            updateCartSection();
        });
    }

    // Navigation handlers
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                event.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Initialize cart display
    updateCartDisplay();
    updateCartSection();

    // Make removeFromCart available globally
    window.removeFromCart = removeFromCart;
});