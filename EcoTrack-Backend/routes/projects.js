const express = require('express');
const { getProjects, createProject, addVolunteer } = require('../controllers/projectController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/', getProjects);
router.post('/', auth, createProject);
router.put('/:id/volunteer', auth, addVolunteer);

module.exports = router;
