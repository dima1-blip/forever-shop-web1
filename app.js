const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const RUB = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0
});

const products = [
    {
        id: 1,
        category: "iphone",
        name: "iPhone 17 Pro",
        description: "256 ГБ · nano-SIM + eSIM",
        price: 126999,
        image: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-camera-close-up-250909_big.jpg.large.jpg"
    },
    {
        id: 2,
        category: "iphone",
        name: "iPhone 17",
        description: "256 ГБ · nano-SIM + eSIM",
        price: 92999,
        image: "https://www.apple.com/newsroom/images/2025/09/apple-debuts-iphone-17/article/Apple-iPhone-17-hero-250909_inline.jpg.large.jpg"
    },
    {
        id: 3,
        category: "iphone",
        name: "iPhone 17 Pro Max",
        description: "256 ГБ · nano-SIM + eSIM",
        price: 139999,
        image: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-camera-close-up-250909_big.jpg.large.jpg"
    },
    {
        id: 4,
        category: "mac",
        name: "MacBook Air M4",
        description: "13,6″ · 16 ГБ · 256 ГБ",
        price: 105999,
        image: "https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-hero-250305_big.jpg.large.jpg"
    },
    {
        id: 5,
        category: "airpods",
        name: "AirPods Pro 3",
        description: "USB-C · новое поколение",
        price: 26723,
        image: "https://www.apple.com/newsroom/images/2025/09/introducing-airpods-pro-3-the-ultimate-audio-experience/article/Apple-AirPods-Pro-3-hero-250909_inline.jpg.large.jpg"
    },
    {
        id: 6,
        category: "ipad",
        name: "iPad Air M3",
        description: "11″ · 128 ГБ · Wi-Fi",
        price: 60999,
        image: "https://www.apple.com/newsroom/images/2025/03/apple-introduces-ipad-air-with-powerful-m3-chip-and-new-magic-keyboard/article/Apple-iPad-Air-hero-250304_big.jpg.large.jpg"
    },
    {
        id: 7,
        category: "watch",
        name: "Apple Watch Series 11",
        description: "42 мм · GPS · алюминий",
        price: 34990,
        image: "https://www.apple.com/newsroom/images/2025/09/apple-debuts-apple-watch-series-11-featuring-groundbreaking-health-insights/article/Apple-Watch-Series-11-hero-250909_big.jpg.large.jpg"
    }
];

let cart = JSON.parse(localStorage.getItem("forever_cart") || "[]");

function money(value) {
    return RUB.format(value);
}

function renderProducts(list = products) {
    const container = document.getElementById("products");

    if (!container) return;

    container.innerHTML = "";

    list.forEach(product => {
        container.innerHTML += `
            <div class="product">

                <div class="product-image">
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >
                </div>

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="price">
                    ${money(product.price)}
                </div>

                <button
                    class="add"
                    onclick="addToCart(${product.id})"
                >
                    Добавить в корзину
                </button>

            </div>
        `;
    });
}

function addToCart(id) {

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: id,
            qty: 1
        });
    }

    saveCart();
    updateCart();

    if (tg.HapticFeedback) {
        tg.HapticFeedback.impactOccurred("light");
    }

    if (tg.showPopup) {
        tg.showPopup({
            title: "Добавлено",
            message: "Товар добавлен в корзину.",
            buttons: [
                {
                    type: "ok"
                }
            ]
        });
    }
}

function saveCart() {
    localStorage.setItem(
        "forever_cart",
        JSON.stringify(cart)
    );
}

function getCartProducts() {

    return cart
        .map(item => {

            const product = products.find(
                p => p.id === item.id
            );

            if (!product) return null;

            return {
                ...product,
                qty: item.qty
            };

        })
        .filter(Boolean);
}

function updateCart() {

    const cartProducts = getCartProducts();

    const count = cartProducts.reduce(
        (sum, item) => sum + item.qty,
        0
    );

    const cartCount =
        document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = count;
    }

    const items =
        document.getElementById("cartItems");

    const empty =
        document.getElementById("emptyCart");

    const checkoutButton =
        document.getElementById("checkoutButton");

    if (!items) return;

    items.innerHTML = "";

    let total = 0;

    cartProducts.forEach(product => {

        total +=
            product.price *
            product.qty;

        items.innerHTML += `
            <div class="cart-item">

                <img
                    class="cart-thumb"
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div>

                    <div class="cart-name">
                        ${product.name}
                    </div>

                    <div class="cart-price">
                        ${money(product.price)}
                        × ${product.qty}
                    </div>

                    <div class="qty">

                        <button
                            onclick="changeQty(${product.id}, -1)"
                        >
                            −
                        </button>

                        <strong>
                            ${product.qty}
                        </strong>

                        <button
                            onclick="changeQty(${product.id}, 1)"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    class="remove"
                    onclick="removeFromCart(${product.id})"
                >
                    ✕
                </button>

            </div>
        `;
    });

    const cartTotal =
        document.getElementById("cartTotal");

    const checkoutTotal =
        document.getElementById("checkoutTotal");

    if (cartTotal) {
        cartTotal.textContent = money(total);
    }

    if (checkoutTotal) {
        checkoutTotal.textContent = money(total);
    }

    if (empty) {
        empty.classList.toggle(
            "hidden",
            cartProducts.length !== 0
        );
    }

    if (checkoutButton) {
        checkoutButton.classList.toggle(
            "hidden",
            cartProducts.length === 0
        );
    }
}

