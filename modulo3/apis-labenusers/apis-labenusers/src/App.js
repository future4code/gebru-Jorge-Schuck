import React from "react";
import axios from "axios";
import Usuarios from "./components/Usuarios.js"
import Cadastro from "./components/Cadastro.js";



export default class App extends React.Component {

  state = {
    renderedScreen: 'Cadastro'
  }

  chooseScreen = () => {
    switch (this.state.renderedScreen) {
      case 'Cadastro':
        return <Cadastro goToUsersListScreen={this.goToUsersListScreen} />
      case 'Usuarios':
        return <Usuarios goToSignUpScreen={this.goToSignUpScreen} />
      default:
        return <h2>Erro! Página não encontrada!</h2>
        
    }
    
  }

  goToSignUpScreen = () => {
    this.setState({ renderedScreen: 'Cadastro' })
  }

  goToUsersListScreen = () => {
    this.setState({ renderedScreen: 'Usuarios' })
  }
  

  render() {
   

    return (

      <div>
      {this.chooseScreen()}
      </div>
    )
  }
}


