import React from "react";
import axios from "axios";
import styled from "styled-components";

const EstiloTitulo = styled.h1`
font-family:Arial, Helvetica, sans-serif ;
font-size:80px ;
`
const EstiloContainer = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
`
const EstiloInput = styled.input`
border-radius:7px ;
height:20px;
`
const Botoes1 = styled.button`
background-color: black;
    border-radius:5px;
    border: none;
    color: white;
    padding: 03px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size:20px;
`
const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
    headers: {
      Authorization: "jorge-schuck-gebru"
    }
  }
export default class CreatePlaylist extends React.Component {
    state = {
        playlist:""
    }

    onChangeInputPlaylist = (event) =>{
        this.setState({playlist: event.target.value})
    }

    createPlaylist = async() => {
        
        const body = {
            name: this.state.playlist
        }
        axios
        .post(url, body, headers)
        .then((res)=>{
            console.log(res.data.result)
            this.setState({playlist:res.data.result})
            alert("Lista Criada")
            .catch((err)=>{
                alert(" Erro ")
            })
        })
    }

    render(){
        return (
            <div>
                <EstiloContainer>
                    <EstiloTitulo>Labefy</EstiloTitulo>
                    <h3>Crie sua Playlist</h3>
                    <h3>de forma rápida e fácil</h3>
                    <EstiloInput
                    placeholder={"Nome da Playlist"}
                    value={this.state.playlist}
                    onChange={this.onChangeInputPlaylist}
                    />
                    <Botoes1 onClick={this.createPlaylist}>
                        Criar
                    </Botoes1>
                </EstiloContainer>
            </div>
        )
    }
}


