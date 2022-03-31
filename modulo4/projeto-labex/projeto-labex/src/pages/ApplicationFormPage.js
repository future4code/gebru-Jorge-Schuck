import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import CreateTripPage from "./CreateTripPage"
import ListTripPage from "./ListTripsPage"
import LoginPage from "./LoginPage"
import TripDetailsPage from "./TripDetailsPage"
import HomePage from "./HomePage";
import AdminHomePage from "./AdminHomePage"
import { goBack } from "../routes/cordinators";
import { useNavigate } from "react-router-dom";

const StylePage = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 40px;
`



const ApplicationFormPage = () =>{
    const navigate = useNavigate()

    return (

        <StylePage>
            <h2>Form para inscrever-se</h2>
            <div>
            <button onClick={()=>goBack(navigate)}>Voltar</button>
            <button>Enviar</button>
            </div>
        </StylePage>
    )
}

export default ApplicationFormPage;