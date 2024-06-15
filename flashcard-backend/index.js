const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Flashcard = require('./models/Flashcard');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/flashcards')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.get('/api/flashcards', async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.json(flashcards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/flashcards', async (req, res) => {
  const flashcard = new Flashcard({
    question: req.body.question,
    answer: req.body.answer,
  });

  try {
    const newFlashcard = await flashcard.save();
    res.status(201).json(newFlashcard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});