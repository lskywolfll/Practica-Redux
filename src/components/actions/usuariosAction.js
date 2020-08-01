import axios from 'axios';
import { TRAER_USUARIOS, ERROR, LOADING } from '../types/usuariosTypes';

export const traerTodos = () => async (dispatch) => {

    dispatch({
        type: LOADING
    })

    try {

        const { data } = await axios.get('https://jsonplaceholder.typicode.com/userss');

        dispatch({
            type: TRAER_USUARIOS,
            payload: data
        })
    } catch (error) {
        console.error(error);
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}