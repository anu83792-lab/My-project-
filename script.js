
const products = [
    {
        id: 1,
        name: "Banarasi Silk Saree",
        category: "women",
        price: 2999,
        originalPrice: 5999,
        discount: 50,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        description: "Pure Banarasi silk saree with zari work"
    },
    {
        id: 2,
        name: "Designer Lehenga Choli",
        category: "women",
        price: 4999,
        originalPrice: 9999,
        discount: 50,
        image: "image.png",
        description: "Wedding collection lehenga"
    },
    {
        id: 3,
        name: "Cotton Kurti with Dupatta",
        category: "women",
        price: 899,
        originalPrice: 1799,
        discount: 50,
        image: "cotton.png",
        description: "Printed cotton kurti set"
    },
    {
        id: 4,
        name: "Party Wear Gown",
        category: "women",
        price: 1999,
        originalPrice: 3999,
        discount: 50,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        description: "Floor length evening gown"
    },

    {
        id: 5,
        name: "Sherwani for Wedding",
        category: "men",
        price: 3999,
        originalPrice: 7999,
        discount: 50,
        image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        description: "Designer wedding sherwani"
    },
    {
        id: 6,
        name: "Cotton Kurta Pyjama",
        category: "men",
        price: 1299,
        originalPrice: 2499,
        discount: 48,
        image: "pyjama.png",
        description: "Festival wear kurta set"
    },
    {
        id: 7,
        name: "Denim Jacket",
        category: "men",
        price: 1499,
        originalPrice: 2999,
        discount: 50,
        image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        description: "Men's casual denim jacket"
    },
    {
        id: 8,
        name: "Casual Shirt",
        category: "men",
        price: 699,
        originalPrice: 1399,
        discount: 50,
        image: "shirt.png",
        description: "Linen casual shirt"
    },

    {
        id: 9,
        name: "Kids Ethnic Set",
        category: "kids",
        price: 999,
        originalPrice: 1999,
        discount: 50,
        image: "ethnic.png",
        description: "Traditional wear for kids"
    },
    {
        id: 10,
        name: "Kids Party Wear",
        category: "kids",
        price: 1299,
        originalPrice: 2499,
        discount: 48,
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        description: "Beautiful party dress for girls"
    },
    {
        id: 11,
        name: "Kids Jeans & T-shirt",
        category: "kids",
        price: 599,
        originalPrice: 1199,
        discount: 50,
        image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        description: "Casual wear combo"
    },
    {
        id: 12,
        name: "Kids Footwear",
        category: "kids",
        price: 499,
        originalPrice: 999,
        discount: 50,
        image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        description: "Comfortable sandals for kids"
    },
    {
        id: 13,
        name: "Gold Plated Necklace",
        category: "accessories",
        price: 1999,
        originalPrice: 3999,
        discount: 50,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        description: "Traditional gold plated jewelry"
    },
    {
        id: 14,
        name: "Leather Handbag",
        category: "accessories",
        price: 1499,
        originalPrice: 2999,
        discount: 50,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        description: "Genuine leather handbag"
    },
    {
        id: 15,
        name: "Analog Watch",
        category: "accessories",
        price: 2499,
        originalPrice: 4999,
        discount: 50,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        description: "Premium analog watch"
    },
    {
        id: 16,
        name: "Juttis (Footwear)",
        category: "accessories",
        price: 799,
        originalPrice: 1599,
        discount: 50,
        image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        description: "Traditional embroidered juttis"
    }
];

function formatIndianPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProducts = [...products];
const productGrid = document.getElementById('productGrid');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartIcon = document.getElementById('cartIcon');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const sortSelect = document.getElementById('sortProducts');

function displayProducts(productsToShow) {
    productGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const discount = product.discount || Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        card.innerHTML = `
            <div class="product-badge">${discount}% OFF</div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">${formatIndianPrice(product.price)}</span>
                    <span class="original-price">${formatIndianPrice(product.originalPrice)}</span>
                    <span class="discount">${discount}% off</span>
                </div>
                <button class="add-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`${product.name} added to cart!`);
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCartItems();
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

function displayCartItems() {
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p class="cart-item-price">${formatIndianPrice(item.price)}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(itemDiv);
    });
    
    cartTotal.textContent = formatIndianPrice(total);
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('Item removed from cart');
}

function filterProducts(category) {
    if (category === 'all') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(p => p.category === category);
    }
    displayProducts(currentProducts);

    showNotification(`Showing ${category} products`);
}

function sortProducts(type) {
    let sorted = [...currentProducts];
    
    if (type === 'price-low') {
        sorted.sort((a, b) => a.price - b.price);
    } else if (type === 'price-high') {
        sorted.sort((a, b) => b.price - a.price);
    } else if (type === 'popular') {
       
        sorted = [...currentProducts];
    }
    
    displayProducts(sorted);
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`Order placed successfully! Total: ${formatIndianPrice(total)}`);
    cart = [];
    updateCart();
    cartModal.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', () => {
    // Display products
    displayProducts(products);
    updateCartCount();
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            cartModal.classList.add('show');
            displayCartItems();
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('show');
        });
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            sortProducts(e.target.value);
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('show');
        }
    });
    
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuIcon && mobileMenu) {
        mobileMenuIcon.addEventListener('click', () => {
            mobileMenu.classList.toggle('show');
        });
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            if (mobileMenu) {
                mobileMenu.classList.remove('show');
            }
        });
    });
   
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Message sent successfully! We\'ll contact you soon.');
            this.reset();
        });
    }
    
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            showNotification(`Thank you for subscribing! Check your inbox: ${email}`);
            this.reset();
        });
    }
    
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
            
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
        });
    });
    
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});