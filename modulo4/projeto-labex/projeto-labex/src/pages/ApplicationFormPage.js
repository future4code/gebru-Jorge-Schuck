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
import useForm from "../hooks/useForm";
import { url_base } from "../constants/url_base";

const StylePage = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 40px;
`



const ApplicationFormPage = () =>{
    const navigate = useNavigate()
    const [tripId, setTripId] = useState("")
    const [trips, setTrips] = useState([])
    const {form, onChange, cleanFields} = useForm({
        name: '',
        age: '',
        applicationText: '',
        profession: '',
        country: '',
    })

    const submitTrip = () =>{
        const headers = "Content-Type: application/json"
        axios
        .post(`${url_base}/trips/${tripId}/apply`, form, headers)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    const register = (event) => {
        event.proventDefault()
            submitTrip(form)
            alert("Candidatura feita com sucesso!!!")
            cleanFields()
        
    }
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
    },[trips])

    const onChangeTrip = (event) => {
        setTripId(event.target.value)
    }

    const chooseTrip = trips && trips.map((travel)=>{
        return <option
        key={travel.id}
        value={tripId.id }>{travel.name}</option>
    })

    return (

        <StylePage>
            <h2>Form para inscrever-se</h2>
            <form onSubmit={register}>
            <div>
                <select
                name="trip"
                onChange={onChangeTrip}
                value={form.value}
                required
                >
                    <option>Escolha uma Viagem</option>
                    {chooseTrip}
                </select>
                
                <input
                placeholder={"Idade"}
                name="age"
                type={"number"}
                value={form.age}
                onChange={onChange}
                required
                min={18}
                />
                <input
                placeholder={"Texto de Candidatura"}
                name="applicationText"
                value={form.applicationText}
                onChange={onChange}
                required
                />
                <input
                    placeholder={"Profissão"}
                    name="profession"
                    value={form.profession}
                    onChange={onChange}
                    required
                />
                <select
                    placeholder={"País"}
                    name="country"
                    value={form.country}
                    onChange={onChange}
                    required
                    
                ></select>

            
            <button>Enviar</button>
            </div>
            </form>
            <button onClick={()=>goBack(navigate)}>Voltar</button>
        </StylePage>
    )
}

export default ApplicationFormPage;