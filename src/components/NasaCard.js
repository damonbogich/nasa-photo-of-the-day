import React from "react";

const NasaCard = props => {
    return(
        <div className = "NasaCard">
            <h3>{props.date}</h3>
            <h1>{props.title}</h1>
            <img className = "NasaImg" alt = "space" src = {props.image}/>
            <p>{props.explanation}</p>

        </div>
    )
}
export default NasaCard;