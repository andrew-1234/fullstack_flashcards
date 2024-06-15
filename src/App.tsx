import React, { useState, useEffect } from 'react';
import FlashcardForm from './components/FlashcardForm';
import FlashcardList from './components/FlashcardList';

const App: React.FC = () => {
  const [flashcards, setFlashcards] = useState<{ question: string, answer: string }[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/flashcards')
    .then(response => response.json())
    .then(data => setFlashcards(data));
  }, []);

  const addFlashcard = (flashcard: { question: string, answer: string }) => {
    setFlashcards([...flashcards, flashcard]);
    // Send POST request to backend
    
    fetch('http://localhost:3001/api/flashcards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(flashcard),
    })
      .then(response => response.json())
      .then(newFlashcard => {
        setFlashcards([...flashcards, newFlashcard]);
      });
  };

  return (
    <div>
      <h1>Flashcard Maker/Reviewer</h1>
      <FlashcardForm addFlashcard={addFlashcard} />
      <FlashcardList flashcards={flashcards} />
    </div>
  );
};

export default App;
