import React from "react";
import axios from "axios";
import styled from "styled-components";

const Estilobotao = styled.button`
display: flex;
  justify-content: center;
  margin: 10px;
  margin-left:50px;
  padding: 10px;
  border: 1px solid black;
  width: 280px;
  font-size:18px;
`
const EstiloCriarUsuario = styled.button`
display: flex;
  justify-content: center;
  margin: 10px;
  margin-left:50px;
  padding: 10px;
  border: 1px solid black;
  width: 280px;
  font-size:18px;
`
const EstiloInputs = styled.input`
display: flex;
  justify-content: space-between;
  margin: 10px;
  margin-left:50px;
  padding: 10px;
  border: 1px solid black;
  width: 258px;
`
const EstiloTexto = styled.h2`
display: flex;
  justify-content: center;
  margin: 10px;
  margin-left:50px;
  padding: 10px;
  
  width: 258px;
`

const urlUser =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers: {
    Authorization: "jorge-schuck-gebru"
  }
}

export default class Cadastro extends React.Component {

  state = {
    users: [],
    userInput: "",
    emailInput: ""

  }
  

  componentDidMount() {
    this.getAllUsers();
  }
  getAllUsers = () => {
    axios
      .get(urlUser, headers)
      .then((res) => {
        this.setState({ users: res.data })
        // console.log(res.data.result)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  createUser = () => {
    const body = {
      name: this.state.userInput,
      email: this.state.emailInput
    }
    axios
      .post(urlUser, body, headers)
      .then((res) => {
        console.log(res.data.result)



        this.setState({ userInput: "" })
        this.setState({ emailInput: "" })
        alert("Usuário Cadastrado com Sucesso")

        this.getAllUsers()
      .catch((err) => {
      console.log(err.res.data.message)
      alert("Inserção Inválida")

          })
      })
    this.setState({ userInput: "" })
    this.setState({ emailInput: "" })

  }
  onUserTextChange = (event) => {
    this.setState({ userInput: event.target.value });
  };
  onEmailTextChange = (event) => {
    this.setState({ emailInput: event.target.value });
  };



  render() {
    

    return (

      <div>
        <Estilobotao onClick={this.props.goToUsersListScreen}>
          Tela de Usuários
        </Estilobotao>
        <EstiloTexto>Tela de Cadastro</EstiloTexto>
        <EstiloInputs
          value={this.state.userInput}
          placeholder="Nome"
          onChange={this.onUserTextChange}
        />
        <EstiloInputs
          value={this.state.emailInput}
          placeholder="Email"
          onChange={this.onEmailTextChange}
        />
        <EstiloCriarUsuario onClick={this.createUser}>Criar Usuário</EstiloCriarUsuario>

        

      </div>
    )
  }
}
