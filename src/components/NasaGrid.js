import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

export default function NasaGrid() {
    const [nasaData, setNasaData] = useState([])

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
        <div>
            <NasaCard 
            key = {nasaData.index}
            image = {nasaData.url}
            title = {nasaData.title}
            date = {nasaData.date}
            explanation = {nasaData.explanation}
            />

        </div>
    )


}