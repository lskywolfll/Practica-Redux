import React, { Component } from 'react'
// import axios from 'axios';
import './index.css'
import { connect } from 'react-redux';

class Usuarios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // usuarios: []
        }
    }

    // async componentDidMount() {
    //     const { data } = await axios.get('http://jsonplaceholder.typicode.com/users');

    //     this.setState({
    //         usuarios: data
    //     })
    // }

    ponerFilas = () => (
        this.props.usuarios.map(({ name, email, website }, posicion) => (
            <tr key={posicion}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{website}</td>
            </tr>
        ))
    )

    render() {
        return (
            <div>
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

                <button onClick={this.props.obtenerUsuarios}>Click</button>
            </div>
        )
    }
}


// El capturador de los estados que requiere este componente para reaccion de manera dinamica
// Los estados lo convertiremos en propiedades(props) la cual podremos usar de forma unica en nuestro componente
// or mapStateToProps
const EstadosAPropiedades = estado => {
    return {
        usuarios: estado.UsuarioReducer.usuarios
    };
};

// Funciones usadas por props
const CambiosDeEstados = accion => {
    return {
        obtenerUsuarios: () => accion({ type: 'TRAER_USUARIOS' }),
    };
};

export default connect(EstadosAPropiedades, CambiosDeEstados)(Usuarios);
