import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import authReducer from './authReducer';
import studentReducer from './studentReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    auth: authReducer,
    student: studentReducer
});

export default reducer;
