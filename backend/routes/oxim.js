const router = require('express').Router();
let oxim = require('../models/oxim.model');

router.route('/').get((req, res) => {
  oxim.find()
    .then(oxime => res.json(oxime))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;