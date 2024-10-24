import React, { useState } from 'react';
import axios from 'axios';

const IssueReportPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    image: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:5000/issues', data, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert('Issue reported successfully!');
      setFormData({
        title: '',
        description: '',
        location: '',
        image: null,
      });
    } catch (error) {
      console.error('Error reporting issue:', error);
      alert('Failed to report the issue. Please try again.');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full animate__animated animate__fadeInUp"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600 magic-hover">
          Report an Issue
        </h2>

        <div className="mb-4">
          <label className="block mb-2 text-gray-600">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter the issue title"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-600">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Describe the issue"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-600">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter the issue location"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-gray-600">Upload Image</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
        >
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default IssueReportPage;
