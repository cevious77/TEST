import React from "react"

import "./Travel.css"


const Travel = props => {
   return <div>
       
       <figure>
           <p> {props.destination} </p>
    <img
      src= {props.photo}
      alt={props.distance}
    />
    <figcaption>
      <blockquote>
        {props.country}
      </blockquote>
      <cite>{props.distance}</cite>
    </figcaption>
  </figure>

   </div>

   

}

export default Travel


