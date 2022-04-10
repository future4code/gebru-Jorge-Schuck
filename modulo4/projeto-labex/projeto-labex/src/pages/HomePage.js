import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage } from "../routes/cordinators";
import { goToLoginPage } from "../routes/cordinators";

const Background = styled.div`
background-image: url("https://th.bing.com/th/id/R.90c615c3509c77880470b187c6f2fe20?rik=1TywlaYSgBY2Lg&pid=ImgRaw&r=0");
background-size:cover;
background-repeat: no-repeat;
background-position: center center;
padding:10vh;
`
const StylePage = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 20vh;
margin-bottom:50vh;
`
const Title = styled.h1`
color:white;
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
const StyleButtonRight = styled.button`
background-color: #2F4F4F	;
color: white;
width: 20vw;
height: 2vw;
margin-left:1vh;
border-radius:10px;
&:hover{
    color: black;
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
    transition: all 0.5s;
}
`



const HomePage = () =>{

  const navigate = useNavigate()

    return (
      <Background>
        <StylePage>
        <Title>LabeX</Title>
            <div>
                <StyleButtonLeft onClick={()=>goToListTripsPage(navigate)}>Ver Viagens</StyleButtonLeft>
                <StyleButtonRight onClick={()=>goToLoginPage(navigate)}>Área de Admin</StyleButtonRight>
            </div>
        </StylePage>
      </Background>
    )
  }
  export default HomePage;