import React from "react";
import axios from "axios";
import styled from "styled-components";

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
                <div>
                    <h1>Labefy</h1>
                    <h3>Crie uma Playlist</h3>
                    <input
                    placeholder={"Nome da Playlist"}
                    value={this.state.playlist}
                    onChange={this.onChangeInputPlaylist}
                    />
                    <button onClick={this.createPlaylist}>
                        Criar Playlist
                    </button>
                </div>
            </div>
        )
    }
}


