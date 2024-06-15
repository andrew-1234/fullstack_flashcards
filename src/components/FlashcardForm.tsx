import React, { useState } from 'react';

type FlashcardFormProps = {
  addFlashcard: (flashcard: { question: string, answer: string }) => void;
};

const FlashcardForm: React.FC<FlashcardFormProps> = ({ addFlashcard }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFlashcard = { question, answer };
    addFlashcard(newFlashcard);
    setQuestion('');
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
        required
      />
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Answer"
        required
      />
      <button type="submit">Add Flashcard</button>
    </form>
  );
};

export default FlashcardForm;

