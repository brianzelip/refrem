const express = require('express');
const router = express.Router();
const refController = require('../controllers/refController');
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/', refController.homePage);
router.get('/flashes', refController.flashesPage);
router.post('/add', catchErrors(refController.addReference));

module.exports = router;
