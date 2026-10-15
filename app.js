const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const RUB = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0
});


// ======================================================
// ТОВАРЫ FOREVER SHOP
// ======================================================

const products = [

    // =========================
    // iPHONE 17
    // =========================

    {
        id: 101,
        category: "iphone",
        name: "iPhone 17",
        description: "256 ГБ · A19 · 6.3″",
        storage: "256 ГБ",
        price: 84990,
        image: "https://www.apple.com/newsroom/images/2025/09/apple-debuts-iphone-17/article/Apple-iPhone-17-hero-250909_inline.jpg.large.jpg"
    },

    {
        id: 102,
        category: "iphone",
        name: "iPhone 17",
        description: "512 ГБ · A19 · 6.3″",
        storage: "512 ГБ",
        price: 104990,
        image: "https://www.apple.com/newsroom/images/2025/09/apple-debuts-iphone-17/article/Apple-iPhone-17-hero-250909_inline.jpg.large.jpg"
    },


    // =========================
    // iPHONE 17e
    // =========================

    {
        id: 103,
        category: "iphone",
        name: "iPhone 17e",
        description: "256 ГБ · A19 · MagSafe",
        storage: "256 ГБ",
        price: 64990,
        image: "https://www.apple.com/newsroom/images/2026/03/apple-introduces-iphone-17e/article/Apple-iPhone-17e-hero-260302_big.jpg.large.jpg"
    },

    {
        id: 104,
        category: "iphone",
        name: "iPhone 17e",
        description: "512 ГБ · A19 · MagSafe",
        storage: "512 ГБ",
        price: 84990,
        image: "https://www.apple.com/newsroom/images/2026/03/apple-introduces-iphone-17e/article/Apple-iPhone-17e-hero-260302_big.jpg.large.jpg"
    },


    // =========================
    // iPHONE AIR
    // =========================

    {
        id: 105,
        category: "iphone",
        name: "iPhone Air",
        description: "256 ГБ · A19 Pro · 6.5″",
        storage: "256 ГБ",
        price: 99990,
        image: "https://www.apple.com/newsroom/images/2025/09/apple-introduces-iphone-air/article/Apple-iPhone-Air-hero-250909_big.jpg.large.jpg"
    },

    {
        id: 106,
        category: "iphone",
        name: "iPhone Air",
        description: "512 ГБ · A19 Pro · 6.5″",
        storage: "512 ГБ",
        price: 119990,
        image: "https://www.apple.com/newsroom/images/2025/09/apple-introduces-iphone-air/article/Apple-iPhone-Air-hero-250909_big.jpg.large.jpg"
    },


    // =========================
    // iPHONE 17 PRO
    // =========================

    {
        id: 107,
        category: "iphone",
        name: "iPhone 17 Pro",
        description: "256 ГБ · A19 Pro · Pro Camera",
        storage: "256 ГБ",
        price: 126990,
        image: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-camera-close-up-250909_big.jpg.large.jpg"
    },

    {
        id: 108,
        category: "iphone",
        name: "iPhone 17 Pro",
        description: "512 ГБ · A19 Pro · Pro Camera",
        storage: "512 ГБ",
        price: 149990,
        image: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-camera-close-up-250909_big.jpg.large.jpg"
    },


    // =========================
    // iPHONE 17 PRO MAX
    // =========================

    {
        id: 109,
        category: "iphone",
        name: "iPhone 17 Pro Max",
        description: "256 ГБ · A19 Pro · 6.9″",
        storage: "256 ГБ",
        price: 139990,
        image: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-camera-close-up-250909_big.jpg.large.jpg"
    },

    {
        id: 110,
        category: "iphone",
        name: "iPhone 17 Pro Max",
        description: "512 ГБ · A19 Pro · 6.9″",
        storage: "512 ГБ",
        price: 164990,
        image: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-camera-close-up-250909_big.jpg.large.jpg"
    },


    // =========================
    // iPHONE 18 PRO
    // =========================

    {
        id: 111,
        category: "iphone",
        name: "iPhone 18 Pro",
        description: "256 ГБ · A20 Pro · 6.3″",
        storage: "256 ГБ",
        price: 174990,
        image: "https://www.apple.com/newsroom/images/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/article/Apple-iPhone-18-Pro-hero-260909_big.jpg.large.jpg"
    },

    {
        id: 112,
        category: "iphone",
        name: "iPhone 18 Pro",
        description: "512 ГБ · A20 Pro · 6.3″",
        storage: "512 ГБ",
        price: 204990,
        image: "https://www.apple.com/newsroom/images/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/article/Apple-iPhone-18-Pro-hero-260909_big.jpg.large.jpg"
    },


    // =========================
    // iPHONE 18 PRO MAX
    // =========================

    {
        id: 113,
        category: "iphone",
        name: "iPhone 18 Pro Max",
        description: "256 ГБ · A20 Pro · 6.9″",
        storage: "256 ГБ",
        price: 189990,
        image: "https://www.apple.com/newsroom/images/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/article/Apple-iPhone-18-Pro-hero-260909_big.jpg.large.jpg"
    },

    {
        id: 114,
        category: "iphone",
        name: "iPhone 18 Pro Max",
        description: "512 ГБ · A20 Pro · 6.9″",
        storage: "512 ГБ",
        price: 219990,
        image: "https://www.apple.com/newsroom/images/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/article/Apple-iPhone-18-Pro-hero-260909_big.jpg.large.jpg"
    },


    // =========================
    // iPHONE DUO
    // =========================

    {
        id: 115,
        category: "iphone",
        name: "iPhone Duo",
        description: "256 ГБ · складной · 7.6″",
        storage: "256 ГБ",
        price: 199990,
        image: "https://www.apple.com/newsroom/images/2026/09/apple-unveils-iphone-duo/article/Apple-iPhone-Duo-hero-260909_big.jpg.large.jpg"
    },

    {
        id: 116,
        category: "iphone",
        name: "iPhone Duo",
        description: "512 ГБ · складной · 7.6″",
        storage: "512 ГБ",
        price: 219990,
        image: "https://www.apple.com/newsroom/images/2026/09/apple-unveils-iphone-duo/article/Apple-iPhone-Duo-hero-260909_big.jpg.large.jpg"
    },


    // =========================
    // MAC
    // =========================

    {
        id: 201,
        category: "mac",
        name: "MacBook Air M4",
        description: "13.6″ · 16 ГБ · 256 ГБ",
        storage: "256 ГБ",
        price: 105990,
        image: "https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-hero-250305_big.jpg.large.jpg"
    },


    // =========================
    // AIRPODS
    // =========================

    {
        id: 301,
        category: "airpods",
        name: "AirPods Pro 3",
        description: "USB-C · активное шумоподавление",
        storage: "",
        price: 26723,
        image: "https://www.apple.com/newsroom/images/2025/09/introducing-airpods-pro-3-the-ultimate-audio-experience/article/Apple-AirPods-Pro-3-hero-250909_inline.jpg.large.jpg"
    },


    // =========================
    // IPAD
    // =========================

    {
        id: 401,
        category: "ipad",
        name: "iPad Air M3",
        description: "11″ · Wi-Fi · 128 ГБ",
        storage: "128 ГБ",
        price: 60990,
        image: "https://www.apple.com/newsroom/images/2025/03/apple-introduces-ipad-air-with-powerful-m3-chip-and-new-magic-keyboard/article/Apple-iPad-Air-hero-250304_big.jpg.large.jpg"
    },


    // =========================
    // WATCH
    // =========================

    {
        id: 501,
        category: "watch",
        name: "Apple Watch Series 11",
        description: "42 мм · GPS · алюминий",
        storage: "",
        price: 34990,
        image: "https://www.apple.com/newsroom/images/2025/09/apple-debuts-apple-watch-series-11-featuring-groundbreaking-health-insights/article/Apple-Watch-Series-11-hero-250909_big.jpg.large.jpg"
    }

];


