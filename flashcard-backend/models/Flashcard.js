const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const Flashcard = mongoose.model('Flashcard', flashcardSchema);

module.exports = Flashcard;
