import React from 'react'
import styled from 'styled-components'

const StyledEtapa1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin-bottom: 30px;
`
class Etapa1 extends React.Component {
  render (){

  return(
    <StyledEtapa1>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <p>1. Qual o seu nome?</p>
        <input/>
        <p>2. Qual sua idade?</p>
        <input/>
        <p>3. Qual seu email?</p>
        <input/>
        <p>4. Qual a sua escolaridade</p>
        <input/>

    </StyledEtapa1>
  );
  }
}

export default Etapa1;