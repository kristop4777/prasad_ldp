import React from "react"
import CardBody from "../molecules/CardBody";
import CardHeader from "../molecules/CardHeader";
import '../../../App.css'
const Card = ({card, handleFinished}) => {
        return (
        <article className="card">
          <CardHeader card={card} image={card.image}/>
          <CardBody title={card.title} author={card.author} card={card} duration={card.duration} handleFinished={handleFinished} />
        </article>
      )
}
  export default Card