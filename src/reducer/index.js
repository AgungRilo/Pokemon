import Pokemon from './pokemon';
import { combineReducers } from "redux";

const reducer = combineReducers({
    Poke:Pokemon
})

export default reducer