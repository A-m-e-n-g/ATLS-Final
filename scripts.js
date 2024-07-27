document.addEventListener('DOMContentLoaded', () => {
    const menuItems = {
        noodles: [
            { name: 'Beef Noodles', img: 'beef-noodles.jpg' },
            { name: 'Chicken Noodles', img: 'chicken-noodles.jpg' },
            { name: 'Vegetable Noodles', img: 'vegetable-noodles.jpg' }
        ],
        rice: [
            { name: 'Fried Rice', img: 'fried-rice.jpg' },
            { name: 'Steamed Rice', img: 'steamed-rice.jpg' },
            { name: 'Brown Rice', img: 'brown-rice.jpg' }
        ],
        vegetarian: [
            { name: 'Vegetable Stir Fry', img: 'vegetable-stir-fry.jpg' },
            { name: 'Tofu Salad', img: 'tofu-salad.jpg' },
            { name: 'Vegetable Soup', img: 'vegetable-soup.jpg' }
        ],
        dumplings: [
            { name: 'Pork Dumplings', img: 'pork-dumplings.jpg' },
            { name: 'Chicken Dumplings', img: 'chicken-dumplings.jpg' },
            { name: 'Vegetable Dumplings', img: 'vegetable-dumplings.jpg' }
        ],
        sides: [
            { name: 'Spring Rolls', img: 'spring-rolls.jpg' },
            { name: 'Edamame', img: 'edamame.jpg' },
            { name: 'Potstickers', img: 'potstickers.jpg' }
        ],
        drinks: [
            { name: 'Green Tea', img: 'green-tea.jpg' },
            { name: 'Bubble Tea', img: 'bubble-tea.jpg' },
            { name: 'Soda', img: 'soda.jpg' }
        ]
    };

    const menuButtons = document.querySelectorAll('.menu-button');
    const menuItemsContainer = document.getElementById('menu-items');

    menuButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const category = event.target.getAttribute('data-category');
            populateMenuItems(category);
        });
    });

    function populateMenuItems(category) {
        menuItemsContainer.innerHTML = '';
        menuItems[category].forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.className = 'menu-item';
            menuItemDiv.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <p>${item.name}</p>
            `;
            menuItemsContainer.appendChild(menuItemDiv);
        });
    }

    // Populate with the first category by default
    populateMenuItems('noodles');
});
