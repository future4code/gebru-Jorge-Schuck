import React from 'react';

import styled from 'styled-components'

const EstilosCardGrande = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px;

`
const EstiloImgCardGrande = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const EstiloH4CardGrande = styled.h4`
margin-bottom: 15px;
`
const EstiloCardGrandeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
function CardGrande(props) {
    return (
        <EstilosCardGrande className="bigcard-container">
            <EstiloImgCardGrande src={ props.imagem } />
            <EstiloCardGrandeDiv>
                <EstiloH4CardGrande>{ props.nome }</EstiloH4CardGrande>
                <p>{ props.descricao }</p>
            </EstiloCardGrandeDiv>
        </EstilosCardGrande>
    )
}

export default CardGrande;