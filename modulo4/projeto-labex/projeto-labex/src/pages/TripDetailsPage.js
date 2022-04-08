import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
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

    const [trip, setTrip] = useState("")

    const token = localStorage.getItem(`token`)

    const headers = {auth: token}

    const getTripDetails = () =>{
        axios
        .get(`${url_base}/trip/${params.id}`, headers)
        .then((res)=>{
            setTrip(res.data.trip)
        })
        .catch((err)=>{
            alert("Algo deu errado!")
        })
    }
     useEffect(()=>{
         getTripDetails()
     },[])

     const candidats = trip.candidates && trip.candidates.map((candidate)=>{
         const decideCandidates = () =>{
             const body = {
                 "approve": true
             }
             const url = `${url_base}/trip/${params.id}/candidates/${candidate.id}/decide`
             axios.put(url, body, headers)
             .then((res)=>{
                 alert(`A candidatura de ${candidate.name} foi aprovada`)
             })
             .catch((err)=>{
                 alert("Algo deu errado")
             })
         }
         return (
            <div key={trip.id}>
            <p>Candidatos Pendentes:</p>
            {candidate.name && <p><b>Nome: </b>{candidate.name}</p>}
            {candidate.age && <p><b>Idade: </b>{candidate.age}</p>}
            {candidate.profession && <p><b>Profissão: </b>{candidate.profession}</p>}
            {candidate.country && <p><b>País: </b>{candidate.country}</p>}
            {candidate.applicationText && <p><b>Texto da Candidatura: </b>{candidate.applicationText}</p>}
            <div>
                <button onClick={() => decideCandidates}>APROVAR</button>
                <button>REPROVAR</button>
            </div>
        </div>
         )
     })  
     
     const approves = trip.approved && trip.approved.map((confirmed) => {
        return (
            <div>
                <p>{confirmed.name}</p>
            </div>
        )
    })

    return (

        <StylePage>
            <button onClick={()=>goBack(navigate)}>Voltar</button>
            <div key={trip.id}>
                <p>Detalhes da Viagem</p>
                {trip.name && <p><b>Nome: </b>{trip.name}</p>}
                {trip.description && <p><b>Descrição: </b>{trip.description}</p>}
                {trip.planet && <p><b>Planeta: </b>{trip.planet}</p>}
                {trip.durationInDays && <p><b>Duração: </b>{trip.durationInDays} dias</p>}
                {trip.date && <p><b>Data: </b>{trip.date}</p>}
            </div>
            {candidats}
            {approves}

        </StylePage>
    )
}

export default TripDetailsPage;