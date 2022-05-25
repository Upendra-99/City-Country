import { LOADING } from "./action";

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        default:
            return state
    }
}