export const LOADING = "LOADING"

export const AddLoadingStatus = (payload) => {
    return {
        type: LOADING,
        payload: payload
    }
}