// import {
//     LoadApiComment,
//     LoadCommentSuccess,
//     LoadCommentError
// } from ''
import {
    LOAD_COMMENTS,
    LOAD_COMMENTS_SUCCESS,
    LOAD_COMMENTS_ERROR
} from './TypeComments';

const initilaStateComment = {
    isLoading: false,
    comments: [],
    error: ''
}

const commentReducer = (state = initilaStateComment, action) => {

    switch (action.type) {
        case LOAD_COMMENTS:
            return {
                ...state,
                isLoading: true
            }
        case LOAD_COMMENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                comments: action.payload,
                error: ''
            }
        case LOAD_COMMENTS_ERROR:
            return {
                ...state,
                isLoading: false,
                comments: [],
                error: action.payload
            }           
    
        default:
            return state;
    }
}

export default commentReducer;