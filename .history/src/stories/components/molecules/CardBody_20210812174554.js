import React from "react"
import Button from  "../../../stories/Button"
import '../../../App.css'

  const CardBody = ({title, author, duration, finished, handleFinished}) => {
    return (
      <div className="card-body">                 
        <h2 className="content-overflow">{title}</h2>        
        <p className="body-content content-overflow">{author}</p>
        <p className="duration content-overflow">{duration}-minutes read</p>
        <Button primary="false" backgroundColor="white" size="large" label={finished == 'false' ? "Finished" : "Read Again"} className="book-card__primary-action" onClick={() => handleFinished(card)}/> 
      </div>
    )
};
  export default CardBody