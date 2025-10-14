import { useState } from "react";
import "./FlipCard.css";

export function FlipCard({ frontContent, backTitle, backDescription, backExtra }) {
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
          Front
        </div>
        <div className="flip-card-back">
          Back
        </div>
      </div>
    </div>
  );
}
