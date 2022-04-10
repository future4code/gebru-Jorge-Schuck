import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { goBack } from "../routes/cordinators";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import useForm from "../hooks/useForm";
import { url_base } from "../constants/url_base";
import { planets } from "../constants/planets";


const Background = styled.div`
background-image: url("https://th.bing.com/th/id/R.90c615c3509c77880470b187c6f2fe20?rik=1TywlaYSgBY2Lg&pid=ImgRaw&r=0");
background-size:cover;
background-repeat: no-repeat;
background-position: center center;
padding:20vh;
`
const StyleForms = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 30vw;
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
const PositionButton = styled.div`

display:flex;
justify-content:center;
`


const CreateTripPage = () =>{
    useProtectedPage()
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const {form, onChange, cleanFields} = useForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: ''
    })

    const createTrip = (event) =>{
        const headers = {auth: token}
        event.preventDefault()
        axios
        .post(`${url_base}/trips`, form, headers)
        .then(()=>{
            alert("Viagem criada com sucesso!!")
        })
        .catch(()=>{
            alert("Algo deu errado!")
        })
        cleanFields()
    }
    const currentDay = new Date()
    const fromToday = currentDay.getFullYear() + "-" +
        ("0" + (currentDay.getMonth() + 1)).substr(-2) + "-"
        + ("0" + currentDay.getDate()).substr(-2)
    return (

        <Background>
            <Title>CRIAR VIAGEM</Title>
            <StyleForms onSubmit={createTrip}>
                <StyleInputs
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    required />
                <StyleSelect
                    name={"planet"}
                    value={form.planet}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um Planeta</option>
                    {planets.map((planet) => {
                        return <option value={planet} key={planet}>{planet}</option>
                    })}
                </StyleSelect>
                <StyleInputs
                    placeholder={"Data"}
                    type={"date"}
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    required
                    min={fromToday} />
                <StyleInputs
                    placeholder={"Descrição da Viagem"}
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    required />
                <StyleInputs
                    placeholder={"Duração da Viagem em dias"}
                    type={"number"}
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={onChange}
                    required />
                <PositionButton>
                    <StyleButton onClick={()=>goBack(navigate)}>Voltar</StyleButton>
                    <StyleButton>CRIAR</StyleButton>
                </PositionButton>
            </StyleForms>
        </Background>
    )
}

export default CreateTripPage;