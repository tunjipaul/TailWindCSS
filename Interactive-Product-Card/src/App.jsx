import ProductCard from "./ProductCard";

function App() {
  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-gray-300 p-4 ">
      <h1 className="text-3xl font-bold mb-8 hover:text-red-700 transition-colors duration-1000">Interactive <span className="text-blue-500 hover:text-yellow-600 transition-colors duration-1000 ">Product</span> Card</h1>
      <ProductCard
        image="https://i.pinimg.com/736x/6e/d5/ab/6ed5ab033afb2c3c0364d5602ab50ee6.jpg"
        name="Brogues for Smart Men"
        price="30,000"
      />
    </div>
  );
}

export default App;
