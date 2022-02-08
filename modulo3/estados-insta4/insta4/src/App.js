import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  
`
const QuadroPost = styled.input`
border-radius: 5px;

`
class App extends React.Component {
  state = {
    
    postagens: [

      {
          nomeUsuario:'paulinha',
          fotoUsuario: 'https://picsum.photos/50/50',
          fotoPost:'https://picsum.photos/200/177'
      },
      {
          nomeUsuario:'joao',
          fotoUsuario:'https://picsum.photos/50/48',
          fotoPost:'https://picsum.photos/200/148'
      },
      {
          nomeUsuario:'gisele',
          fotoUsuario:'https://picsum.photos/50/49',
          fotoPost:'https://picsum.photos/200/150'
      }
    ],

    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  adicionaUsuario = () =>{
    const novoUsuario = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novoPostagens = [...this.state.postagens, novoUsuario];

    this.setState({postagens: novoPostagens})
    this.setState({ valorInputUsuario: "" });
    this.setState({ valorInputFotoUsuario: "" });
    this.setState({ valorInputFotoPost: "" });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value})
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value})
  }

  render() {

    const posts = this.state.postagens.map((usuario) =>{
      return (
        <Post
          nomeUsuario={usuario.nomeUsuario}
          fotoUsuario={usuario.fotoUsuario}
          fotoPost={usuario.fotoPost}
        />
      );
    });


    return (
      <MainContainer>
        
        <QuadroPost
        value={this.state.valorInputUsuario}
        onChange={this.onChangeInputUsuario}
        placeholder={"Usuario"}/>

        <QuadroPost
        value={this.state.valorInputFotoUsuario}
        onChange={this.onChangeInputFotoUsuario}
        placeholder={"Foto Usuario"}/>

        <QuadroPost
        value={this.state.valorInputFotoPost}
        onChange={this.onChangeInputFotoPost}
        placeholder={"Foto Post"}/>

        <button onClick={this.adicionaUsuario}>Adicionar</button>
        
        <div>{posts}</div>
        
        
        
      </MainContainer>
    );
  }
}

export default App;
