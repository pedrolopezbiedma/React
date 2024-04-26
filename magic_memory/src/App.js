import { useCallback, useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardsImages = [
  { src: "./img/helmet.png" },
  { src: "./img/potion.png" },
  { src: "./img/ring.png" },
  { src: "./img/scroll.png" },
  { src: "./img/shield.png" },
  { src: "./img/sword.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const startGame = () => {
    const shuffledCards = [...cardsImages, ...cardsImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => {
        return { ...card, id: Math.random() * 10, matched: false };
      });

    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
  };

  const handleCardChoice = (card) => {
    !choiceOne ? setChoiceOne(card) : setChoiceTwo(card);
  };

  const resetTurn = useCallback(() => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
    setTurns((prevTurns) => prevTurns + 1);
  }, []);

  // Handling choices match
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            return {
              ...card,
              matched: !card.matched ? card.src === choiceOne.src : true,
            };
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo, resetTurn]);

  // Initial load
  useEffect(() => {
    startGame();
  }, []);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={startGame}>New Game</button>
      <div className="card-grid">
        {cards &&
          cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              disabled={disabled}
              flipped={
                card.id === choiceOne?.id ||
                card.id === choiceTwo?.id ||
                card.matched
              }
              handleCardChoice={handleCardChoice}
            />
          ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
