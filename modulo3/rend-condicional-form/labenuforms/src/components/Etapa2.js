import React from 'react'
import styled from 'styled-components'

const StyledEtapa2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin-bottom: 30px;
`
class Etapa2 extends React.Component {
  render (){

  return(
    <StyledEtapa2>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <p>5. Qual curso?</p>
        <input/>
        <p>6. Qual a unidade de ensino?</p>
        <input/>

    </StyledEtapa2>
  );
  }
}

export default Etapa2;