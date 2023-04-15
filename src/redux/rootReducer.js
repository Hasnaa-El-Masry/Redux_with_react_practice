import cakeReducer from "./cake/cakeReducer";
import { iceReducer } from "./iceCream/iceReducer";
import { combineReducers } from 'redux';

const reducer = combineReducers({
    icecream: iceReducer,
    cake: cakeReducer
})

export default reducer;