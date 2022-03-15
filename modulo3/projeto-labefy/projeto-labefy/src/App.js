import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CreatePlaylistScreen from "./components/CreatePlaylistScreen"
import PlaylistScreen from './components/PlaylistScreen';

const EstiloBotoesPrincipais = styled.div`
display:flex;
justify-content:space-evenly;
margin:30px;

`
const EstiloFundo = styled.div`

align-items:center;
justify-content:center;
background-color:grey;
background-image:url(https://h1.hqtexture.com/87/8657/1395012137-02.jpg);
background-repeat:no-repeat;
padding-bottom:30%;

`
const Botoes = styled.button`
background-color: black;
    border-radius:10px;
    border: none;
    color: white;
    padding: 16px 32px;
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

export default class App extends React.Component {

  state = {
    currentPage: "CreatePlaylist"
  }

  choosePage = () =>{
    switch (this.state.currentPage){
      case "CreatePlaylist":
        return <CreatePlaylistScreen goToPlaylistScreen={this.goToPlaylistScreen}/>
        case "PlaylistScreen":
          return <PlaylistScreen goToCreatePlaylistScreen={this.goToCreatePlaylistScreen}/>
          default:
            return alert("Pagina não encontrada")
    }
  }

  goToCreatePlaylistScreen =()=>{
    this.setState({ currentPage: "CreatePlaylist"})
  }
  goToPlaylistScreen =() =>{
    this.setState({ currentPage: "PlaylistScreen"})
  } 


  render() {
    return (
      <EstiloFundo>
         <EstiloBotoesPrincipais>
         <Botoes onClick={this.goToCreatePlaylistScreen}>Faça sua Playlist</Botoes>
         <Botoes onClick={this.goToPlaylistScreen}>Suas Playlists</Botoes>
         </EstiloBotoesPrincipais>
        {this.choosePage()}
      </EstiloFundo>
    )
  }
}
