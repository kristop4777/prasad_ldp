import React from "react"
import Button from  "../../../stories/Button"
import '../../../App.css'

  const CardBody = ({card, handleFinished}) => {
    console.log(card.finished);
    return (
      <div className="card-body">
                 
        <h2 className="content-overflow">{card.title}</h2>
        
        <p className="body-content content-overflow">{card.author}</p>
        <p className="duration content-overflow">{card.duration}-minutes read</p>
        <Button primary="false" backgroundColor="white" size="large" label={card.finished == 'false' ? "Finished" : "Read Again"} className="book-card__primary-action" onClick={() => handleFinished(card)}/> 
    
      </div>
    )
};
  export default CardBody