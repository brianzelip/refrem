const express = require('express');
const router = express.Router();
const refController = require('../controllers/refController');

// Do work here
router.get('/', refController.addRef);

module.exports = router;
