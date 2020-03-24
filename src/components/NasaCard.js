import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
  } from 'reactstrap';
import Description from "./Styled";
import Header from "./StyledHeader";
import styled from 'styled-components';

const StyledCont = styled.div`
display: flex; 
flex-direction: column;
justify-content: space-between;
background-color:blue;`;

const StyledContContainer = styled.div`

margin: 10%;
border: 2px solid black;`;

// const NasaCard = props => {
//     return (
    // <div>
    //   <h2>Name: {props.name}</h2>
    //   <p>Height: {props.height}</p>
    //   <p>Mass: {props.mass}</p>
    //   <p>Hair color: {props.hairColor}</p>
    // </div>

    //  <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
    //    <CardTitle>{props.name}</CardTitle>
    //     <CardSubtitle>{props.height}</CardSubtitle>
    //     <CardText>{props.weight}</CardText>
    //     <CardTex
        
    //  </Card> 
  //   <Col key = {props.key}>
    
  //    <StyledContContainer>

  //      <StyledCont>
  //           <CardTitle>{props.name}</CardTitle>
  //           <CardSubtitle className = "text-warning">{props.height}</CardSubtitle>
  //           <CardText>{props.mass}</CardText>
  //           <CardText>{props.hairColor}</CardText>
  //       </StyledCont> 
       
  //    </StyledContContainer> 
  //   </Col>
  //   )
  // };
  
  // export default NasaCard;






 const NasaCard = props => {
    return(
        <div className = "NasaCard">
             {/* <h3>{props.date}</h3>
             <h1>{props.title}</h1>
             <img className = "NasaImg" alt = "space" src = {props.image}/>
             <p>{props.explanation}</p> */}

        
     { <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
         <Header>{props.title}</Header>
         <CardImg top width="100%" src={props.image} alt="Card image cap" />
         <Description>{props.explanation}</Description>
         <CardText>{props.date}</CardText>
        
    </Card> }
      </div>
    )
}
 export default NasaCard;