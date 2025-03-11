const products = [
    {
        id: "p1",
        name: "iPhone 14 Pro",
        category: "Mobile",
        brand: "Apple",
        originalPrice: 1399,
        sellingPrice: 1299,
        images: [
            "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-hero-220907.jpg",
            "https://m-cdn.phonearena.com/images/article/147702-wide-two_1200/Apple-iPhone-14-Pro-review.jpg"
        ],
        description: "Apple iPhone 14 Pro with A16 Bionic Chip and Dynamic Island.",
        variants: {
            color: ["Deep Purple", "Silver", "Gold", "Space Black"],
            storage: ["128GB", "256GB", "512GB", "1TB"]
        },
        rating: 4.8,
        reviews: [
            { user: "John D.", comment: "Amazing phone with a great camera!", rating: 5 }
        ],
        stock: 15,
        warranty: "1 Year"
    },
    {
        id: "p2",
        name: "Samsung Galaxy S23 Ultra",
        category: "Mobile",
        brand: "Samsung",
        originalPrice: 1299,
        sellingPrice: 1199,
        images: [
            "https://images.samsung.com/is/image/samsung/p6pim/in/2302/gallery/in-galaxy-s23-s918-sm-s918bzghins-thumb-534494293?$172_172_PNG$"
        ],
        description: "Samsung Galaxy S23 Ultra with Snapdragon 8 Gen 2 and 200MP camera.",
        variants: {
            color: ["Phantom Black", "Cream", "Green", "Lavender"],
            storage: ["256GB", "512GB", "1TB"],
            ram: ["8GB", "12GB"]
        },
        rating: 4.7,
        reviews: [{ user: "Mike T.", comment: "Best camera on a smartphone!", rating: 5 }],
        stock: 20,
        warranty: "1 Year"
    },
    {
        id: "p3",
        name: "OnePlus 11",
        category: "Mobile",
        brand: "OnePlus",
        originalPrice: 899,
        sellingPrice: 849,
        images: [
            "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/OnePlus_11_Review.jpg"
        ],
        description: "OnePlus 11 with Hasselblad Camera and Snapdragon 8 Gen 2.",
        variants: {
            color: ["Titan Black", "Eternal Green"],
            storage: ["128GB", "256GB"],
            ram: ["8GB", "12GB"]
        },
        rating: 4.5,
        reviews: [{ user: "Alex P.", comment: "Great flagship killer!", rating: 5 }],
        stock: 18,
        warranty: "1 Year"
    },
    {
        id: "p4",
        name: "MacBook Air M2",
        category: "Laptop",
        brand: "Apple",
        originalPrice: 1399,
        sellingPrice: 1299,
        images: [
            "https://www.apple.com/newsroom/images/2022/07/Apple-MacBook-Air-M2-Midnight-hero-220707.jpg"
        ],
        description: "Apple MacBook Air M2 with Retina Display and M2 Chip.",
        variants: {
            color: ["Silver", "Space Gray", "Midnight", "Starlight"],
            storage: ["256GB SSD", "512GB SSD"],
            ram: ["8GB", "16GB"]
        },
        rating: 4.9,
        reviews: [{ user: "David B.", comment: "Super lightweight and fast!", rating: 5 }],
        stock: 25,
        warranty: "1 Year"
    },
    {
        id: "p5",
        name: "Sony WH-1000XM5",
        category: "Accessories",
        brand: "Sony",
        originalPrice: 499,
        sellingPrice: 399,
        images: [
            "https://www.sony.com/image/0bade7cde5db167d5f1a52f50b7f2d68?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
        ],
        description: "Sony Noise Cancelling Wireless Headphones.",
        variants: {
            color: ["Black", "Silver"]
        },
        rating: 4.8,
        reviews: [{ user: "Jake M.", comment: "Best noise-canceling headphones!", rating: 5 }],
        stock: 30,
        warranty: "2 Years"
    },
    {
        id: "p6",
        name: "Dell XPS 15",
        category: "Laptop",
        brand: "Dell",
        originalPrice: 1799,
        sellingPrice: 1599,
        images: [
            "https://i.dell.com/sites/csimages/Video_Imagery/all/xps-15-laptop-9510-black.jpg"
        ],
        description: "Dell XPS 15 with Intel Core i7 and OLED Touch Display.",
        variants: {
            color: ["Platinum Silver", "Frost White"],
            storage: ["512GB SSD", "1TB SSD"],
            ram: ["16GB", "32GB"]
        },
        rating: 4.6,
        reviews: [{ user: "Mark H.", comment: "Amazing display quality!", rating: 5 }],
        stock: 10,
        warranty: "1 Year"
    },
    {
        id: "p7",
        name: "Asus ROG Zephyrus G14",
        category: "Laptop",
        brand: "Asus",
        originalPrice: 1599,
        sellingPrice: 1399,
        images: [
            "https://dlcdnwebimgs.asus.com/gain/0D5D79C5-91BB-4A41-ABBA-B676A8052F36"
        ],
        description: "Gaming laptop with Ryzen 9 and RTX 4060 GPU.",
        variants: {
            color: ["Moonlight White", "Eclipse Gray"],
            storage: ["512GB SSD", "1TB SSD"],
            ram: ["16GB", "32GB"]
        },
        rating: 4.7,
        reviews: [{ user: "GamerX", comment: "Perfect for gaming and portability!", rating: 5 }],
        stock: 12,
        warranty: "2 Years"
    },
    {
        id: "p8",
        name: "Samsung Galaxy Buds Pro",
        category: "Accessories",
        brand: "Samsung",
        originalPrice: 199,
        sellingPrice: 149,
        images: [
            "https://images.samsung.com/is/image/samsung/p6pim/uk/2202/gallery/uk-galaxy-buds-pro-sm-r190nzvabtu-thumb-477067914?$216_216_PNG$"
        ],
        description: "Samsung Galaxy Buds Pro with Active Noise Cancellation.",
        variants: {
            color: ["Phantom Black", "Phantom Silver", "Phantom Violet"]
        },
        rating: 4.5,
        reviews: [{ user: "Alice W.", comment: "Great sound and comfort!", rating: 5 }],
        stock: 50,
        warranty: "1 Year"
    },
    {
        id: "p9",
        name: "Lenovo Legion 5 Pro",
        category: "Laptop",
        brand: "Lenovo",
        originalPrice: 1599,
        sellingPrice: 1499,
        images: [
            "https://p4-ofp.static.pub/ShareResource/na/NA/2022-11-01T04-45-02/Masthead-4.jpg"
        ],
        description: "Gaming laptop with AMD Ryzen 7 and RTX 3070 Ti GPU.",
        variants: {
            color: ["Storm Gray"],
            storage: ["512GB SSD", "1TB SSD"],
            ram: ["16GB", "32GB"]
        },
        rating: 4.7,
        reviews: [{ user: "Tom G.", comment: "Great for gaming and content creation!", rating: 5 }],
        stock: 8,
        warranty: "2 Years"
    }
];

// Function to get product by ID
function getProductById(productId) {
    return products.find(product => product.id === productId);
}







// Get product by ID (e.g., iPhone 14 Pro)
const product = getProductById("p1");

if (product) {
    document.getElementById("product-title").textContent = product.name;
    document.getElementById("product-price").textContent = "$" + product.sellingPrice;
    document.getElementById("original-price").textContent = "$" + product.originalPrice;
    document.getElementById("product-brand").textContent = product.brand;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-warranty").textContent = product.warranty;
    document.getElementById("product-stock").textContent = product.stock > 0 ? "In Stock" : "Out of Stock";

    // Show images as a carousel
    let imageContainer = document.getElementById("product-images");
    product.images.forEach(img => {
        let imgElement = document.createElement("img");
        imgElement.src = img;
        imgElement.alt = product.name;
        imgElement.classList.add("carousel-image");
        imageContainer.appendChild(imgElement);
    });

    // Show reviews
    let reviewsContainer = document.getElementById("product-reviews");
    product.reviews.forEach(review => {
        let reviewElement = document.createElement("p");
        reviewElement.textContent = `${review.user}: ${review.comment} (${review.rating} ⭐)`;
        reviewsContainer.appendChild(reviewElement);
    });
}