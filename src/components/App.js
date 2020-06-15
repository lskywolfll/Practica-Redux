import React from 'react'
import Menu from './menu';
import Usuarios from './usuarios/index';
import Tareas from './tareas/tareas';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Menu />
    <Route exact path="/Tareas" component={Tareas} />
    <Route exact path="/" component={Usuarios} />
    {/* <Route exact path="/Usuarios" component={Usuarios} /> */}
  </BrowserRouter>
)

export default App
