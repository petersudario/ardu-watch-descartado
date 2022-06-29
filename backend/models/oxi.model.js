const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const oxiSchema = new Schema({
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

const oxi = mongoose.model('oxi', oxiSchema);

module.exports = oxi;