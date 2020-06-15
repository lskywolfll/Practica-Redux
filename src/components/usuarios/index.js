import React, { Component } from 'react'
import axios from 'axios';
import './index.css'

class Usuarios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuarios: []
        }
    }

    async componentDidMount() {
        const { data } = await axios.get('http://jsonplaceholder.typicode.com/users');

        this.setState({
            usuarios: data
        })
    }

    ponerFilas = () => (
        this.state.usuarios.map(({ name, email, website }, posicion) => (
            <tr key={posicion}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{website}</td>
            </tr>
        ))
    )

    render() {
        return (
            <div className="margen">
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.ponerFilas()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Usuarios
