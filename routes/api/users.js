const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');


//* Post
router.post('/', usersCtrl.create);

module.exports = router;