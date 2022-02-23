// action - state management
import * as actionTypes from './actions';

export const initialState = {
    students: []
};

// ==============================|| AUTHENTICATION REDUCER ||============================== //

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_STUDENTS:
            return {
                ...state,
                students: action.students
            };
        default:
            return state;
    }
};

export default studentReducer;
