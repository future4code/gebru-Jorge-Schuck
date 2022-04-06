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


const StylePage = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 40px;
`

const LoginPage = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }
    const onChangePassword = (event) =>{
        setPassword(event.target.value)
    }
    const onSubmitLogin = () => {
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/jorge-schuck-gebru/login"
        const body = {
            email: email,
            password: password
        }

        axios
        .post(URL, body)
        .then((res) =>{
            localStorage.setItem("token", res.data.token)
            goToAdminHomePage(navigate)
        })
        .catch((err) =>{
            console.log("Erro:", err.response)
        })
    }

    return (

        <StylePage>
            <h2>Login Page</h2>
            <div>
            <input placeholder="Email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            />
            <input placeholder="Senha"
            type="password"
            value={password}
            onChange={onChangePassword}/>
            </div>
            <div>
                <button onClick={()=>goBack(navigate)}>Voltar</button>
                <button onClick={onSubmitLogin}>Entrar</button>
            </div>
        </StylePage>
    )
}

export default LoginPage;