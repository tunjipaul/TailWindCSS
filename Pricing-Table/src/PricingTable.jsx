import React from "react";

function PricingTable() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
        Product Pricing Plans
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Basic Plan */}
        <div className="flex-1 min-w-[250px] max-w-sm border rounded-xl p-6 text-center shadow-sm hover:scale-105 hover:shadow-lg transition-transform duration-300 text-white/100 font-bold">
          <h3 className="text-xl font-semibold mb-4">Basic</h3>
          <p className="text-2xl font-bold mb-4">₦5,000/month</p>
          <ul className="mb-6 space-y-2">
            <li> - Publish up to 5 political articles per month</li>
            <li> - Basic analytics (views, likes)</li>
            <li> - Standard theme customization</li>
          </ul>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Choose Plan
          </button>
        </div>

        {/* Pro Plan (Highlighted) */}
        <div className="flex-1 min-w-[250px] max-w-sm border rounded-xl p-6 text-center shadow-sm hover:scale-105 hover:shadow-lg transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4">Pro</h3>
          <p className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-800">
            ₦15,000/month
          </p>
          <ul className="mb-6 space-y-2 text-white-500">
            <li> - Unlimited article publishing</li>
            <li> - Advanced analytics (demographics, engagement trends)</li>
            <li> - Custom themes and branding</li>
            <li> - Comment moderation tools</li>
          </ul>
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
            Choose Plan
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="flex-1 min-w-[250px] max-w-sm border rounded-xl p-6 text-center shadow-sm hover:scale-105 hover:shadow-lg transition-transform duration-300 text-white/100 font-bold">
          <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
          <p className="text-2xl font-bold mb-4">₦50,000/month</p>
          <ul className="mb-6 space-y-2">
            <li> - All Pro features</li>
            <li> - Multi-author support and team management</li>
            <li> - Priority support</li>
            <li> - Custom API access for integrations</li>
            <li> - Custom domain support</li>
          </ul>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingTable;
