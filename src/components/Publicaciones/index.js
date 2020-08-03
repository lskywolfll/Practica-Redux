import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as usuariosActions from '../actions/usuariosAction';
import * as publicacionesActions from '../actions/publicacionesAction';
import './index.css'

class Publicaciones extends Component {
    static propTypes = {
        match: PropTypes.object
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id);

        this.props.traerUsuarioPorId(id);
        this.props.traer_Las_Publicaciones_Por_Usuario_ID(id);
    }

    render() {
        if (this.props.loading) {
            return <div>Loading...</div>
        }

        if (this.props.error) {
            return <div>Error</div>
        }

        return (
            <div>
                <h1 style={{ marginBottom: 55 }}>Publicaciones de {this.props.usuario.name}</h1>

                {this.props.publicaciones.map(({ title, body }, posicion) => (
                    <div key={posicion}>
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                ))}
            </div>
        )
    }
}

const EstadosAPropiedades = ({ UsuarioReducer: { usuarios, error, loading, usuario, post }, PublicacionesReducer: { publicaciones } }) => {
    return {
        usuarios,
        error,
        loading,
        usuario,
        post,
        publicaciones
    };
};

const AccionesAPropiedades = {
    ...usuariosActions,
    ...publicacionesActions
}

export default connect(EstadosAPropiedades, AccionesAPropiedades)(Publicaciones);
