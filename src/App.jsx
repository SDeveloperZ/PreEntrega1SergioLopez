import React from "react";
import Nav from "./components/NavBar";
import ItemListContainer from "./components/containers/ItemList/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Nav />
      <h2>Unidos por la cerveza</h2>
      <ItemListContainer greeting={"6 ESTILOS, 6 HISTORIAS."} />
    </div>
  );
}

export default App;
