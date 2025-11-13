function Products() {
  const products = [
    {
      name: "Wireless Headphones",
      price: "₦25,000",
      image:
        "https://i.pinimg.com/1200x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg",
    },
    {
      name: "Smart Watch",
      price: "₦15,000",
      image:
        "https://i.pinimg.com/736x/a3/04/e7/a304e729bdd7b1b1f7fc316c4aec3201.jpg",
    },
    {
      name: "Sneakers",
      price: "₦20,000",
      image:
        "https://i.pinimg.com/1200x/f3/b0/73/f3b07330dc98e885e639353e38e49300.jpg",
    },
    {
      name: "Laptop",
      price: "₦250,000",
      image:
        "https://i.pinimg.com/736x/c9/af/43/c9af431cdb9322e4ff4a43af70db96ae.jpg",
    },
    {
      name: "Backpack",
      price: "₦12,000",
      image:
        "https://i.pinimg.com/1200x/89/f9/5a/89f95a14d35eda44b3eb002f9025b76d.jpg",
    },
    {
      name: "Gaming Console",
      price: "₦120,000",
      image:
        "https://i.pinimg.com/736x/71/b1/86/71b186cc2e0825a62714de7626e3235d.jpg",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((prod, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition"
          >
            <img
              src={prod.image}
              alt={prod.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-700">{prod.name}</h3>
              <p className="text-blue-600 font-bold mt-2">{prod.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
