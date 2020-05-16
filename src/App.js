import React from 'react';
import Pelicula from './components/Pelicula'
import Descripcion from './components/Descripcion'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Pelicula titulo={"Batman"}/>
        <Descripcion/>
      </div>
    </div>
  );
}

export default App;
