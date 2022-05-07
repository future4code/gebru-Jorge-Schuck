import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/cordinators";
import { goToCreateTripPage } from "../routes/cordinators";
import { goToTripDetailsPage } from "../routes/cordinators";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { url_base } from "../constants/url_base";

const StylePage = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 40px;
`
const StyleButtonLeft = styled.button`
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
const Title = styled.h2`
color:white;
`
const StyleList = styled.div`
display:flex;
background-color:whitesmoke;
border-radius:20px;
padding:1vh;
width:60vw;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 1vh;
`
const Font = styled.p`
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const Background = styled.div`
background-image: url("https://th.bing.com/th/id/R.90c615c3509c77880470b187c6f2fe20?rik=1TywlaYSgBY2Lg&pid=ImgRaw&r=0");
background-size:cover;
background-repeat: no-repeat;
background-position: center center;
padding:10vh;
`
const FontX = styled.button`
border-radius:100px;
font-size:18px;
`
const AdminHomePage = () =>{
    useProtectedPage()
    const [trips, setTrips] =useState([])
    const [token, setToken] =useState()
    const navigate = useNavigate()

    const getTrips = () =>{
        axios
        .get(`${url_base}/trips`)
        .then((res)=>{
            setTrips(res.data.trips)
        })
        .catch((err)=>{
            console.log(err.data)
        })
    }

    useEffect(()=>{
        getTrips()
    },[])

    const logout = () =>{
        setToken(localStorage.removeItem("token"))
        navigate("/")
    }
    const tripList = trips && trips.map((trip) =>{
        const goToTripDetailsPage = () =>{
            navigate(`/admin/trips/${trip.id}`)
    }
    const tripDelete = () =>{
        const token = window.localStorage.getItem("token")
        const headers = {auth: token}
            
        axios
            .delete(`${url_base}/trips/${trip.id}`, headers)
            .then((res) => {
                alert('A viagem foi deletada')
                
            })
            .catch((err) => {
                alert("Algo deu errado")
            })
        }

        const del = () => {
            if (window.confirm(`Deseja deletar a viagem ${trip.name}?`)) {
                tripDelete(trip.id)
            }
        }
        return (
            <StyleList
            key={trip.id}
            onClick={() => goToTripDetailsPage(navigate, trip.id)}
            >
            <Font>{trip.name}</Font>
            <FontX onClick={() => del(trip.id)}>X</FontX>
            </StyleList>
        )

    })

    return (

        <Background>
            <StylePage>
            <Title>Painel Administrativo</Title>
            <div>
            <StyleButtonLeft onClick={()=>goBack(navigate)}>voltar</StyleButtonLeft>
            <StyleButtonLeft onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</StyleButtonLeft>
            <StyleButtonLeft onClick={logout}>Logout</StyleButtonLeft>
            </div>
            <div>
            {tripList}            
            </div>
            
            </StylePage>
        </Background>
    )
}

export default AdminHomePage;