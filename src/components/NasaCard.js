import React from "react";
import { Card, CardTitle, CardText, CardImg } from 'reactstrap';
import Description from "./Styled";
import Header from "./StyledHeader";



const NasaCard = props => {
    return(
        <div className = "NasaCard">
            {/* <h3>{props.date}</h3>
            <h1>{props.title}</h1>
            <img className = "NasaImg" alt = "space" src = {props.image}/>
            <p>{props.explanation}</p> */}

        
    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <Header>{props.title}</Header>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <Description>{props.explanation}</Description>
        <CardText>{props.date}</CardText>
        
    </Card>
      </div>
    )
}
export default NasaCard;