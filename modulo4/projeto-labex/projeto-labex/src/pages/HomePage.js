import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage } from "../routes/cordinators";
import { goToLoginPage } from "../routes/cordinators";

const StylePage = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
margin-top: 40px;
`


const HomePage = () =>{

  const navigate = useNavigate()

    return (
      <StylePage>
        <h1>Labex</h1>
            <div>
                <button onClick={()=>goToListTripsPage(navigate)}>Ver Viagens</button>
                <button onClick={()=>goToLoginPage(navigate)}>Área de Admin</button>
            </div>
      </StylePage>
    )
  }
  export default HomePage;