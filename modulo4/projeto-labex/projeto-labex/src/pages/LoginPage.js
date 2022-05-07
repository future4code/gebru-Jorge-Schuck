import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/cordinators";
import { goToAdminHomePage } from "../routes/cordinators";
import useForm from "../hooks/useForm";

const Background = styled.div`
background-image: url("https://th.bing.com/th/id/R.90c615c3509c77880470b187c6f2fe20?rik=1TywlaYSgBY2Lg&pid=ImgRaw&r=0");
background-size:cover;
background-repeat: no-repeat;
background-position: center center;
padding:35vh;
`
const StylePage = styled.form`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-bottom:20vh;
`
const StyleButtonLeft = styled.button`
background-color: #2F4F4F	;
color: white;
width: 20vw;
height: 2vw;
margin-left:0.5vw;
border-radius:10px;
&:hover{
    color: black;
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
    transition: all 0.5s;
}
`
const StyleButtonRight = styled.button`
background-color: #2F4F4F	;
color: white;
width: 20vw;
height: 2vw;
margin-left: 35vh;
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
const StyleInputsLeft = styled.input`
border-radius:5px;
margin-right:8vh;
margin-bottom:1vh;
height:20px;
`
const StyleInputsRight = styled.input`
border-radius:5px;
height:2vh;
margin-bottom:1vh;

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

        <div>
            <Background>
            <StylePage onSubmit={onSubmitLogin}>
            <Title>Login Page</Title>
            <div>
            <StyleInputsLeft 
            placeholder="Email"
            name='email'
            value={form.email}
            onChange={onChange}
            required
            type={"email"}
            
            />
            <StyleInputsRight 
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
                <StyleButtonLeft>Entrar</StyleButtonLeft>
            </div>
            </StylePage>
            <StyleButtonRight onClick={()=>goBack(navigate)}>Voltar</StyleButtonRight>
            </Background>
            
        </div>
    )
}

export default LoginPage;