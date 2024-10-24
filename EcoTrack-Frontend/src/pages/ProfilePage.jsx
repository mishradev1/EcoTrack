import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  // Fetch the profile data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
        alert('Please login to view your profile.');
        navigate('/login'); // Redirect to login if fetching profile fails
      }
    };
    fetchProfile();
  }, [navigate]);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!profile) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center animate__animated animate__fadeIn">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 magic-hover magic-shadow">
        <h1 className="text-3xl font-bold text-green-600 mb-4 animate__animated animate__bounceIn">
          Welcome, {profile.username}
        </h1>
        <p className="text-gray-700 mb-2">Email: {profile.email}</p>
        <p className="text-gray-700 mb-4">Points: {profile.points}</p>

        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition mt-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
