document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready');

    // Cart functionality
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function addToCart(productName) {
        cart.push(productName);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Produsul ' + productName + ' a fost adăugat în coș.');
        updateCartDisplay();
    }

    function updateCartDisplay() {
        const cartDisplay = document.getElementById('cart-display');
        if (cartDisplay) {
            cartDisplay.innerHTML = `Coș: ${cart.length} produse`;
        }
    }

    // Add to cart button handlers
    const addToCartButtons = document.querySelectorAll('button');
    addToCartButtons.forEach(button => {
        if (!button.id || button.id !== 'checkout-button') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const productName = this.parentElement.querySelector('h4').innerText;
                addToCart(productName);
            });
        }
    });

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
});