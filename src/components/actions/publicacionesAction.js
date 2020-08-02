import {
    TRAER_PUBLICACIONES_POR_USUARIO_ID,
    ERROR_EN_PUBLICACIONES,
    LOADING_EN_PUBLICACIONES
} from '../types/publicacionesTypes';
import axios from 'axios';
import { notification } from 'antd';

export const traer_Las_Publicaciones_Por_Usuario_ID = (id) => async (dispatch) => {

    dispatch({
        type: LOADING_EN_PUBLICACIONES
    });

    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);

        notification.success({
            message: 'Exitoso!',
            description: 'Ahora podras ver toda la informacion de la publicacion',
            duration: 1.5
        });

        dispatch({
            type: TRAER_PUBLICACIONES_POR_USUARIO_ID,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ERROR_EN_PUBLICACIONES,
            payload: error.message
        });
    }
};