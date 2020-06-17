import React, { Component } from 'react'
// import axios from 'axios';
import './index.css'
import { connect } from 'react-redux';
import * as usuariosActions from '../actions/usuariosAction';

class Usuarios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // usuarios: []
        }
    }

    componentDidMount() {
        this.props.traerTodos();
    }

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

        if (this.props.error) {
            return (<div>{this.props.error}</div>)
        }

        if (this.props.loading) {
            return (<div>Loading...</div>)
        }

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
const EstadosAPropiedades = ({ UsuarioReducer: { usuarios, error, loading } }) => {
    return {
        usuarios,
        error,
        loading
    };
};

export default connect(EstadosAPropiedades, usuariosActions)(Usuarios);
