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
            <div
            key={trip.id}
            onClick={() => goToTripDetailsPage(navigate, trip.id)}
            >
            <p>{trip.name}</p>
            <button onClick={() => del(trip.id)}>X</button>
            </div>
        )

    })

    return (

        <StylePage>
            <h2>Painel Administrativo</h2>
            <div>
            <button onClick={()=>goBack(navigate)}>voltar</button>
            <button onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</button>
            <button onClick={logout}>Logout</button>
            </div>
            <div>
            {tripList}
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