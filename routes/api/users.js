const express = require('express');
const router = express.Router();


//* Post
router.post('/', (req, res) => {
    res.send(req.body)
    console.log(req.body);
});

module.exports = router;