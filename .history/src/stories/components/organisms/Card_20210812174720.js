import React from "react"
import CardBody from "../molecules/CardBody";
import CardHeader from "../molecules/CardHeader";
import '../../../App.css'
const Card = ({card, handleFinished}) => {
        return (
        <article className="card">
          <CardHeader image={card.image}/>
          <CardBody card={card} handleFinished={handleFinished} />
        </article>
      )
}
  export default Card