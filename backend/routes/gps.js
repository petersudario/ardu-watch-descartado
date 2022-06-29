const router = require('express').Router();
let gps = require('../models/gps.model');



router.route('/').get((req, res) => {
  gps.find()
    .then(gps => res.json(gps))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;