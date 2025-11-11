function ProductGrid() {
    const products = [
        {
            name: "Jollof Rice",
            price: "₦1,500",
            image:
                "https://i.pinimg.com/736x/82/c5/72/82c572fc01e453e5bd1c4b9eea5161d1.jpg",
        },
        {
            name: "Ankara Fabric",
            price: "₦5,000",
            image:
                "https://i.pinimg.com/1200x/23/f2/0f/23f20fe7d8c365a2595a832c12295d99.jpg",
        },
        {
            name: "Suya",
            price: "₦1,000",
            image:
                "https://i.pinimg.com/736x/73/c8/4d/73c84df93a770108f50657de2f6b6900.jpg",
        },
        {
            name: "Aso-Ebi",
            price: "₦15,000",
            image:
                "https://i.pinimg.com/736x/db/81/7b/db817b5bfb8b36a35b496328347ff58b.jpg",
        },
        {
            name: "Palm Wine",
            price: "₦1,200",
            image:
                "https://i.pinimg.com/736x/a2/8b/90/a28b90cd971ba4a8ce9711eba8070b45.jpg",
        },
        {
            name: "Agbada",
            price: "₦25,000",
            image:
                "https://i.pinimg.com/736x/37/4f/e9/374fe9752567948a6f1a070455e15023.jpg",
        },
        {
            name: "Chin Chin",
            price: "₦500",
            image:
                "https://i.pinimg.com/736x/8c/43/51/8c43517573225c2ba7b4eb857acf5c2d.jpg",
        },
        {
            name: "Puff Puff",
            price: "₦300",
            image:
                "https://i.pinimg.com/736x/ff/ac/b6/ffacb64af7c22a7e2060e454a0d75e90.jpg",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((item, index) => (
                <div
                    key={index}
                    className="bg-white border rounded-xl p-4 shadow hover:shadow-xl hover:scale-105 transition-transform duration-300"
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded mb-3"
                    />
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-green-600 font-bold">{item.price}</p>
                    <button className="w-full bg-orange-600 text-white py-2 rounded mt-3 hover:bg-orange-700 hover:scale-105 hover:shadow-lg transition duration-300 hover:text-green-400">
                        Buy Now
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ProductGrid;
