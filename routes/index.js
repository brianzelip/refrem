const express = require('express');
const router = express.Router();
const refController = require('../controllers/refController');

// Do work here
router.get('/', refController.homePage);

module.exports = router;
