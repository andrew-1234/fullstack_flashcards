import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

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
    <Box component="form" onSubmit={handleSubmit} mb={3}>
      <TextField
        label="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Add Flashcard
      </Button>
    </Box>
  );
};

export default FlashcardForm;

