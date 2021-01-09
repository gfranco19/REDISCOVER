import { AccordionActions } from '@material-ui/core';
import * as api from '../api';

// action creaters are function that return actions //
// redux thunk allows specification of an additional arrow function //

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch ({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

// as soon as action is dispatched from the reducers 