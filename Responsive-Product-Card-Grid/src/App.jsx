import ProductGrid from "./ProductGrid";

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">
        Product Grid<span className="text-orange-400"> Card</span>
      </h1>
      <ProductGrid />
    </div>
  );
}

export default App;
