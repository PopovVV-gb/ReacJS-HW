import { CHANGE_USER_NAME, CHANGE_PROFILE_IS_ACTIVE } from './actions'

const initialState = {
        name: 'user1',
        isActive: true
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_USER_NAME:
            return {
                ...state,
                name: action.payload
            }
        case CHANGE_PROFILE_IS_ACTIVE:
            return {
                ...state,
                isActive: action.payload
            }
        default:
            return state;
    }
}

export default profileReducer