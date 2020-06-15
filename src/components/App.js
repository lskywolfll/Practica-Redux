import React from 'react'
import Menu from './menu';
import Usuarios from './usuarios/index';
import Tareas from './tareas/tareas';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Route exact path="/Tareas" component={Tareas} />
      <Route exact path="/" component={Usuarios} />
    </div>
    {/* <Route exact path="/Usuarios" component={Usuarios} /> */}
  </BrowserRouter>
)

export default App
