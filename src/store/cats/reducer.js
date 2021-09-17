import { CATS_LOADING, CATS_ERROR_LOADING, CATS_LOADED} from './actions'

export const initialState = {
    cats: [],
    isLoading: false,
    error: null,
}

export const CatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case CATS_ERROR_LOADING:
            return {
                cats: [],
                isLoading: false,
                error: action.payload,
            }
        case CATS_LOADED:
            return {
                cats: action.payload,
                isLoading: false,
                error: null,
            }
        default:
            return state
    }
}