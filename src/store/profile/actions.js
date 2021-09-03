export const CHANGE_USER_NAME = "CHANGE_USER_NAME"
export const CHANGE_PROFILE_IS_ACTIVE = "CHANGE_PROFILE_IS_ACTIVE"

export const createChangeUserNameAction = (userName) => {
    return {
        type: CHANGE_USER_NAME,
        payload: userName,
    }
}

export const createProfileIsActiveAction = (isActive) => {
    return {
        type: CHANGE_PROFILE_IS_ACTIVE,
        payload: isActive,
    }
}