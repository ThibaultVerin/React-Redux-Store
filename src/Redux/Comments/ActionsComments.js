import axios from 'axios';
import {
    LOAD_COMMENTS,
    LOAD_COMMENTS_SUCCESS,
    LOAD_COMMENTS_ERROR
} from './TypeComments';

export const loadApiComment = () => {

    return{
        type: LOAD_COMMENTS
    }
}

export const loadCommentSuccess = (comments) => {

    return{
        type: LOAD_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const loadCommentError = (error) => {

    return{
        type: LOAD_COMMENTS_ERROR,
        payload: error
    }
}


export const apiCall = () => {

    return (dispatch) => {

        dispatch(loadApiComment())

        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            dispatch(loadCommentSuccess(res.data))
        })
        .catch(err => {
            dispatch(loadCommentError(err.message))
        })
    }
}