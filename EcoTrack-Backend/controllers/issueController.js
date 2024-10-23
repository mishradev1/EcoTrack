const Issue = require('../models/Issue');

const getIssues = async (req, res) => {
  try {
    const issues = await Issue.find().populate('reportedBy');
    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createIssue = async (req, res) => {
  const { title, description, location, coordinates, impactLevel } = req.body;
  
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null; // Store image URL

  const issue = new Issue({
    title,
    description,
    location,
    coordinates,
    impactLevel,
    imageUrl,
    reportedBy: req.user.userId,
  });

  try {
    const newIssue = await issue.save();
    res.status(201).json(newIssue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateIssue = async (req, res) => {
  try {
    const updatedIssue = await Issue.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedIssue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getIssues, createIssue, updateIssue };
