import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from "axios";

const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState({})
  
  useEffect(() => {
      pegaPokemon(props.pokemon)
  }, [pokemon])

  
//   componentDidUpdate(prevProps) {
//     // aqui, é feita uma verificação da props anterior com a props atual.
//     // Caso a props anterior seja diferente da props atual,
//     // a função pegaPokemon é chamada.
//     if (prevProps.pokemon !== this.props.pokemon) {
//       this.pegaPokemon(this.props.pokemon);
//     }
//   }

  
  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
      
  };

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  }


export default PokeCard;
