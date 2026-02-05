const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  releaseYear: Number,
  artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true }
});

module.exports = mongoose.model('Album', albumSchema);
