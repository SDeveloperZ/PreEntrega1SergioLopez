import React from "react";
import Nav from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/contador/ItemCount";

function App() {
  return (
    <div className="App">
      <Nav />
      <h2>Unidos por la cerveza</h2>
      <ItemListContainer greeting={"6 ESTILOS, 6 HISTORIAS."} />
      <ItemCount
        initial={1}
        stock={10}
        onAdd={(quatity) => console.log("Cantidad agregada ", quatity)}
      />
    </div>
  );
}

export default App;
