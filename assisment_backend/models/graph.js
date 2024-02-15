const mongoose = require('mongoose');

const dataPointSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true, // Automatically generate unique ID
  },
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
    trim: true, // Remove leading/trailing whitespace
    minlength: 1, // Ensure label has at least one character
  },
});

module.exports = mongoose.model('DataPoint', dataPointSchema);
