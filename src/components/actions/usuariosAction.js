import axios from 'axios';
import { TRAER_USUARIOS, ERROR, LOADING, TRAER_POST_POR_USUARIO_ID, TRAER_USUARIO_POR_ID } from '../types/usuariosTypes';
import { notification } from 'antd';

export const traerTodos = () => async (dispatch) => {

    dispatch({
        type: LOADING
    })

    notification.info({
        message: 'Cargando Data',
        description: 'Pronto podras ver una lista de usuarios',
        duration: 1.5
    })


    try {

        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

        dispatch({
            type: TRAER_USUARIOS,
            payload: data
        })

        notification.success({
            message: 'Cargado de informacion exitosa',
            duration: 2
        })
    } catch (error) {
        console.error(error);
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
};

export const traerUsuarioPorId = (id) => async (dispatch) => {

    dispatch({
        type: LOADING
    })

    notification.info({
        message: 'Cargando informacion',
        description: 'Pronto podras ver quien hizo las publicaciones',
        duration: 1
    })


    try {

        const request = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const respuesta = await request.json();

        dispatch({
            type: TRAER_USUARIO_POR_ID,
            payload: respuesta
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
};

export const traerPostPorUsuarioID = (id) => async (dispatch) => {

    dispatch({
        type: LOADING
    })

    try {

        const request = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
        const respuesta = await request.json();

        notification.success({
            message: 'Exitoso!',
            description: 'Ahora podras ver toda la informacion de la publicacion',
            duration: 1.5
        })

        dispatch({
            type: TRAER_POST_POR_USUARIO_ID,
            payload: respuesta
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}