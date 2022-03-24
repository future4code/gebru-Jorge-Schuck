import React, { useState, useEffect } from "react";
import ImgYes from './img/yes.png'
import ImgX from './img/no.png'
import ImgFlame from './img/flame.png'
import axios from "axios";
import styled from "styled-components";

const StyleDiv = styled.div`
background-color: greenyellow;
display: flex;
justify-content: center;
flex-direction: column;
border-radius: 15px;
width: 25%;
height: 85%;
position: fixed;
margin-left: 550px;
padding: 30px;
`
const StyleText = styled.h4`
font-size: xx-large;
text-align: center;
`

const StyleImg = styled.img`
width: 70%!important;
height: 65%!important;

border-radius: 30px;
display: flex;
justify-content: center;
align-self: center;
`
const StyleCard = styled.div`
border:1px solid;
display:flex;
height:60%;
flex-direction:column;
align-items:center;
justify-content:center;
`
const StyleProfile = styled.p`
font-size: 40px;
text-align: center;
margin-left: 70px;
margin-top: 2px;
/* position:absolute; */
color: black; 
`
const StyleDescription = styled.div`
font-size: 25px;
text-align: center;
`

const ImgButton = styled.img`
width: 60px;
background-color:white;
border-radius: 50px;
margin-bottom: 2px;
`
const StyleButtonFlame = styled.img`
width: 60px;
background-color:pink;
border-radius: 50px;
margin-bottom: 2px;
`

const TitleStyle = styled.h3`
margin: 0;
margin-bottom:20px;
padding: 5px;
font-size: 50px;
font-family:Verdana, Geneva, Tahoma, sans-serif;
text-align: center;
`

const StileDivButtons = styled.button`
display:flex;
background-color:greenyellow;
border: white;
border-color: pink;
justify-content: space-between;
margin-left: 15px;
margin-right: 15px;
`

const ButtonStyle = styled.button`
border-radius: 50px;
border-color: transparent;
background-color: transparent;
display: flex;

justify-content: space-evenly;
width: 50px;
height:60px;
cursor: pointer;
:hover {
    transform: scale(1.2);
    transition: all 0.2s;
  } 
`


const ProfileScreen = (props) => {
   const [profile, setProfile] = useState({})

   const aluno = "jorge-schuck-gebru"
   
    const getProfile = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`;
        axios
          .get(url)
          .then((res) => {
            setProfile(res.data.profile);
            console.log(res.data)
          })
          .catch((e) => {
            alert("Algo deu Errado");
          });
      };

      const choosePerson = (idProfile, choice) => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`;
        const body =
        {
            id: idProfile,
            choice: choice
        }    
        axios
          .post(url,body)
          .then((res) => {
            getProfile(res.data)
            console.log(res.data)

          })
          .catch((e) => {
            alert("Algo deu Errado");
          });
      };

      useEffect(() => {
        getProfile();
    }, [setProfile]
    
    );
      


    
return (
    <div>
        {!profile ? <StyleText> Ah não, acabaram-se os perfis. Atualize Página  </StyleText>:
        <StyleDiv>
          <ButtonStyle onClick={props.goToNextScreen}>
            <StyleButtonFlame src = {ImgFlame}/>
          </ButtonStyle>

          <TitleStyle>ASTROMATCH</TitleStyle>

          <StyleCard>
          <StyleImg src={profile.photo}/>
          <StyleProfile> {profile.name}, {profile.age}</StyleProfile>
          </StyleCard>
          <br/>
          <StyleDescription>{profile.bio}</StyleDescription>

          <StileDivButtons>
            <ButtonStyle onClick = {() => choosePerson(profile.id, false)}>
              <ImgButton src = {ImgX}/>
            </ButtonStyle>

            <ButtonStyle onClick = {() => choosePerson(profile.id, true)}> 
              <ImgButton src = {ImgYes}/>
            </ButtonStyle>
          </StileDivButtons>

        </StyleDiv>
    
      }
      
    </div>
  );
}

export default ProfileScreen;