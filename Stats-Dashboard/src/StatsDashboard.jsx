import {
  FaShoppingCart,
  FaUsers,
  FaMoneyBillWave,
  FaBox,
} from "react-icons/fa";

function StatsDashboard() {
  const stats = [
    {
      title: "Total Sales",
      value: "₦2.5M",
      change: "+12%",
      icon: <FaMoneyBillWave className="text-3xl text-green-600" />,
      color: "bg-green-100 hover:bg-green-200",
    },
    {
      title: "Orders",
      value: "1,234",
      change: "+8%",
      icon: <FaBox className="text-3xl text-blue-600" />,
      color: "bg-blue-100 hover:bg-blue-200",
    },
    {
      title: "Customers",
      value: "567",
      change: "+23%",
      icon: <FaUsers className="text-3xl text-yellow-600" />,
      color: "bg-yellow-100 hover:bg-yellow-200",
    },
    {
      title: "Revenue",
      value: "₦4.2M",
      change: "+15%",
      icon: <FaShoppingCart className="text-3xl text-purple-600" />,
      color: "bg-purple-100 hover:bg-purple-200",
    },
  ];

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-6">
        Stats <span className="text-orange-500">Dashboard</span>
      </h1>
      <div className="flex items-center justify-center bg-gray-100 px-20 py-20 rounded-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md ${item.color} transition-transform transform hover:-translate-y-2`}
            >
              <div className="flex items-center justify-between mb-4">
                {item.icon}
                <span className="text-sm text-gray-600">{item.change} ↑</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                {item.title}
              </h3>
              <p className="text-2xl font-bold text-gray-800">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsDashboard;