// ======================================================
// КОРЗИНА
// ======================================================

let cart = JSON.parse(
    localStorage.getItem("forever_cart") || "[]"
);


function money(value) {
    return RUB.format(value);
}


function saveCart() {

    localStorage.setItem(
        "forever_cart",
        JSON.stringify(cart)
    );
}


// ======================================================
// РЕНДЕР ТОВАРОВ
// ======================================================

function renderProducts(list = products) {

    const container =
        document.getElementById("products");

    if (!container) return;

    container.innerHTML = "";

    list.forEach(product => {

        const storageBadge =
            product.storage
                ? `<span class="storage-badge">${product.storage}</span>`
                : "";

        container.innerHTML += `

            <article
                class="product"
                id="product-${product.id}"
            >

                <div class="product-image">

                    ${storageBadge}

                    <img
                        src="${product.image}"
                        alt="${product.name} ${product.storage}"
                        loading="lazy"
                    >

                </div>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <div class="price">
                    ${money(product.price)}
                </div>

                <button
                    class="add"
                    data-product-id="${product.id}"
                    onclick="addToCart(${product.id}, this)"
                >
                    <span class="add-icon">+</span>
                    <span class="add-text">
                        В корзину
                    </span>
                </button>

            </article>
        `;
    });
}


// ======================================================
// АНИМАЦИЯ ДОБАВЛЕНИЯ
// ======================================================

