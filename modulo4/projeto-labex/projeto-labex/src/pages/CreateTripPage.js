import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { goBack } from "../routes/cordinators";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import useForm from "../hooks/useForm";
import { url_base } from "../constants/url_base";
import { planets } from "../constants/planets";



const StylePage = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 40px;
`
const StyleForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

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

        <StylePage>
            <h1>CRIAR VIAGEM</h1>
            <StyleForm onSubmit={createTrip}>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    required />
                <select
                    name={"planet"}
                    value={form.planet}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um Planeta</option>
                    {planets.map((planet) => {
                        return <option value={planet} key={planet}>{planet}</option>
                    })}
                </select>
                <input
                    placeholder={"Data"}
                    type={"date"}
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    required
                    min={fromToday} />
                <input
                    placeholder={"Descrição da Viagem"}
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    required />
                <input
                    placeholder={"Duração da Viagem em dias"}
                    type={"number"}
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={onChange}
                    required />
                <div>
                    <button onClick={()=>goBack(navigate)}>Voltar</button>
                    <button>CRIAR</button>
                </div>
            </StyleForm>
        </StylePage>
    )
}

export default CreateTripPage;