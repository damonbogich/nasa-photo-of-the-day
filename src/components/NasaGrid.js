// import React, {useState, useEffect} from "react";
// import NasaCard from "./NasaCard";
// import { Container, Row, Col } from 'reactstrap';
// import axios from "axios";
// import styled from 'styled-components';

// export const StyledDiv = styled.div`
// display: flex;
// flex-direction: column;
// background-color: red;
// margin: 5%;
// padding-bottom: 5%;`;

// export default function NasaGrid() {
//     const [nasaData, setNasaData] = useState([])
//     // useState() => [state variable, setter function]
//     // useState("hello") => ["hello", setter function]
//     // setNasaDate("goodbye") => nasaDate == "goodbye"

//     useEffect(() => {
//         axios.get(`https://swapi.co/api/people/`)
//         .then(response => {
//             console.log(response)
//             setNasaData(response.data.results);
            
            
//         })
//         .catch(error => {
//             console.log("Got an error", error)
//         })
//     }, [])

//     return(
        
//     <StyledDiv>
        
//     {nasaData.map(attribute => {
//       return (
     
       
//         <NasaCard
//         key = {attribute.url}
//         name = {attribute.name}
//         height = {attribute.height}
//         hairColor = {attribute.hair_color}
//         mass = {attribute.mass}/>
        
   
//         )
//         })}
        
//     </StyledDiv>
//     )

// }


import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";

export default function NasaGrid() {
    const [nasaData, setNasaData] = useState([])
    // useState() => [state variable, setter function]
    // useState("hello") => ["hello", setter function]
    // setNasaDate("goodbye") => nasaDate == "goodbye"

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            console.log(response)
            setNasaData(response.data);
            
            
        })
        .catch(error => {
            console.log("Got an error", error)
        })
    }, [])

    return(
        <Container>
            <NasaCard 
            key = {nasaData.index}
            image = {nasaData.url}
            title = {nasaData.title}
            date = {nasaData.date}
            explanation = {nasaData.explanation}
            />

        </Container>
    )


}