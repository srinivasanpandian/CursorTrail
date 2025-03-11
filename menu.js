// Menu data
const menuData = {
    breakfast: [
        {
            title: "Classic Breakfast",
            price: "$115",
            description: "Ipsum ipsum clita erat amet dolor justo diam",
            image: "img/about11.jpg"
        },
        {
            title: "Eggs Benedict",
            price: "$115",
            description: "Ipsum ipsum clita erat amet dolor justo diam",
            image: "img/about11.jpg"
        },
        {
            title: "Breakfast Platter",
            price: "$115",
            description: "Ipsum ipsum clita erat amet dolor justo diam",
            image: "img/pannacata.avif"
        },
        {
            title: "French Toast",
            price: "$115",
            description: "Ipsum ipsum clita erat amet dolor justo diam",
            image: "img/about11.jpg"
        }
    ],
    lunch: [
        {
            title: "Chicken Burger",
            price: "$115",
            description: "Ipsum ipsum clita erat amet dolor justo diam",
            image: "img/lunch-1.jpg"
        },
        {
            title: "Grilled Salmon",
            price: "$115",
            description: "Ipsum ipsum clita erat amet dolor justo diam",
            image: "img/lunch-2.jpg"
        },
        {
            title: "Caesar Salad",
            price: "$115",
            description: "Ipsum ipsum clita erat amet dolor justo diam",
            image: "img/lunch-3.jpg"
        },
        {
            title: "Steak Sandwich",
            price: "$115",
            description: "Ipsum ipsum clita erat amet dolor justo diam",
            image: "img/lunch-4.jpg"
        }
    ],
    dinner: [
        {
            title: "Grilled Steak",
            price: "$115",
            description: "Ipsum ipsum clita erat amet dolor justo diam",
            image: "img/dinner-1.jpg"
        },
        {
            title: "Seafood Pasta",
            price: "$115",
            description: "Ipsum ipsum clita erat amet dolor justo diam",
            image: "img/dinner-2.jpg"
        },
        {
            title: "Roast Chicken",
            price: "$115",
            description: "Ipsum ipsum clita erat amet dolor justo diam",
            image: "img/dinner-3.jpg"
        },
        {
            title: "Fish & Chips",
            price: "$115",
            description: "Ipsum ipsum clita erat amet dolor justo diam",
            image: "img/dinner-4.jpg"
        }
    ]
};

// Function to create menu item HTML
function createMenuItem(item) {
    return `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${item.title}</h3>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
            </div>
        </div>
    `;
}

// Function to populate menu items
function populateMenuItems(category) {
    const menuContainer = document.getElementById(category);
    const items = menuData[category];
    menuContainer.innerHTML = items.map(item => createMenuItem(item)).join('');
}

// Initialize all menu categories
populateMenuItems('breakfast');
populateMenuItems('lunch');
populateMenuItems('dinner');

// Tab functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const menuItems = document.querySelectorAll('.menu-items');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;

            // Update active states
            tabButtons.forEach(btn => btn.classList.remove('active'));
            menuItems.forEach(item => item.classList.remove('active'));

            // Set new active states
            button.classList.add('active');
            document.getElementById(category).classList.add('active');
        });
    });
}); 