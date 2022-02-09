import React from 'react'
import styled from 'styled-components'

const StyledFinal = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin-bottom: 30px;
`
class Final extends React.Component {
  render (){

  return(
    <StyledFinal>
        <h1>O FORMULÁRIO ACABOU</h1>
        <h3>Muito obrigado por participar! Entraremos em contato!</h3>

    </StyledFinal>
  );
  }
}

export default Final;