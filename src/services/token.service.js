import { SET_TOKEN, REMOVE_TOKEN } from 'store/actions';
import { store } from 'store';

function selectAuth(state) {
    return state.auth
}

export const GetToken = () => {
    return selectAuth(store.getState()).token;
}

export const UpdateToken = (token, user) => {
    store.dispatch({
        type: SET_TOKEN,
        token,
        user
    });
}

export const RemoveToken = () => {
    store.dispatch({
        type: REMOVE_TOKEN
    });
}