import React from 'react';

type FlashcardListProps = {
  flashcards: { question: string, answer: string }[];
};

const FlashcardList: React.FC<FlashcardListProps> = ({ flashcards }) => {
  return (
    <div>
      <h2>Flashcards</h2>
      <ul>
        {flashcards.map((flashcard, index) => (
          <li key={index}>
            <strong>{flashcard.question}</strong>: {flashcard.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashcardList;