function addToCart(id, button) {

    const product =
        products.find(
            product => product.id === id
        );

    if (!product) return;


    // Добавляем в корзину

    const existing =
        cart.find(
            item => item.id === id
        );


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


    // ================================================
    // АНИМАЦИЯ КНОПКИ
    // ================================================

    if (button) {

        button.classList.remove(
            "added"
        );

        // Перезапускаем animation
        void button.offsetWidth;

        button.classList.add(
            "added"
        );

        const text =
            button.querySelector(
                ".add-text"
            );

        const icon =
            button.querySelector(
                ".add-icon"
            );

        if (text) {
            text.textContent =
                "Добавлено ✓";
        }

        if (icon) {
            icon.textContent = "✓";
        }

        setTimeout(() => {

            if (text) {
                text.textContent =
                    "В корзину";
            }

            if (icon) {
                icon.textContent = "+";
            }

            button.classList.remove(
                "added"
            );

        }, 1200);
    }


    // ================================================
    // АНИМАЦИЯ КАРТОЧКИ
    // ================================================

    const card =
        document.getElementById(
            `product-${id}`
        );

    if (card) {

        card.classList.remove(
            "product-added"
        );

        void card.offsetWidth;

        card.classList.add(
            "product-added"
        );

        setTimeout(() => {

            card.classList.remove(
                "product-added"
            );

        }, 700);
    }


    // ================================================
    // АНИМАЦИЯ КОРЗИНЫ
    // ================================================

    const cartButton =
        document.querySelector(
            ".cart-button"
        );

    if (cartButton) {

        cartButton.classList.remove(
            "cart-bounce"
        );

        void cartButton.offsetWidth;

        cartButton.classList.add(
            "cart-bounce"
        );
    }


    // ================================================
    // HAPTIC TELEGRAM
    // ================================================

    if (tg.HapticFeedback) {

        tg.HapticFeedback
            .impactOccurred("light");
    }
}


// ======================================================
// ПОЛУЧЕНИЕ ТОВАРОВ КОРЗИНЫ
// ======================================================

function getCartProducts() {

    return cart
        .map(item => {

            const product =
                products.find(
                    p => p.id === item.id
                );

            if (!product) {
                return null;
            }

            return {
                ...product,
                qty: item.qty
            };

        })
        .filter(Boolean);
}


// ======================================================
// ОБНОВЛЕНИЕ КОРЗИНЫ
// ======================================================

