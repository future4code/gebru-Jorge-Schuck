import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from "./img/jorge.jpeg"
import foto1 from "./img/tetra.jpg"
import foto2 from "./img/elis.jpg"
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="Jorge Guilherme Schuck" 
          descricao="Olá meu nome é Jorge Guilherme Schuck,
          tenho 40 anos e sou estudante de desenvolvimento Web Front-end, Back-end.
          Pretendo ser um profissional na área, desenvolvendo
          ferramentas e websites que facilitem o trabalho de muitas
          pessoas em inumeros segmentos profissionais."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div>
        <CardPequeno
        imagem1="https://th.bing.com/th/id/OIP.mz2l5kSuuFh9y3rCgkMcFwHaHa?w=127&h=128&c=7&r=0&o=5&pid=1.7"
        texto1="Email:"
        texto2="jorgegschuck@gmail.com"
        imagem2="https://th.bing.com/th/id/OIP.JvoM2YEBGxOKdtm9Sg57NQAAAA?w=119&h=128&c=7&r=0&o=5&pid=1.7"
        texto3="Endereço:"
        texto4="Teutonia RS"/>
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={foto1}
          nome="Operador de Envase Asséptico" 
          descricao="Fui Operador de Máquinas de envase de leite TetraPak  por cerca de 10 anos." 
        />
        
        <CardGrande 
          imagem={foto2} 
          nome="Elis" 
          descricao="Atualmente trabalho como líder de Vestiário pela Elis, Lavanderia Industrial." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
