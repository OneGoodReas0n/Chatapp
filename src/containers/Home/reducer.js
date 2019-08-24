const initialState = {
    isAuthorized: false,
    user: {},
    errors: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}