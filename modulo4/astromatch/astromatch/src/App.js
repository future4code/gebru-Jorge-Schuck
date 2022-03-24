import React, {useState, useEffect} from "react";
import ProfileScreen from './components/ProfileScreen'
import axios from "axios";
import styled from "styled-components";
import MatchScreen from "./components/MatchScreen";

const ButtonStyle = styled.button`
display:flex;
justify-content:center;
border-radius: 3px;
border-color: pink;
background-color: black;
color: white;
width: 100px;
cursor: pointer;
position: absolute;
:hover {
    transform: scale(1.1);
    transition: all 0.2s;
  } 
margin-left: 20px;
font-size: large;
`


const App = () => {
  const [screen, setScreen] = useState (1)

  const renderScreen = () => {
    switch (screen){
      case 1:
      return <ProfileScreen goToNextScreen={goToNextScreen}/>;
      case 2:
      return <MatchScreen backScreen={backScreen}/>
      default:
      return alert("Algo Errado")

    }
  }

  const clearProfile = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jorge-schuck-gebru/clear`;
    axios
      .put(url)
      .then((res) => {
      })
      .catch((e) => {
        alert("Algo Errado");
      });
  };

  useEffect(() => {
    clearProfile();
}, []

);
  
  const goToNextScreen = () => {
    setScreen(screen +1)
  };
  const backScreen = () => { 
    setScreen(screen -1)
  };

    return (
      <div>
                <ButtonStyle onClick = {clearProfile}> Clear </ButtonStyle> 

        <div>{renderScreen()}</div>
      </div>
    );
}

export default App;