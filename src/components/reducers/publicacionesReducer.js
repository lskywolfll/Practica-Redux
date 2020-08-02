import {
    TRAER_PUBLICACIONES_POR_USUARIO_ID,
    TRAER_TODOS_LAS_PUBLICACIONES,
    ERROR_EN_PUBLICACIONES,
    LOADING_EN_PUBLICACIONES
} from '../types/publicacionesTypes';

const INITIAL_STATE = {
    publicaciones: [],
    publicacion: null,
    loading: false,
    error: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case TRAER_PUBLICACIONES_POR_USUARIO_ID:
            return {
                ...state,
                publicaciones: payload,
                loading: false
            }
        case TRAER_TODOS_LAS_PUBLICACIONES:
            return {
                ...state,
                publicaciones: payload,
                loading: false
            }
        case ERROR_EN_PUBLICACIONES:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case LOADING_EN_PUBLICACIONES:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}