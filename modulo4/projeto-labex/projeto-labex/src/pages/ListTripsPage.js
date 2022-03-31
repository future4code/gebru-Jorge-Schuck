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

const StylePage = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 40px;
`



const ListTripPage = () =>{

    const navigate = useNavigate()

    return (

        <StylePage>
            
            <div>
            <button onClick={()=>goBack(navigate)}>Voltar</button>          
            <button onClick={()=>goToApplicationFormPage(navigate)}>Inscrever-se</button>
            </div>
            <h2>Lista de Viagens</h2>

        </StylePage>
    )
}

export default ListTripPage;