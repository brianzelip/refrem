const express = require('express');
const router = express.Router();
const refController = require('../controllers/refController');
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/', refController.homePage);
router.post('/add', refController.addReference);

module.exports = router;
