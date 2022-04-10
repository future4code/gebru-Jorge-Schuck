import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { goBack } from "../routes/cordinators";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import { url_base } from "../constants/url_base";
import { country } from "../constants/countries";

const Background = styled.div`
background-image: url("https://th.bing.com/th/id/R.90c615c3509c77880470b187c6f2fe20?rik=1TywlaYSgBY2Lg&pid=ImgRaw&r=0");
background-size:cover;
background-repeat: no-repeat;
background-position: center center;
padding:15vh;
`
const StylePage = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 40px;
`
const StyleForms = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 3vw;
margin: 2vw auto;
input, select{
    width: 100%;
    height: 2.5vw;
    margin-top: 2.5vw;
    background-color: white;
    
}
`
const StyleInputs = styled.input`
border-radius:15px;
`
const StyleSelect = styled.select`
border-radius:15px;

`
const StyleButton = styled.button`
background-color: #2F4F4F	;
color: white;
width: 20vw;
height: 2vw;
margin-top:2vh;
margin-right:1vw;
border-radius:10px;
&:hover{
    color: black;
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
    transition: all 0.5s;
}
`
const Title = styled.h1`
color:white;
display:flex;
justify-content:center;
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

        <Background>
            <Title> Inscreva-se</Title>
            <StyleForms onSubmit={register}>
            <StylePage>
                <StyleSelect
                name="trip"
                onChange={onChangeTrip}
                value={form.value}
                required
                >
                    <option>Escolha uma Viagem</option>
                    {chooseTrip}
                </StyleSelect>
                
                <StyleInputs
                placeholder={"Idade"}
                name="age"
                type={"number"}
                value={form.age}
                onChange={onChange}
                required
                min={18}
                />
                <StyleInputs
                placeholder={"Texto de Candidatura"}
                name="applicationText"
                value={form.applicationText}
                onChange={onChange}
                required
                />
                <StyleInputs
                    placeholder={"Profissão"}
                    name="profession"
                    value={form.profession}
                    onChange={onChange}
                    required
                />
                <StyleSelect
                    placeholder={"País"}
                    name="country"
                    value={form.country}
                    onChange={onChange}
                    required    
                >
                    <option value={""} disabled>Escolha um País</option>
                    {country.map((countryes) => {
                        return <option value={countryes} key={countryes}>{countryes}</option>
                    })}
                </StyleSelect>

            
            <StyleButton>Enviar</StyleButton>
            </StylePage>
            </StyleForms>
            <StyleButton onClick={()=>goBack(navigate)}>Voltar</StyleButton>
        </Background>
    )
}

export default ApplicationFormPage;