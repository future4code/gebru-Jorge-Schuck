import React from "react";
import axios from "axios";
import styledComponents from "styled-components";
import Usuarios from "./components/Usuarios.js"

const urlUser =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers: {
    Authorization: "jorge-schuck-gebru"
  }
}

export default class App extends React.Component {

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

  mudaPagina = () => {
    if (this.state.paginaAtual === "App") {
      this.setState({ paginaAtual: "Usuarios" });
    } else {
      this.setState({ paginaAtual: "App" });
    }
  };

  render() {
    // const usersComponents = this.state.users.map((novo) => {
    //   return <li key={novo.id}> {novo.name}</li>
    // })

    return (

      <div>
        <div>
          <button onClick={this.mudaPagina}>Trocar de Tela</button>
          {this.state.paginaAtual === "App" ? <App/> : <Usuarios/>}
        </div>
        <input
          value={this.state.userInput}
          placeholder="Nome"
          onChange={this.onUserTextChange}
        />
        <input
          value={this.state.emailInput}
          placeholder="Email"
          onChange={this.onEmailTextChange}
        />
        <button onClick={this.createUser}>Criar Usuário</button>

        

      </div>
    )
  }
}


