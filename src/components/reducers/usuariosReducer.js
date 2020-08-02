import { TRAER_USUARIOS, ERROR, LOADING, TRAER_USUARIO_POR_ID } from '../types/usuariosTypes';

const INITIAL_STATE = {
    usuarios: [],
    error: null,
    loading: false,
    usuario: {
        name: ''
    },
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case TRAER_USUARIOS:
            return {
                ...state,
                usuarios: payload,
                loading: false
            }
        case ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case TRAER_USUARIO_POR_ID:
            return {
                ...state,
                loading: false,
                usuario: payload
            }
        default:
            return state
    }
}