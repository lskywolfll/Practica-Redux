import { combineReducers } from 'redux';
import UsuarioReducer from './usuariosReducer';
import PublicacionesReducer from './publicacionesReducer';

export default combineReducers({
    UsuarioReducer,
    PublicacionesReducer
});