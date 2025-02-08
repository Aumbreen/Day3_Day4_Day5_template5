'use client';

import { useState } from 'react';

const LoginForm = ({ toggleLoginModal }: { toggleLoginModal: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUpAlert, setIsSignUpAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple form validation (you can extend this)
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    // Handle login logic here (e.g., call API)
    console.log('Logging in with', { email, password });
    setError('');
    setIsSignUpAlert(true); // Show alert if login fails (example logic)

    // If you successfully log in, you can redirect or update the UI accordingly
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
      <button
        onClick={toggleLoginModal}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        X
      </button>

      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {isSignUpAlert && (
        <div className="bg-yellow-100 text-yellow-800 text-sm text-center p-3 mb-4 rounded-md">
          You are not signed up. Please create an account.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4 flex justify-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
