import "./SingleCard.css";

const SingleCard = ({ card, disabled, flipped, handleCardChoice }) => {
  const handleCardClick = () => {
    if (!disabled) {
      handleCardChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          onClick={handleCardClick}
          className="back"
          src="../../img/cover.png"
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
