document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready');

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

    const cartElement = document.createElement('div');
    cartElement.id = 'cart-display';
    cartElement.style.position = 'fixed';
    cartElement.style.top = '10px';
    cartElement.style.right = '10px';
    cartElement.style.backgroundColor = '#fff';
    cartElement.style.border = '1px solid #ccc';
    cartElement.style.padding = '10px';
    cartElement.innerHTML = `Coș: ${cart.length} produse`;
    document.body.appendChild(cartElement);

    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerText = item;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Funcționalitatea de finalizare comandă nu este încă implementată.');
        });
    }

    // Prevent double-tap zoom on iOS
    document.addEventListener('touchend', function(e) {
        e.preventDefault();
    }, { passive: false });

    // Update the navigation click handler
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                event.preventDefault();
                const targetElement = document.getElementById(targetId.substring(1));
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});