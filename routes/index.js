const express = require('express');
const router = express.Router();
const refController = require('../controllers/refController');

// Do work here
router.get('/', refController.homePage);

router.post('/addRef', refController.refSubmission);

module.exports = router;
