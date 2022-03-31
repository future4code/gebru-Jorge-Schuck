import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import ApplicationFormPage from "./ApplicationFormPage"
import CreateTripPage from "./CreateTripPage"
import ListTripPage from "./ListTripsPage"
import LoginPage from "./LoginPage"
import HomePage from "./HomePage";
import AdminHomePage from "./AdminHomePage"
import { goBack } from "../routes/cordinators";
import { useNavigate, useParams } from "react-router-dom";

const StylePage = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 40px;
`


const TripDetailsPage = () =>{

    const navigate = useNavigate()
    const params = useParams()

    return (

        <StylePage>
            <div>
            <h2>Viagem Disponivel</h2>
            <p>Descrição da viagem</p>
            <p>Candidatos</p>
            </div>
            <div>
            <button onClick={()=>goBack(navigate, params)}>voltar</button>
            </div>
        </StylePage>
    )
}

export default TripDetailsPage;