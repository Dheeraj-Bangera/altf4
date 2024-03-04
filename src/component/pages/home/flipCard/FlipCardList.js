import React from 'react';
import FlipCard from './FlipCard';

const FlipCardList = () => {
  const cards = [
    {
      id: 1,
      question: 'Why should you use us?',
      answer: '"saves the time."',
    },
    {
      id: 2,
      question: 'What are the benefits of using us?',
      answer: '"saves time help making places less crowded."',
    },
    {
      id: 3,
      question: 'How does it  impact communities?',
      answer: '"Helps to improve time management."',
    },
    {
      id: 4,
      question: 'How does it impact self-being?',
      answer: '"Uses time in perfect manner."',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-28 gap-y-4 select-none  ">
      {cards.map((card) => (
        <FlipCard key={card.id} question={card.question} answer={card.answer} />
      ))}
    </div>
  );
};

export default FlipCardList;
