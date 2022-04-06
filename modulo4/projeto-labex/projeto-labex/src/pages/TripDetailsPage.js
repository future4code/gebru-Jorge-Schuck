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
import { useProtectedPage } from "../hooks/useProtectedPage";
import { url_base } from "../constants/url_base";

const StylePage = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 40px;
`


const TripDetailsPage = () =>{
    useProtectedPage()

    const navigate = useNavigate()
    const params = useParams()
    
    useEffect (() =>{

        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }
        axios
        .get(`${url_base}/trip/3gaLZH8Uu5OUwDiWEvJ2`, headers)
        .then((res)=>{
            console.log(res.data.trip)
        })
        .catch((err)=>{
            console.log("Erro:", err.response)
        })
    }, [])
    

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