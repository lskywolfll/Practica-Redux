import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as usuariosActions from '../actions/usuariosAction';
import './index.css'

class Publicaciones extends Component {
    static propTypes = {
        match: PropTypes.object
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        this.props.traerUsuarioPorId(id);
        this.props.traerPostPorUsuarioID(id);
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

                {this.props.post.map(({ title, body }, posicion) => (
                    <div key={posicion}>
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                ))}
            </div>
        )
    }
}

const EstadosAPropiedades = ({ UsuarioReducer: { usuarios, error, loading, usuario, post } }) => {
    return {
        usuarios,
        error,
        loading,
        usuario,
        post
    };
};


export default connect(EstadosAPropiedades, usuariosActions)(Publicaciones);
