import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH } from "../constants/actionTypes";
import * as api from '../api';

// action creaters are function that return actions //
// redux thunk allows specification of an additional arrow function //

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        console.log("THE POST DATA IS", data)
        dispatch ({ type: FETCH_ALL, payload: data });

    } catch (error) {
        console.log(error.message)
    }
};
// as soon as action is dispatched from the reducers 

// makes api request to backend server //
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data});

    } catch (error) {
        console.log(error);
    }
};
// update action to update post that has already been created // 
export const updatePost = (id, post) => async (dispatch) => {
   try {
       const { data } = await api.updatePost(id,post);

        dispatch({ type: UPDATE, payload: data });


   } catch (error) {
       console.log(error)
   }
};

// delete actions to remove posts 
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error)
    }

}
//get haunted
export const getHaunted = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHaunted();
        console.log("THE POST DATA IS", data)
        dispatch ({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

//get historical

export const getHistorical = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHistorical();
        console.log("THE POST DATA IS", data)
        dispatch ({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

//get film

export const getFilm = () => async (dispatch) => {
    try {
        const { data } = await api.fetchFilm();
        console.log("THE POST DATA IS", data)
        dispatch ({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

//get nature

export const getNature = () => async (dispatch) => {
    try {
        const { data } = await api.fetchNature();
        console.log("THE POST DATA IS", data)
        dispatch ({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

//get misc

export const getMisc = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMisc();
        console.log("THE POST DATA IS", data)
        dispatch ({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

//get murals

export const getMurals = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMurals();
        console.log("THE POST DATA IS", data)
        dispatch ({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

export const getUser = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUser();
        console.log("THE POST DTA IS", data)
        dispatch ({ type: 'FETCH', payload: data });
    } catch (error) {
        console.log(error.message)
    }
};
