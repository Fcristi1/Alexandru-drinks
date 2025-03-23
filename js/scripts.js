document.addEventListener('DOMContentLoaded', function() {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    let basket = JSON.parse(localStorage.getItem('basket')) || [];

    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = button.parentElement;
            const productName = productCard.querySelector('h2').innerText;
            const productDescription = productCard.querySelector('p').innerText;
            const productPrice = parseFloat(productCard.querySelector('.price').innerText.replace(' RON', ''));

            const product = {
                name: productName,
                description: productDescription,
                price: productPrice
            };

            basket.push(product);
            localStorage.setItem('basket', JSON.stringify(basket));
            updateBasketNotification();
            alert(`Produsul a fost adăugat în coș! Număr total de produse: ${basket.length}`);
        });
    });

    if (document.querySelector('.basket-page')) {
        updateBasketPage();
    }

    document.querySelector('.reset-basket').addEventListener('click', function() {
        localStorage.removeItem('basket');
        basket = [];
        updateBasketPage();
        updateBasketNotification();
    });

    updateBasketNotification();
});

function updateBasketPage() {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    const basketContainer = document.querySelector('.basket-container');
    basketContainer.innerHTML = '';

    let totalPrice = 0;

    if (basket.length === 0) {
        basketContainer.innerHTML = '<p>Coșul este gol.</p>';
    } else {
        basket.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-card');
            productElement.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p class="price">${product.price} RON</p>
            `;
            basketContainer.appendChild(productElement);
            totalPrice += product.price;
        });
    }

    const totalPriceElement = document.querySelector('.total-price');
    totalPriceElement.innerText = `${totalPrice} RON`;
}

function updateBasketNotification() {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    const basketNotifications = document.querySelectorAll('.basket-notification');
    basketNotifications.forEach(notification => {
        notification.innerText = basket.length;
    });
}