import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import ApplicationFormPage from "./ApplicationFormPage"
import CreateTripPage from "./CreateTripPage"
import ListTripPage from "./ListTripsPage"
import LoginPage from "./LoginPage"
import TripDetailsPage from "./TripDetailsPage"
import HomePage from "./HomePage";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/cordinators";
import { goToCreateTripPage } from "../routes/cordinators";
import { goToHomePage } from "../routes/cordinators";
import { goToTripDetailsPage } from "../routes/cordinators";
import { useProtectedPage } from "../hooks/useProtectedPage";
const StylePage = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 40px;
`

const AdminHomePage = () =>{
    useProtectedPage()

    
    const navigate = useNavigate()

    return (

        <StylePage>
            <h2>Painel Administrativo</h2>
            <div>
            <button onClick={()=>goBack(navigate)}>voltar</button>
            <button onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</button>
            <button onClick={()=>goToHomePage(navigate)}>Logout</button>
            </div>
            <div>
                <div>
                    <button onClick={()=>goToTripDetailsPage(navigate)}>VIAGENS DISPONIVEIS</button>
                </div>
            </div>
            <div>
                
            </div>
        </StylePage>
    )
}

export default AdminHomePage;