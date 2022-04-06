import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import ListTripPage from "./ListTripsPage"
import LoginPage from "./LoginPage"
import TripDetailsPage from "./TripDetailsPage"
import HomePage from "./HomePage";
import AdminHomePage from "./AdminHomePage"
import ApplicationFormPage from "./ApplicationFormPage"
import { goBack } from "../routes/cordinators";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
const StylePage = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 40px;
`



const CreateTripPage = () =>{
    useProtectedPage()
    const navigate = useNavigate()

    return (

        <StylePage>
            <h2>Criar Viagem</h2>
            <div>
                <p>Form para Criar Viagem</p>
            </div>
            <div>
            <button onClick={()=>goBack(navigate)}>voltar</button>
            <button>Criar</button>
            </div>
        </StylePage>
    )
}

export default CreateTripPage;