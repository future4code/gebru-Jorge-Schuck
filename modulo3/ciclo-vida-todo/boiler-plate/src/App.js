import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto:'Lavar o Carro',
          completa: false
        },
        
      ],
      inputValue: '',
      filtro: ''
    }

 

  componentDidUpdate() {
    
  };

  componentDidMount() {
    const tarefas =localStorage.getItem ("Tarefas") ? JSON.parse(localStorage.getItem ("Tarefas")) : []
    console.log(tarefas)
    this.setState({tarefas: tarefas})
  };
  

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
    
  }
  
  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto:this.state.inputValue,
      completa: false
    }
    const novaListaDeTarefas = [novaTarefa, ... this.state.tarefas]
    this.setState({tarefas: novaListaDeTarefas})
    localStorage.setItem("Tarefas", JSON.stringify(novaListaDeTarefas))
    
    
  }

  selectTarefa = (id) => {
    const NovaListaDeTarefas = this.state.tarefas.map((Tarefa)=>{
      if (id === Tarefa.id){
        const novaTarefa = {
          ...Tarefa,
          completa: !Tarefa.completa
        }
        return novaTarefa
      }else{
        return Tarefa
      }
    })
    this.setState({tarefas: NovaListaDeTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
