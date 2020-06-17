import { TRAER_USUARIOS, ERROR, LOADING } from '../types/usuariosTypes';

const INITIAL_STATE = {
    usuarios: [],
    error: null,
    loading: false
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
        default:
            return state
    }
}