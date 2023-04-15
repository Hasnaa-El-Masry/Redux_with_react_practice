import { BUY_CAKE } from "./cakeTypes";

const initialState = {
    cakesNum:20
}

const cakeReducer = (state=initialState, action)=>{
    
    switch (action.type){
        case BUY_CAKE: return {
            ...state,
            cakesNum: state.cakesNum -1
        }
        default: return state
    }

}

export default cakeReducer;