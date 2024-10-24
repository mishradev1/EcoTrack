import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get('http://localhost:5000/users/profile', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setProfile(response.data);
    };
    fetchProfile();
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center animate__animated animate__fadeIn">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 magic-hover magic-shadow">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Welcome, {profile.username}</h1>
        <p className="text-gray-700 mb-2">Email: {profile.email}</p>
        <p className="text-gray-700">Points: {profile.points}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
