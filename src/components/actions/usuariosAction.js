import axios from 'axios';

export const TRAER_USUARIOS = 'TRAER_USUARIOS';

export const traerTodos = () => async (dispatch) => {

    const { data } = await axios.get('http://jsonplaceholder.typicode.com/users');

    dispatch({
        type: TRAER_USUARIOS,
        payload: data
    })
}