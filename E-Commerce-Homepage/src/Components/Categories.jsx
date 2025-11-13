function Categories() {
  const categories = [
    {
      name: "Electronics",
      image:
        "https://i.pinimg.com/1200x/98/fd/5a/98fd5aaec71222f0931b067dc89bb1cc.jpg",
    },
    {
      name: "Fashion",
      image:
        "https://i.pinimg.com/1200x/2f/f8/5f/2ff85f7cb451b8d6190552907779b9f3.jpg",
    },
    {
      name: "Home",
      image:
        "https://i.pinimg.com/736x/4a/aa/e6/4aaae69abeb27ed2c014598a06924270.jpg",
    },
    {
      name: "Sports",
      image:
        "https://i.pinimg.com/736x/0d/b3/dc/0db3dcaf41f4ec6d19accfd1ec87f5be.jpg",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover"
            />
            <h3 className="text-center py-4 font-semibold text-gray-700">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
