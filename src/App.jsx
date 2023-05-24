import React from 'react';
import Nav from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Nav />
      <ItemListContainer greeting="¡BIENVENIDOS A NUESTRO MUNDO ARTESANAL!" />
      <h2>Unidos por la cerveza</h2>
    </div>

  );
}

export default App;
