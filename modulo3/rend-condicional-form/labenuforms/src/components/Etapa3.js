import React from 'react'
import styled from 'styled-components'

const StyledEtapa3 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin-bottom: 30px;
`
class Etapa3 extends React.Component {
  render (){

  return(
    <StyledEtapa3>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <p>5. Por que você nao terminou um curso de graduação?</p>
        <input/>
        <p>6. Você fez algum curso complementar?</p>
        <input/>

    </StyledEtapa3>
  );
  }
}

export default Etapa3;