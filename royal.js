
        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
            mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            });
        });
        
        // Menu Data
        const menuData = [
            {
                id: 1,
                name: "Royale Espresso",
                price: "Rs. 200",
                category: "coffee",
                image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                description: "Strong and aromatic espresso, our signature coffee."
            },
            {
                id: 2,
                name: "Cappuccino Royale",
                price: "Rs. 250",
                category: "coffee",
                image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
                description: "Perfectly balanced cappuccino with creamy foam."
            },
            {
                id: 3,
                name: "Nepali Masala Chiya",
                price: "Rs. 150",
                category: "tea",
                image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                description: "Traditional Nepali tea with aromatic spices."
            },
            {
                id: 4,
                name: "Fresh Croissant",
                price: "Rs. 180",
                category: "pastries",
                image: "https://images.unsplash.com/photo-1555507036-ab794f27d2e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
                description: "Buttery, flaky croissant baked fresh daily."
            },
            {
                id: 5,
                name: "Blueberry Muffin",
                price: "Rs. 200",
                category: "pastries",
                image: "https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                description: "Moist muffin packed with fresh blueberries."
            },
            {
                id: 6,
                name: "Club Sandwich",
                price: "Rs. 350",
                category: "meals",
                image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
                description: "Triple-decker sandwich with chicken, bacon, and veggies."
            },
            {
                id: 7,
                name: "Iced Latte",
                price: "Rs. 280",
                category: "coffee",
                image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                description: "Chilled latte perfect for Nepalgunj's warm days."
            },
            {
                id: 8,
                name: "Momo Platter",
                price: "Rs. 320",
                category: "meals",
                image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
                description: "Steamed dumplings with chicken or vegetable filling."
            }
        ];
        
        // Function to display menu items
        function displayMenuItems(category = 'all') {
            const menuItemsContainer = document.getElementById('menuItems');
            menuItemsContainer.innerHTML = '';
            
            const filteredItems = category === 'all' 
                ? menuData 
                : menuData.filter(item => item.category === category);
            
            filteredItems.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';
                menuItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="menu-item-content">
                        <div class="menu-item-header">
                            <div class="menu-item-name">${item.name}</div>
                            <div class="menu-item-price">${item.price}</div>
                        </div>
                        <p>${item.description}</p>
                    </div>
                `;
                menuItemsContainer.appendChild(menuItem);
            });
        }
        
        // Initialize menu with all items
        displayMenuItems();
        
        // Category filter functionality
        document.querySelectorAll('.category-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get category and display items
                const category = this.getAttribute('data-category');
                displayMenuItems(category);
            });
        });
        
        // Form submission
        document.getElementById('messageForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });
   