import { useState } from "react";

function LoginForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 4000);
  };

  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-gray-200">
      <h1 className="mb-8 font-bold text-5xl">Professional Login Form</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-gray-700"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2 text-sm">Email</label>
          <input
            type="email"
            required
            placeholder="youremail@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2 text-sm">Password</label>
          <input
            type="password"
            required
            placeholder="Input your password..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-sm text-gray-600">
            <input type="checkbox" className="mr-2 accent-blue-600" />
            Remember me
          </label>
          <a
            href="#"
            className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-all duration-200"
          >
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700  transition-all duration-300 flex items-center justify-center"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
