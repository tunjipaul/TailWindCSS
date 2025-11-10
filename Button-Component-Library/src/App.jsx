import ButtonComponent from "./ButtonComponent";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center space-y-4 w-128">
        <ButtonComponent type="primary">Primary</ButtonComponent>
        <ButtonComponent type="secondary">Secondary</ButtonComponent>
        <ButtonComponent type="danger">Danger</ButtonComponent>
        <ButtonComponent type="success">Success</ButtonComponent>
        <ButtonComponent type="large">Large</ButtonComponent>
        <ButtonComponent type="small">Small</ButtonComponent>
      </div>
    </div>
  );
}

export default App;
