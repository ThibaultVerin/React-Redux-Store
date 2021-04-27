import {
    LOAD_COMMENTS,
    LOAD_COMMENTS_SUCCESS,
    LOAD_COMMENTS_ERROR
} from './TypeComments';

export const LoadApiComment = () => {

    return{
        type: LOAD_COMMENTS
    }
}

export const LoadCommentSuccess = (comments) => {

    return{
        type: LOAD_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const LoadCommentError = (error) => {

    return{
        type: LOAD_COMMENTS_ERROR,
        payload: error
    }
}