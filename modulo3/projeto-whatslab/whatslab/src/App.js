import React from 'react';
import styled from 'styled-components'

import './App.css';
const Container = styled.div`
  max-width: 600px;
    height: 90vh;
    border: 2px solid black;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column-reverse;
    margin: auto;
    background-image: url(https://i.pinimg.com/originals/ef/74/90/ef749024703cafaa02500e31c5c1a0f2.jpg);
    word-wrap: break-word;
    border-radius: 15px;
    margin-top:20px;
    font-size: 20px;

  

  
  
`
const StyledInputs = styled.input`
width: 19.5%;
margin-bottom: 2px;
border-bottom-left-radius:15px;
margin-left:6px;

`
const  StyledInputs1= styled.input`
width: 58%;
border: 2px solid;
`
const  StyledButton = styled.button`
width: 17.3%;
border-bottom-right-radius:15px;

`
class App extends React.Component {

  
  state = {
    
    postagens: [],

    valorInputUsuario: "",
    valorInputMensagem: "",
    
  }

  adicionaUsuario = () =>{
    const novoUsuario = {
      nomeUsuario: this.state.valorInputUsuario,
      Mensagem: this.state.valorInputMensagem,
      
    };
    

    const novoPostagens = [...this.state.postagens, novoUsuario];

    this.setState({postagens: novoPostagens})
    this.setState({ valorInputUsuario: "" });
    this.setState({ valorInputMensagem: "" });
    
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value})
  }

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value})
  }
  onKeyUp(event) {
    if (event.charCode === 13) {
      this.setState({ inputValue: event.target.value });
    }
}

  

  render() {

    const postagens = this.state.postagens.map((usuario) =>{
      return (
        <div>
          <b>{usuario.nomeUsuario}:</b> 
          {usuario.Mensagem}
          
          </div>
      );
    });


    return (
      
      <Container>
        
        <div>
        <StyledInputs
        value={this.state.valorInputUsuario}
        onChange={this.onChangeInputUsuario}
        placeholder={"Usuario"}/>

        <StyledInputs1
        value={this.state.valorInputMensagem}
        onChange={this.onChangeInputMensagem}
        placeholder={"Mensagem"}/>
        
        

        <StyledButton onClick={this.adicionaUsuario}>Enviar</StyledButton>
        </div>
        <div>{postagens}</div>
        
        
        
      </Container>
    );
  }
}

export default App;
