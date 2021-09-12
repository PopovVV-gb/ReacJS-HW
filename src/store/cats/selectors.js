export const getCats = () => (state) => {
    return state.cats;
}

export const getCatsLoading = () => (state) => {
    return state.cats.isLoading
}

export const getCatsLoadError = () => (state) => {
    return state.cats.error
}