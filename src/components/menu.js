import React from 'react'
import { Link } from 'react-router-dom'
import './styles/menu.css'
import 'antd/dist/antd.css'

function menu() {
    return (
        <nav id="menu">
            <Link to="/">Usuarios</Link>

            <Link to="/Tareas">Tareas</Link>
        </nav>
    )
}

export default menu
