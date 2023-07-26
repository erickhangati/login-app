const express = require('express');

const router = express.Router();

router.route('/register').post((req, res) => res.json('Register route'));

module.exports = router;
