const Project = require('../models/Project');

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('issues volunteers');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  const project = new Project(req.body);
  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addVolunteer = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    project.volunteers.push(req.body.userId);
    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProjects, createProject, addVolunteer };
