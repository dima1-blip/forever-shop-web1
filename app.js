const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();


const products = [
    {
        id: 1,
        category: "iphone",
        name: "iPhone 17 Pro",
        description: "256 GB",
        price: 1199,
        emoji: "📱"
    },
    {
        id: 2,
        category: "iphone",
        name: "iPhone 17",
        description: "256 GB",
        price: 899,
        emoji: "📱"
    },
    {
        id: 3,
        category: "mac",
        name: "MacBook Air",
        description: "M4 / 16 GB / 256 GB",
        price: 1099,
        emoji: "💻"
    },
    {
        id: 4,
        category: "airpods",
        name: "AirPods Pro",
        description: "2nd generation",
        price: 249,
        emoji: "🎧"
    },
    {
        id: 5,
        category: "watch",
        name: "Apple Watch",
        description: "Series 11",
        price: 429,
        emoji: "⌚"
    }
];


let cart = [];


function renderProducts(list = products) {

    const container = document.getElementById("products");

    container.innerHTML = "";

    list.forEach(product => {

        container.innerHTML += `
            <div class="product">

                <div class="product-image">
                    ${product.emoji}
                </div>

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="price">
                    ${product.price} €
                </div>

                <button
                    class="add"
                    onclick="addToCart(${product.id})"
                >
                    Добавить
                </button>

            </div>
        `;
    });
}


function addToCart(id) {

    const product = products.find(p => p.id === id);

    cart.push(product);

    updateCart();

    tg.HapticFeedback?.impactOccurred("light");
}


function updateCart() {

    document.getElementById("cartCount").textContent = cart.length;

    const items = document.getElementById("cartItems");

    items.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        items.innerHTML += `
            <div class="cart-item">

                <span>
                    ${product.name}
                </span>

                <span>
                    ${product.price} €
                    <button onclick="removeFromCart(${index})">
                        ✕
                    </button>
                </span>

            </div>
        `;
    });

    document.getElementById("cartTotal").textContent =
        `${total} €`;
}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


function openCart() {

    document
        .getElementById("cartModal")
        .classList.remove("hidden");
}


function closeCart() {

    document
        .getElementById("cartModal")
        .classList.add("hidden");
}


function filterProducts(category, button) {

    document
        .querySelectorAll(".category")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    if (category === "all") {
        renderProducts();
    } else {
        renderProducts(
            products.filter(p => p.category === category)
        );
    }
}


function checkout() {

    if (cart.length === 0) {
        tg.showAlert("Корзина пустая");
        return;
    }

    const total = cart.reduce(
        (sum, product) => sum + product.price,
        0
    );

    const order = {
        items: cart.map(product => ({
            name: product.name,
            price: product.price
        })),
        total: total
    };

    tg.sendData(JSON.stringify(order));

    tg.close();
}


renderProducts();
updateCart();