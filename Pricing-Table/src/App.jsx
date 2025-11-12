import PricingTable from "./PricingTable";

function App() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/72/2d/41/722d410fd57badf142ae2237338a5530.jpg')",
      }}>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-white">
        <PricingTable />
      </div>
    </div>
  );
}

export default App;
