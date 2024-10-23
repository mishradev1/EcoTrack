const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  coordinates: { type: [Number], required: true },  // [latitude, longitude]
  impactLevel: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
  status: { type: String, default: 'Pending' },
  imageUrl: { type: String },  // New field to store the image URL
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Issue', issueSchema);
