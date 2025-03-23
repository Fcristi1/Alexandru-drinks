<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart - Alexandru Drinks & Jams</title>
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/scripts.js" defer></script>
</head>
<body>
    <header>
        <h1>Welcome to Alexandru Drinks & Jams</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">Despre Mine</a></li>
                <li><a href="location.html">Locatie</a></li>
                <li><a href="alcohol.html">Alcool</a></li>
                <li><a href="food-products.html">Produse Alimentare</a></li>
                <li><a href="cart.html">Cart</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Your Cart</h2>
        <div id="cart-items">
            <!-- Cart items will be dynamically added here -->
        </div>
        <button id="checkout-button">Checkout</button>
    </main>
    <footer>
        <p>&copy; 2023 Alexandru Drinks & Jams</p>
    </footer>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Document is ready');

            // Initialize the cart from localStorage or as an empty array
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Function to add a product to the cart
            function addToCart(productName) {
                cart.push(productName);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert(`${productName} has been added to your cart.`);
                updateCartDisplay();
            }

            // Function to update the cart display
            function updateCartDisplay() {
                const cartDisplay = document.getElementById('cart-display');
                if (cartDisplay) {
                    cartDisplay.innerHTML = `Cart: ${cart.length} items`;
                }
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
            cartElement.innerHTML = `Cart: ${cart.length} items`;
            document.body.appendChild(cartElement);

            // Display cart items on the cart page
            const cartItemsContainer = document.getElementById('cart-items');
            if (cartItemsContainer) {
                cart.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'cart-item';
                    itemElement.innerText = item;
                    cartItemsContainer.appendChild(itemElement);
                });
            }

            // Checkout button functionality
            const checkoutButton = document.getElementById('checkout-button');
            if (checkoutButton) {
                checkoutButton.addEventListener('click', function() {
                    alert('Checkout functionality is not implemented yet.');
                });
            }
        });
    </script>
</body>
</html>