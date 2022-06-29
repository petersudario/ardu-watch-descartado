const router = require('express').Router();
let oxi = require('../models/oxi.model');

router.route('/').get((req, res) => {
  oxi.find()
    .then(oxime => res.json(oxime))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;