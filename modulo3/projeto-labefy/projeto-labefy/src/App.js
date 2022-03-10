import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CreatePlaylistScreen from "./components/CreatePlaylistScreen"
import PlaylistScreen from './components/PlaylistScreen';


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
      <div>
         <div>
        <button onClick={this.goToPlaylistScreen}>PLAYLISTS</button>
        <button onClick={this.goToCreatePlaylistScreen}>CRIE SUA PLAYLIST</button>
         </div>
        {this.choosePage()}
      </div>
    )
  }
}
