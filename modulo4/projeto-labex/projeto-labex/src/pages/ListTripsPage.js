import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { goBack } from "../routes/cordinators";
import { useNavigate } from "react-router-dom";
import { goToApplicationFormPage } from "../routes/cordinators";
import { url_base } from "../constants/url_base";

const StylePage = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
margin-top: 40px;
`
const StyleList = styled.div`
display:flex;
flex-direction:column;
border:1px solid;
border-radius:20px ;
margin-bottom:20px;
background-color: white ;
padding:2vh;

align-items:center;
`
const Background = styled.div`
background-image: url("https://th.bing.com/th/id/R.90c615c3509c77880470b187c6f2fe20?rik=1TywlaYSgBY2Lg&pid=ImgRaw&r=0");
background-size:cover;
background-repeat: no-repeat;
background-position: center center;
padding:10vh;
`
const Title = styled.h2`
color:white;
display:flex;
justify-content:center;
`
const StylePositionButtons = styled.div`
display:flex;
justify-content:center;
`
const StyleButton = styled.button`
background-color: #2F4F4F	;
color: white;
width: 20vw;
height: 2vw;
margin-right:1vw;
border-radius:10px;
&:hover{
    color: black;
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
    transition: all 0.5s;
}
`
const ListTripPage = () =>{
    const [trips, setTrips] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        getTrips()
    },[]) 

    const getTrips = () => {
        axios
        .get(`${url_base}/trips`)
        .then((res) => {
            setTrips(res.data.trips)
        })
        .catch((err) =>{
            console.log(err.data)
        })
    }

    

    const TripList = trips.map((trip) =>{
        return (
         
            <StyleList key={trip.id}>
            <p><b>Nome: </b>{trip.name}</p>
            <p><b>Descrição: </b>{trip.description}</p>
            <p><b>Planeta: </b>{trip.planet}</p>
            <p><b>Duração: </b>{trip.durationInDays} dias</p>
            <p><b>Data: </b>{trip.date}</p>
            </StyleList>
            
        )
    })
    return (

        <Background>
            
            <StylePositionButtons>
            <StyleButton onClick={()=>goBack(navigate)}>Voltar</StyleButton>          
            <StyleButton onClick={()=>goToApplicationFormPage(navigate)}>Inscrever-se</StyleButton>
            </StylePositionButtons>
            <Title>Lista de Viagens</Title>
            <StylePage>
                {TripList}
            </StylePage>
        </Background>
    )
}

export default ListTripPage;