// action - state management
import * as actionTypes from './actions';

export const initialState = {
    token: null,
    user: null,
};

// ==============================|| AUTHENTICATION REDUCER ||============================== //

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TOKEN:
            return {
                ...state,
                token: action.token,
                user: action.user
            };
        case actionTypes.REMOVE_TOKEN:
            return {
                ...state,
                token: null,
                user: null
            };
        default:
            return state;
    }
};

export default authReducer;
