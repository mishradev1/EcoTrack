const express = require('express');
const multer = require('multer');
const path = require('path');
const { getIssues, createIssue, updateIssue } = require('../controllers/issueController');
const auth = require('../middlewares/auth');
const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});

const upload = multer({ storage: storage });

// Routes
router.get('/', getIssues);
router.post('/', auth, upload.single('image'), createIssue); // Handle image upload
router.put('/:id', auth, updateIssue);

module.exports = router;
