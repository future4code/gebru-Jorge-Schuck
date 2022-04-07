import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import ApplicationFormPage from "./ApplicationFormPage"
import CreateTripPage from "./CreateTripPage"
import ListTripPage from "./ListTripsPage"
import TripDetailsPage from "./TripDetailsPage"
import HomePage from "./HomePage";
import AdminHomePage from "./AdminHomePage"
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/cordinators";
import { goToAdminHomePage } from "../routes/cordinators";
import { goToTripDetailsPage } from "../routes/cordinators";
import { url_base } from "../constants/url_base";
import useForm from "../hooks/useForm";

const StylePage = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 40px;
`

const LoginPage = () =>{
    const { form, onChange, cleanFields } = useForm({
        email: '',
        password: '',
      })

    const navigate = useNavigate()
        

    const onSubmitLogin = (event) => {
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/jorge-schuck-gebru/login"
        event.preventDefault()
        console.log("Login feito com sucesso", form)

        axios
        .post(URL, form)
        .then((res) =>{
            localStorage.setItem("token", res.data.token)
            goToAdminHomePage(navigate)
        })
        .catch((err) =>{
            console.log("Erro:", err.response)
        })
        cleanFields()  
    }
    

    return (

        <StylePage>
            <form onSubmit={onSubmitLogin}>
            <h2>Login Page</h2>
            <div>
            <input 
            placeholder="Email"
            name='email'
            value={form.email}
            onChange={onChange}
            required
            type={"email"}
            
            />
            <input 
            placeholder="Senha"
            name='password'
            value={form.password}
            onChange={onChange}
            type={'password'}
            required
            pattern={'^.{3,}'}
            title={'A senha deve ter no mínimo 3 caracteres'}
            />
            </div>
            <div>
                <button>Entrar</button>
            </div>
            </form>
            <button onClick={()=>goBack(navigate)}>Voltar</button>
        </StylePage>
    )
}

export default LoginPage;