import React from "react"
import '../../../App.css'
const CardHeader = ({image}) => {
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
        </header>
      )
  }
  export default CardHeader