function updateCart() {

    const cartProducts =
        getCartProducts();

    const count =
        cartProducts.reduce(
            (sum, item) =>
                sum + item.qty,
            0
        );


    const cartCount =
        document.getElementById(
            "cartCount"
        );

    if (cartCount) {

        cartCount.textContent =
            count;
    }


    const items =
        document.getElementById(
            "cartItems"
        );

    const empty =
        document.getElementById(
            "emptyCart"
        );

    const checkoutButton =
        document.getElementById(
            "checkoutButton"
        );


    if (!items) return;


    items.innerHTML = "";

    let total = 0;


    cartProducts.forEach(product => {

        const subtotal =
            product.price *
            product.qty;

        total += subtotal;


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
                        ${product.storage
                            ? ` · ${product.storage}`
                            : ""
                        }
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
        document.getElementById(
            "cartTotal"
        );

    const checkoutTotal =
        document.getElementById(
            "checkoutTotal"
        );


    if (cartTotal) {
        cartTotal.textContent =
            money(total);
    }

    if (checkoutTotal) {
        checkoutTotal.textContent =
            money(total);
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


// ======================================================
// КОЛИЧЕСТВО
// ======================================================

function changeQty(id, delta) {

    const item =
        cart.find(
            item => item.id === id
        );

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


// ======================================================
// УДАЛЕНИЕ
// ======================================================

function removeFromCart(id) {

    cart = cart.filter(
        item => item.id !== id
    );

    saveCart();

    updateCart();
}


// ======================================================
// ОТКРЫТЬ КОРЗИНУ
// ======================================================

function openCart() {

    updateCart();

    const modal =
        document.getElementById(
            "cartModal"
        );

    if (modal) {

        modal.classList.remove(
            "hidden"
        );
    }
}


// ======================================================
// ЗАКРЫТЬ КОРЗИНУ
// ======================================================

function closeCart() {

    const modal =
        document.getElementById(
            "cartModal"
        );

    if (modal) {

        modal.classList.add(
            "hidden"
        );
    }
}


// ======================================================
// ФИЛЬТРЫ
// ======================================================

function filterProducts(
    category,
    button
) {

    document
        .querySelectorAll(".category")
        .forEach(btn => {

            btn.classList.remove(
                "active"
            );
        });


    button.classList.add(
        "active"
    );


    if (category === "all") {

        renderProducts(
            products
        );

    } else {

        renderProducts(
            products.filter(
                product =>
                    product.category === category
            )
        );
    }
}


// ======================================================
// TELEGRAM USER
// ======================================================

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

        nameElement.textContent =
            name;
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
                        object-fit:cover;
                    "
                >
            `;
        }
    }
}


// ======================================================
// CHECKOUT
// ======================================================

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

        modal.classList.remove(
            "hidden"
        );
    }
}


// ======================================================
// ЗАКРЫТЬ CHECKOUT
// ======================================================

function closeCheckout() {

    const modal =
        document.getElementById(
            "checkoutModal"
        );


    if (modal) {

        modal.classList.add(
            "hidden"
        );
    }
}


// ======================================================
// ОТПРАВКА ЗАКАЗА
// ======================================================

function submitOrder() {

    const name =
        document
            .getElementById(
                "customerName"
            )
            .value
            .trim();


    const phone =
        document
            .getElementById(
                "customerPhone"
            )
            .value
            .trim();


    const comment =
        document
            .getElementById(
                "customerComment"
            )
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
        cartProducts.map(
            product => ({

                id: product.id,

                name: product.name,

                storage:
                    product.storage,

                description:
                    product.description,

                price:
                    product.price,

                quantity:
                    product.qty,

                subtotal:
                    product.price *
                    product.qty

            })
        );


    const total =
        items.reduce(
            (sum, item) =>
                sum + item.subtotal,
            0
        );


    const order = {

        type:
            "forever_shop_order",

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

            name:
                name,

            phone:
                phone,

            comment:
                comment
        },

        items:
            items,

        total:
            total,

        currency:
            "RUB"
    };


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
        "Заказ отправлен! Мы свяжемся с вами для подтверждения."
    );


    setTimeout(() => {

        tg.close();

    }, 800);
}


// ======================================================
// ЗАПУСК
// ======================================================

renderProducts();

updateCart();

fillTelegramUser();
