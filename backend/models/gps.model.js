const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gpsSchema = new Schema({
  coord: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const gps = mongoose.model('gps', gpsSchema);

module.exports = gps;