import { catsApi } from '../../api/catsApi'

export const CATS_LOADING = "CATS_LOADING"
export const CATS_LOADED = "CATS_LOADED"
export const CATS_ERROR_LOADING = "CATS_ERROR_LOADING"

export const createCatsLoadingAction = (isLoading) => ({
    type: CATS_LOADING,
    payload: isLoading,
})

export const createCatsLoadedAction = (cats) => ({
    type: CATS_LOADED,
    payload: cats,
})

export const createCatsErrorLoadingAction = (error) => ({
    type: CATS_ERROR_LOADING,
    payload: error,
})

export const loadCatsWithThunk = () => async (dispatch) => {
    dispatch(createCatsLoadingAction(true));
    const [error, result] = await catsApi.loadCats();
    
    if (error) {
        dispatch(createCatsErrorLoadingAction(error))
    }

    if (result) {
        dispatch(createCatsLoadedAction(result))
    }    
    dispatch(createCatsLoadingAction(false));
}