function changeQty(id, delta) {

    const item =
        cart.find(item => item.id === id);

    if (!item) return;

    item.qty += delta;

    if (item.qty <= 0) {

        cart = cart.filter(
            item => item.id !== id
        );
    }

    saveCart();
    updateCart();
}

function removeFromCart(id) {

    cart = cart.filter(
        item => item.id !== id
    );

    saveCart();
    updateCart();
}

function openCart() {

    updateCart();

    const modal =
        document.getElementById("cartModal");

    if (modal) {
        modal.classList.remove("hidden");
    }
}

function closeCart() {

    const modal =
        document.getElementById("cartModal");

    if (modal) {
        modal.classList.add("hidden");
    }
}

function filterProducts(category, button) {

    document
        .querySelectorAll(".category")
        .forEach(btn => {
            btn.classList.remove("active");
        });

    button.classList.add("active");

    if (category === "all") {

        renderProducts(products);

    } else {

        renderProducts(
            products.filter(
                product =>
                    product.category === category
            )
        );
    }
}

function getTelegramUser() {

    return (
        tg.initDataUnsafe?.user || {}
    );
}

function fillTelegramUser() {

    const user =
        getTelegramUser();

    const name =
        [
            user.first_name,
            user.last_name
        ]
        .filter(Boolean)
        .join(" ")
        ||
        "Пользователь Telegram";

    const username =
        user.username
            ? "@" + user.username
            : "Username не указан";

    const nameElement =
        document.getElementById(
            "telegramName"
        );

    const usernameElement =
        document.getElementById(
            "telegramUsername"
        );

    if (nameElement) {
        nameElement.textContent = name;
    }

    if (usernameElement) {
        usernameElement.textContent =
            username;
    }

    if (user.photo_url) {

        const avatar =
            document.getElementById(
                "userAvatar"
            );

        if (avatar) {

            avatar.innerHTML = `
                <img
                    src="${user.photo_url}"
                    style="
                        width:100%;
                        height:100%;
                        border-radius:50%;
                        object-fit:cover
                    "
                >
            `;
        }
    }
}

function openCheckout() {

    if (cart.length === 0) {

        tg.showAlert(
            "Корзина пустая"
        );

        return;
    }

    closeCart();

    fillTelegramUser();

    const user =
        getTelegramUser();

    const defaultName =
        [
            user.first_name,
            user.last_name
        ]
        .filter(Boolean)
        .join(" ");

    const nameInput =
        document.getElementById(
            "customerName"
        );

    if (nameInput) {
        nameInput.value =
            defaultName || "";
    }

    const modal =
        document.getElementById(
            "checkoutModal"
        );

    if (modal) {
        modal.classList.remove("hidden");
    }
}

function closeCheckout() {

    const modal =
        document.getElementById(
            "checkoutModal"
        );

    if (modal) {
        modal.classList.add("hidden");
    }
}

function submitOrder() {

    const name =
        document
            .getElementById("customerName")
            .value
            .trim();

    const phone =
        document
            .getElementById("customerPhone")
            .value
            .trim();

    const comment =
        document
            .getElementById("customerComment")
            .value
            .trim();

    if (!name) {

        tg.showAlert(
            "Введите имя."
        );

        return;
    }

    if (!phone) {

        tg.showAlert(
            "Введите номер телефона."
        );

        return;
    }

    const user =
        getTelegramUser();

    const cartProducts =
        getCartProducts();

    const items =
        cartProducts.map(product => ({

            id: product.id,

            name: product.name,

            description:
                product.description,

            price: product.price,

            quantity: product.qty,

            subtotal:
                product.price *
                product.qty

        }));

    const total =
        items.reduce(
            (sum, item) =>
                sum + item.subtotal,
            0
        );

    const order = {

        type: "forever_shop_order",

        created_at:
            new Date().toISOString(),

        customer: {

            telegram_id:
                user.id || null,

            username:
                user.username || null,

            first_name:
                user.first_name || null,

            last_name:
                user.last_name || null,

            name: name,

            phone: phone,

            comment: comment
        },

        items: items,

        total: total,

        currency: "RUB"
    };

    console.log(
        "ORDER:",
        order
    );

    tg.sendData(
        JSON.stringify(order)
    );

    localStorage.removeItem(
        "forever_cart"
    );

    cart = [];

    if (tg.HapticFeedback) {

        tg.HapticFeedback
            .notificationOccurred(
                "success"
            );
    }

    tg.showAlert(
        "Заказ отправлен! Мы свяжемся с вами в Telegram."
    );

    setTimeout(() => {

        tg.close();

    }, 800);
}

renderProducts();
updateCart();


renderProducts();
updateCart();
