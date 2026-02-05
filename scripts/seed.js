require('dotenv').config();
const mongoose = require('mongoose');

const Artist = require('../models/Artist');
const Album = require('../models/Album');
const Song = require('../models/Song');
const User = require('../models/User');
const Playlist = require('../models/Playlist');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear database
    await Promise.all([
      Artist.deleteMany({}),
      Album.deleteMany({}),
      Song.deleteMany({}),
      User.deleteMany({}),
      Playlist.deleteMany({})
    ]);

    // Create Artist
    const artist = await Artist.create({
      name: 'Daft Punk',
      genre: 'Electronic'
    });

    // Create Album
    const album = await Album.create({
      title: 'Discovery',
      releaseYear: 2001,
      artist: artist._id
    });

    // Create Song
    const song = await Song.create({
      title: 'One More Time',
      duration: 320,
      artist: artist._id,
      album: album._id
    });

    // Create User
    const user = await User.create({
      username: 'music_fan_01',
      email: 'fan@example.com'
    });

    // Create Playlist
    await Playlist.create({
      name: 'Gym Jams',
      user: user._id,
      songs: [song._id]
    });

    console.log('✅ Seeding Complete!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding Failed:', err);
    process.exit(1);
  }
}

seed();
