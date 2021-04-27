import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';

export const CommentsContainer = styled.div`
    width: 70%;
    text-align: center;
    background-color: #fff;
    margin: 30px 0;
    padding: 30px 0;
`

const Comments = () => {

    const dispatch = useDispatch();

    return (
        <CommentsContainer>
            Hello
        </CommentsContainer>
    )
}

export default Comments
