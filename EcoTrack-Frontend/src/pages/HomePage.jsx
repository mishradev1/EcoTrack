import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/7656742/pexels-photo-7656742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
    >
      <div className="h-full bg-black bg-opacity-60 flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl text-green-200 font-bold mb-6 animate__animated animate__fadeInDown">
          Welcome to EcoTrack
        </h1>
        <p className="text-xl mb-8 text-center max-w-lg animate__animated animate__fadeInUp">
          Track, report, and contribute to solving environmental issues in your community.
          Join us today and make a difference!
        </p>

        <div className="flex space-x-6 animate__animated animate__zoomIn">
          <Link to="/login">
            <button className="px-6 py-3 rounded-lg text-xl font-semibold text-white bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-indigo-900 hover:to-blue-900 transition transform hover:scale-105 shadow-lg">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="px-6 py-3 rounded-lg text-xl font-semibold text-white bg-gradient-to-r from-green-500 to-teal-600 hover:from-teal-600 hover:to-green-500 transition transform hover:scale-105 shadow-lg">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
