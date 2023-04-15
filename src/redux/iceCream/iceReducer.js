import { BUY_ICE } from "./iceTypes";

const initialState = {
    iceNum:40
}

export const iceReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case BUY_ICE: return {
            ...state,
            iceNum: state.iceNum - 1
        }

        default: return state
    }
}