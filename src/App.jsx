import React from 'react';
import Nav from './components/NavBar';
import Button from './components/common/Button';

function App() {

  //creamos una funcion
  const login = (e) => {
    e.preventDefault()
    
    console.log('Procesamos el login de un usuario');
  }





  return (
    <div className="App">
      <Nav />
      <h1>Bienvenido a mi tienda en línea</h1>

      <form>
        {/*comentario los input*/}
      <Button className="btn principal"
      type= "submit"
      onClick={login}
      text="iniciar sesion" />
      </form>
      
      {/* <Button text="Enviar" className="btn secundario" onClick={logout}/>
      <Button text="Enviar" className="btn secundario" onClick={sendmail}/> */}


    </div>

  );
}

export default App;
