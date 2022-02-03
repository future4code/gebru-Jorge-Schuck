import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/177'}
        />
        <Post
          nomeUsuario={'joao'}
          fotoUsuario={'https://picsum.photos/50/48'}
          fotoPost={'https://picsum.photos/200/148'}
        />
        <Post
          nomeUsuario={'gisele'}
          fotoUsuario={'https://picsum.photos/50/49'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
