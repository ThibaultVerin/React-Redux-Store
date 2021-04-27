import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    LoadApiComment,
    LoadCommentSuccess,
    LoadCommentError
} from '../Redux/Comments/ActionsComments';

import styled from 'styled-components';

export const CommentsContainer = styled.div`
    width: 70%;
    text-align: center;
    background-color: #fff;
    margin: 30px 0;
    padding: 30px 0;
`

const Comments = () => {

    const isLoading = useSelector(state => state.isLoading);
    const comment = useSelector(state => state.comment);
    const error = useSelector(state => state.error);

    const dispatch = useDispatch();

    const dispatchAction = () => {
    }

    console.log(comment)

    return (
        <CommentsContainer>
            {isLoading}
        </CommentsContainer>
    )
}

export default Comments
