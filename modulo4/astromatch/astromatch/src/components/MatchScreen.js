import React, { useState, useEffect} from "react";
import ImgBack from './img/back.png'
import axios from "axios";
import styled from "styled-components";
const StyleListMatches = styled.div`
  padding: 20px;
  margin: 20px;
  background-color:white;
  border-radius:15px;
  display: flex;
  
  justify-content: space-between;
  align-items: center;
  width: 350px;
  
`
const StyleDiv = styled.div`
background-image: url(https://images2.fanpop.com/image/photos/9800000/blue-love-love-9844146-1024-768.jpg);
background-repeat:round;
display: flex;
justify-content: center;
flex-direction: column;
border-radius: 15px;
width: 25%;
height: 800px;
margin-left: 550px;
padding: 30px;
`
const ButtonStyle = styled.button`
border-radius: 50px;
border:none;
display: flex;
justify-content: space-evenly;
align-items: center;
width: 50px;
height:60px;

`
const StyleButton = styled.img`
width: 60px;
background-color:pink;
border-radius: 50px;
margin-bottom: 2px;
`
const ImgProfileMatch = styled.img`
width: 100px;
height: 90px;
border-radius: 30px;
`

const StyleName = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: large;
text-align: center;
`

const StyleText = styled.h3`
margin: 0;
padding: 5px;
font-size: xx-large;
text-align: center;
`


const MatchScreen = (props) => {
    const [matchList, setMatchList] = useState([])
    const aluno = "jorge-schuck-gebru"

  const getMatches = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`;
    axios
      .get(url)
      .then((res) => {
         setMatchList(res.data.matches);
      })
      .catch((e) => {
        alert('Algo deu Errado');
      });
      
  };

  useEffect(() => {
    getMatches();
}, [setMatchList]

);
 
const Matches = matchList.map((ListProfile) =>{
  return (
  <StyleListMatches key={ListProfile.id}>
    <ImgProfileMatch src={ListProfile.photo}/>
    <StyleName>{ListProfile.name} </StyleName>
  </StyleListMatches>
  )
}) 

        return (
          <div>
            <StyleDiv>
              
              <ButtonStyle onClick = {props.backScreen}>
                <StyleButton src = {ImgBack}/>
                </ButtonStyle>
                <StyleText> Matches: </StyleText>
                {Matches}
                
            </StyleDiv>
                
          </div>
        );
    
    }

    export default MatchScreen;