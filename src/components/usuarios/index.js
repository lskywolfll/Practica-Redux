import React, { Component } from 'react'
import './index.css'
import Loading from '../Loading/loading';
import Error from '../Error/error';
import TablaUsuarios from '../Tablas/usuarios/tabla';
import { connect } from 'react-redux';
import * as usuariosActions from '../actions/usuariosAction';

class Usuarios extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.traerTodos();
    }

    render() {

        if (this.props.error) {
            return (<Error error={this.props.error} />)
        }

        if (this.props.loading) {
            return (<Loading />)
        }

        return (
            <div>
                <TablaUsuarios
                    data={this.props.usuarios}
                    loading={this.props.loading}
                />

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
