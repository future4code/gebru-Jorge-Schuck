import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import ApplicationFormPage from "./ApplicationFormPage"
import CreateTripPage from "./CreateTripPage"
import LoginPage from "./LoginPage"
import TripDetailsPage from "./TripDetailsPage"
import HomePage from "./HomePage";
import AdminHomePage from "./AdminHomePage"
import { goBack } from "../routes/cordinators";
import { useNavigate } from "react-router-dom";
import { goToApplicationFormPage } from "../routes/cordinators";
import { url_base } from "../constants/url_base";

const StylePage = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 40px;
`
const StyleList = styled.div`
display:flex;
flex-direction:column;
border:1px solid;
border-radius:20px ;
margin-bottom:20px;
background-color: grey ;
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

        <StylePage>
            
            <div>
            <button onClick={()=>goBack(navigate)}>Voltar</button>          
            <button onClick={()=>goToApplicationFormPage(navigate)}>Inscrever-se</button>
            </div>
            <h2>Lista de Viagens</h2>
            <div>
                {TripList}
            </div>
        </StylePage>
    )
}

export default ListTripPage;