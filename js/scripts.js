// Add your JavaScript code here
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready');

    // Initialize an empty cart
    let cart = [];

    // Function to add a product to the cart
    function addToCart(productName) {
        cart.push(productName);
        alert(`${productName} has been added to your cart.`);
        updateCartDisplay();
    }

    // Function to update the cart display
    function updateCartDisplay() {
        const cartDisplay = document.getElementById('cart-display');
        cartDisplay.innerHTML = `Cart: ${cart.length} items`;
    }

    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h4').innerText;
            addToCart(productName);
        });
    });

    // Create and display the cart element
    const cartElement = document.createElement('div');
    cartElement.id = 'cart-display';
    cartElement.style.position = 'fixed';
    cartElement.style.top = '10px';
    cartElement.style.right = '10px';
    cartElement.style.backgroundColor = '#fff';
    cartElement.style.border = '1px solid #ccc';
    cartElement.style.padding = '10px';
    cartElement.innerHTML = 'Cart: 0 items';
    document.body.appendChild(cartElement);
});