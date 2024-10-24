import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users/login', credentials);
      localStorage.setItem('token', response.data.token);
      navigate('/profile');
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Image */}
      <div className="w-1/2 bg-login-image bg-cover bg-center hidden md:block magic-hover magic-shadow">
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg animate__animated animate__fadeInRight"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-green-600 magic-hover">Login to EcoTrack</h2>

          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
          >
            Login
          </button>

          <p className="mt-4 text-center text-gray-500">
            Don't have an account?{' '}
            <Link to="/register" className="text-green-600 hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
