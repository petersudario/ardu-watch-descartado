const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const oximSchema = new Schema({
  oxig: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
    minlength: 1
  },
 
}, {
  timestamps: true,
});

const oxim = mongoose.model('oxim', oximSchema);

module.exports = oxim;