import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import ApplicationFormPage from "./ApplicationFormPage"
import CreateTripPage from "./CreateTripPage"
import ListTripPage from "./ListTripsPage"
import TripDetailsPage from "./TripDetailsPage"
import HomePage from "./HomePage";
import AdminHomePage from "./AdminHomePage"
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/cordinators";
import { goToAdminHomePage } from "../routes/cordinators";


const StylePage = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 40px;
`

const LoginPage = () =>{
    const navigate = useNavigate()

    return (

        <StylePage>
            <h2>Login Page</h2>
            <div>
            <input placeholder="Email"></input>
            <input placeholder="Senha"></input>
            </div>
            <div>
                <button onClick={()=>goBack(navigate)}>Voltar</button>
                <button onClick={()=>goToAdminHomePage(navigate)}>Entrar</button>
            </div>
        </StylePage>
    )
}

export default LoginPage;