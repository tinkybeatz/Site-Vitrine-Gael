import { useState } from "react";
import "./FlipCard.css";

export function FlipCard({ content }) {
  //state
  const [isFlipped, setIsFlipped] = useState(false);

  //comportements
  function handleClickCard() {
    setIsFlipped(!isFlipped);
  }

  //affichage
  return (
    <div className="flip-card">
      <div 
        className="flip-card-inner" 
        onClick={handleClickCard}
        style={{ transform: isFlipped ? "rotateY(180deg)" : "" }}
      >
        <div className="flip-card-front">
          {content.id} - {content.title}
        </div>
        <div className="flip-card-back">
          {content.description}
        </div>
      </div>
    </div>
  );
}
