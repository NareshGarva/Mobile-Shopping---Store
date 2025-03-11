document.getElementById("userOfferCategoryProductSlider").innerHTML = `
<section>
<div class="container">
<div class="User-section-title d-flex justify-content-between align-items-center">
  <h5>Best of us <strong class="User-section-title-strong">Products</strong></h5>
  <a class="user-title-view-all">View all <img src="" alt=""></a>
</div>
    
    <!-- Navigation Menu -->
    <div class="category-menu-slider">
        <a href="#" class="category-link active" data-category="New Arrivals">New Arrivals</a>
        <a href="#" class="category-link" data-category="Live Sell">Live Sell</a>
        <a href="#" class="category-link" data-category="Best Seller">Best Seller</a>

        
    </div>

    <!-- Product Grid -->
    <div id="product-container" class="row g-3">
        <!-- Products will be dynamically inserted here -->
    </div>
</div>
</section>
`;




    // Product data for different categories
    const productData = {
        "New Arrivals": [
            { name: "Galaxy S25 Series", price: "₹9000* bank discount", img: "https://picsum.photos/200?random=1", tag: "New", variants: ["#ff0000", "#00ff00", "#0000ff"] },
            { name: "Galaxy Tab S10", price: "Starting ₹3000/mo.*", img: "https://picsum.photos/200?random=2", tag: "Sell", variants: ["#555555", "#aaaaaa"] },
            { name: "465 L BESPOKE AI", price: "Save up to ₹9500*", img: "https://picsum.photos/200?random=3", variants: ["#ff9900", "#ff6600"] },
            { name: "Galaxy S24 FE", price: "Starting ₹44999*", img: "https://picsum.photos/200?random=4", tag: "Hot", variants: ["#000000", "#ffffff"] },
            { name: "Music Frame", price: "₹3000* bank discount", img: "https://picsum.photos/200?random=5", tag: "New", variants: ["#888888", "#444444"] }
        ],
        "Best Seller": [
            { name: "Galaxy Z Fold 5", price: "Save up to ₹15000*", img: "https://picsum.photos/200?random=6", tag: "New", variants: ["#111111", "#222222"] },
            { name: "Galaxy A54", price: "Starting ₹29999*", img: "https://picsum.photos/200?random=7", variants: ["#ff9900", "#ff6600"] },
            { name: "Galaxy S24 Ultra", price: "₹1,24,999*", img: "https://picsum.photos/200?random=8", tag: "Trending", variants: ["#0044ff", "#00ff44"] },
            { name: "Galaxy M14", price: "₹18,999*", img: "https://picsum.photos/200?random=9", variants: ["#990099", "#999999"] }
        ]
    };

    // Function to render products based on category
    function renderProducts(category) {
        const container = document.getElementById("product-container");
        container.innerHTML = "";

        productData[category].forEach((product, index) => {
            let badgeHTML = product.tag ? `<div class="product-badge">${product.tag}</div>` : "";
            let variantsHTML = product.variants ? product.variants.map(color => `<div class="variant" style="background:${color}"></div>`).join("") : "";

            let productHTML;
            if (index === 0) {
                // First product in flex layout
                productHTML = `
                    <div class="col-12">
                        <div class="category-product-card flex-card">

<img src="${product.img}" alt="${product.name}">
                            
                            
                            ${badgeHTML }
                            <div class="flex-text">
                                               
                                                
                                <h5>${product.name}</h5>
                                
                                <p>${product.price}</p>

                            </div>
                        </div>
                    </div>
                `;
            } else {
                // Other products in grid layout
                productHTML = `
                    <div class="col-6">
                        <div class="category-product-card">

                            ${badgeHTML}                 <div class="product-variants">${variantsHTML}</div>

                            <img src="${product.img}" alt="${product.name}">
                            <h5>${product.name}</h5>
                            <p>${product.price}</p>

                        </div>
                    </div>
                `;
            }
            
            container.innerHTML += productHTML;
        });
    }

    // Category click event
    document.querySelectorAll(".category-link").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelectorAll(".category-link").forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("data-category");
            renderProducts(category);
        });
    });

    // Load default category on page load
    renderProducts("New Arrivals");