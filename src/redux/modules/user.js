// CONSTANTS
const SET_CURRENT_USER = 'monarch-apparel/user/SET_CURRENT_USER';

// INITIAL STATE
const initialState = {
    currentUser: null
};

// REDUCER
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
}

// ACTIONS
export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user
});


export default userReducer;
