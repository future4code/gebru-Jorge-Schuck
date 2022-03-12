import React from "react";
import axios from "axios";
import styled from "styled-components";

const EstiloInput = styled.input`
border-radius:7px ;
height:20px;
`
const EstiloContainer = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
`
const EstiloBotaoMusica = styled.button`
background-color: green;
    border-radius:10px;
    border: none;
    color: white;
    padding: 16px;
    text-align: center;
    
    font-size: 16px;
    margin: 4px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size:20px;
`
const EstiloContainer1 = styled.div`
display:flex;
margin: 30px ;
background-color:#D3D3D3;
border-radius:15px;
flex-direction: column;
justify-content:center;
align-items:center;
border: solid 1px;
`
const Botoes2 = styled.button`
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
const EstiloPlayer = styled.div`
display:flex;


justify-content:space-around;
margin: 10px;


`
const urls = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
    headers: {
      Authorization: "jorge-schuck-gebru"
    }
  }

export default class PlaylistScreen extends React.Component {
    state={
        playlists: [],
        playlist: [],
        song:"",
        artist:"",
        url:"",
        idPlaylist: "",
        detalhes: false
    }

    componentDidMount() {
        this.getPlaylist()
    }

    handleSong = (event) => {
        this.setState({song: event.target.value})
    }
    handleArtist = (event) =>{
        this.setState({artist: event.target.value})
    }
    handleUrl = (event) => {
        this.setState({url: event.target.value})
    }
    openDetails = () =>{
        this.setState({detalhes: true})
    }
    closeDetails = () =>{
        this.setState({detalhes: false})
    }

    getPlaylist = async() => {
        axios
        .get(urls, headers)
        .then(res => {
            this.setState({playlists: res.data.result.list})
            .catch((err)=>{
                alert(" Erro ")
            })
        })
        
    }

    deletePlaylist = async(playlistId) => {
        if (("Tem certeza que deseja apagar Playlist?")){
            axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}
            `, headers)
            .then(() =>{
                alert("Playlist Apagada com Sucesso!!")
                this.getPlaylist()
            })
            .catch(err =>{
                alert("Erro ao apagar Playlist")
            })
        }
    }

    getPlaylistTracks = async(playlistId) =>{
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks
        `, headers)
        .then(res => {
            this.setState({playlist: res.data.result.tracks, idPlaylist: playlistId})
            this.openDetails()
            console.log(this.state.playlist)
            .catch((err)=>{
                alert(" Erro ")
            })
        })
    }

    addTrackToPlaylist = async(playlistId) =>{
        const body = {
            name: this.state.song,
            artist: this.state.artist,
            url: this.state.url
        }
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks`
        ,body, headers)
        .then((res) =>{
            console.log(res.data.result)
            this.setState({song:"", artist:"", url:""})
            this.getPlaylistTracks(this.state.idPlaylist)
        })
    }

    removeTrack = async(trackId) => {
        if (("Tem certeza que deseja apagar a música?")){
            axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks/${trackId}`
            , headers)
            .then(() =>{
                alert("Música Apagada com Sucesso!!")
                this.getPlaylistTracks(this.state.idPlaylist)
            })
            .catch(err =>{
                alert("Erro ao apagar música")
            })
        }
    }
    render(){

        const PlaylistCreated = this.state.playlists.map((newList) => {
            return <div key={newList.id}>
                <div>
                    <h3>{newList.name}</h3>
                    <Botoes2 onClick={() => this.getPlaylistTracks(newList.id)}>ACESSAR</Botoes2>
                    <Botoes2 onClick={() => this.deletePlaylist(newList.id)}>DELETAR</Botoes2>
                </div>
            </div>
        })
        const playlistSongs = this.state.playlist.map((music) =>{
            return <EstiloPlayer key={music.id}>
                
                <p>{music.artist}___</p>
                <br/>
                <p>{music.name}</p>
                <audio ref="audio_tag" src={music.url} controls/>
                <Botoes2 onClick={() => this.removeTrack(music.id)}>Deleta Música</Botoes2>
            </EstiloPlayer>
        })

        const details = () =>{
            switch (this.state.detalhes) {
                case true:
                    return <EstiloContainer1>
                        <Botoes2 onClick={this.closeDetails}>Fechar Playlist</Botoes2>
                        <h2>Adicione uma Música a Playlist</h2>
                        <EstiloInput
                        placeholder={"Nome da Música"}
                        value={this.state.song}
                        onChange={this.handleSong}/>

                        <EstiloInput
                        placeholder={"Nome do Artista"}
                        value={this.state.artist}
                        onChange={this.handleArtist}/>

                        <EstiloInput
                        placeholder={"Url da Música"}
                        value={this.state.url}
                        onChange={this.handleUrl}/>
                        <EstiloBotaoMusica onClick={this.addTrackToPlaylist}>Adicionar Música</EstiloBotaoMusica>
                        {playlistSongs}
                    </EstiloContainer1>
                    case false:
                        return 
                    default:
                        return 
                        <h5>Erro</h5>
            }
        }
        return(
            <EstiloContainer>
                <EstiloContainer>
                    <h2>Minhas Playlists</h2>
                    {PlaylistCreated}
                    {details()}
                </EstiloContainer>
            </EstiloContainer>
        )
    }
}



