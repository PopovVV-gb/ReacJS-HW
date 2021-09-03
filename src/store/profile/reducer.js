import { CHANGE_USER_NAME, CHANGE_PROFILE_IS_ACTIVE } from './actions'

const initialState = {
    profile: {
        name: 'user1',
        isActive: true
    }
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_USER_NAME:
            return {
                ...state,
                profile: {
                    name: action.payload,
                    isActive: state.profile.isActive
                }
            }
        case CHANGE_PROFILE_IS_ACTIVE:
            return {
                ...state,
                profile: {
                    name: state.profile.name,
                    isActive: action.payload
                }
            }
        default:
            return state;
    }
}

export default profileReducer