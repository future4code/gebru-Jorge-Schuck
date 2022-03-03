import React from "react";
import styled from "styled-components";
import axios from "axios";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import UserDetail from "./UserDetail";

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
    mudarPagina = userId =>{
        if (this.state.paginaAtual === "listaUsuario"){
            this.setState({paginaAtual: "userDetail", userId: userId})

        }else{
            this.setState({paginaAtual: "listaUsuario", userId: ""})
        }
    }
    mudarNome = event => {
        const novoNome = event.target.value;

        this.setState({ name: novoNome });
    }

    render() {
        return (
            <div>
                {/* {this.state.currentPage === "listaUsuario" ? ( */}
                    <div>
                        <ul>
                            {this.state.listaUsuario.length === 0 && <div>Carregando...</div>}
                            {this.state.listaUsuario.map(usuario => {
                                return (
                                    <li>
                                        <span onClick={() => this.mudarPagina(usuario.id)}>
                                            {usuario.name}
                                        </span>
                                        <button onClick={() => this.deleteUser(usuario.id)}>X</button>

                                    </li>
                                )
                            })}
                        </ul>
                        <hr />
                        <h4>Procurar Usuário</h4>
                        <input
                            placeholder="Nome para a busca"
                            type="text"
                            value={this.state.name}
                            onChange={this.mudarNome}
                        />
                        <button onClick={this.searchUsers}>Salvar Edição</button>
                    </div>
                {/* // ):(<UserDetail userId={this.state.userId} changePage={this.mudarPagina} />)} */}
                
            </div>
        )
    }

}
export default Usuarios;


