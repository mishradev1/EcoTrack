import React, { useState } from 'react';

// Dummy data simulating issues with images
const dummyIssues = [
  {
    id: 1,
    title: 'Plastic Waste on Beach',
    description: 'Large amount of waste accumulated along the shore.',
    location: 'Bondi Beach, Australia',
    impactLevel: 'High',
    status: 'Pending',
    image: 'https://media.istockphoto.com/id/1135208857/photo/spilled-garbage-on-the-beach-of-the-big-city-empty-used-dirty-plastic-bottles-empty-used.jpg?s=2048x2048&w=is&k=20&c=lPI15k0e185kaDA8D7yiWxvQoUlLU8I5OhAqQlw_F_A=',
  },
  {
    id: 2,
    title: 'Deforestation Near Park',
    description: 'Unauthorized cutting of trees near the national park.',
    location: 'Yellowstone National Park, USA',
    impactLevel: 'Medium',
    status: 'Pending',
    image: 'https://img.freepik.com/free-photo/professional-lumberjack-forest-cutting-oak-trunk-with-chainsaw_342744-270.jpg?t=st=1729758613~exp=1729762213~hmac=4ee32c4f70ed3bd32abe05666b67af2c828cc19c228fb1db7243efdb4edc25e4&w=1060',
  },
  {
    id: 3,
    title: 'Polluted River',
    description: 'The local river has become polluted with industrial waste.',
    location: 'Ganges River, India',
    impactLevel: 'High',
    status: 'Pending',
    image: 'https://s.abcnews.com/images/International/yamuna-pollution-india-ap-rc-180921_hpMain_16x9_992.jpg?w=992',
  },
];

const VolunteerPage = () => {
  const [issues, setIssues] = useState(dummyIssues);

  // Simulate resolving an issue
  const handleResolveIssue = (id) => {
    setIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id === id ? { ...issue, status: 'In Progress' } : issue
      )
    );
    alert('You have chosen to resolve this issue!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8 animate__animated animate__fadeInDown">
        Available Issues to Resolve
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate__animated animate__zoomIn mt-16">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className={`bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 ${
              issue.status === 'In Progress' ? 'opacity-50' : ''
            } magic-hover magic-shadow`}
          >
            <img
              src={issue.image}
              alt={issue.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">{issue.title}</h2>
            <p className="mb-2">Location: {issue.location}</p>
            <p className="mb-2">Impact Level: {issue.impactLevel}</p>
            <p className="mb-4 text-gray-600">{issue.description}</p>
            <button
              onClick={() => handleResolveIssue(issue.id)}
              className={`w-full py-2 px-4 rounded-lg text-white ${
                issue.status === 'In Progress'
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
              disabled={issue.status === 'In Progress'}
            >
              {issue.status === 'In Progress' ? 'In Progress' : 'Resolve Issue'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerPage;
