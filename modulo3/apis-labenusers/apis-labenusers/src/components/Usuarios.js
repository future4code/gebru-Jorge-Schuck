import React from "react";
import styled from "styled-components";
import axios from "axios";

const EstiloLista = styled.li`
display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  width: 250px;
`
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

class Usuarios extends React.Component {

    state = {
        listaUsuario: [],
        paginaAtual: "ListaUsuario",
        id: "",
        name: ""

    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios
            .get(urlUser, headers)
            .then(response => {
                this.setState({ listaUsuario: response.data })
            })
    }
    deleteUser = userId => {

        if (("Tem certeza que deseja apagar o usuário?")) {
            axios
                .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
                    headers
                )
                .then(() => {
                    alert("Usuário apagado com sucesso!")
                    this.getAllUsers()
                
                })
                .catch(err => {
                    alert("ERRO AO APAGAR USUARIO")
                })
                
        }
    }
    searchUsers = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.name}&email=`, headers)
            .then(response => {
                this.setState({ listaUsuario: response.data })
            })
            .catch(error => {
                alert("Erro ao criar o usuário");
                console.log(error);
            })


    }


    render() {
        
        return (
            <div>
                
                    <div>
                    <Estilobotao onClick={this.props.goToSignUpScreen}>Tela de Cadastro</Estilobotao>
                        <EstiloTexto>Tela de Usuários</EstiloTexto>
                        <ul>
                            {this.state.listaUsuario.length === 0 && <div>Carregando...</div>}
                            {this.state.listaUsuario.map(usuario => {
                                return (
                                    <EstiloLista key={usuario.id}>
                                        <span onClick={() => this.mudarPagina(usuario.id)}>
                                            {usuario.name}
                                        </span>
                                        <button onClick={() => this.deleteUser(usuario.id)}>X</button>

                                    </EstiloLista>
                                )
                            })}
                        </ul>
                        
                        
                        
                    </div>
                
                
            </div>
        )
    }

}
export default Usuarios;


