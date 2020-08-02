import React from 'react'
import Menu from './menu';
import Usuarios from './usuarios/index';
import Tareas from './tareas/tareas';
import { BrowserRouter, Route } from 'react-router-dom';
import Publicaciones from './Publicaciones';

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Route path="/Tareas" component={Tareas} />
      <Route path="/Publicaciones/:id" component={Publicaciones} />
      <Route exact path="/" component={Usuarios} />
    </div>
    {/* <Route exact path="/Usuarios" component={Usuarios} /> */}
  </BrowserRouter>
)

export default App
