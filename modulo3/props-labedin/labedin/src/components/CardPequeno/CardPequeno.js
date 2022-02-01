import React from 'react';

import styled from 'styled-components'

const EstiloDiv = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding-left: 10px;
    padding-right: 400px;
    margin-bottom: 10px;
    height: 80px;
`
const EstiloImg = styled.img`
    width: 3vh;
    margin-right: 5px;
`

function CardPequeno (props){

    return(
    <div >
        <EstiloDiv className="smallcard-container">
            <EstiloImg src={props.imagem1}/>
           <h4>{props.texto1}</h4> 
           <p>{props.texto2}</p>
        </EstiloDiv>
        <EstiloDiv className="smallcard-container">
            <EstiloImg src={props.imagem2}/>
            <h4>{props.texto3}</h4>
            <p>{props.texto4}</p>
        </EstiloDiv>
    </div>
    )
}

export default CardPequeno;