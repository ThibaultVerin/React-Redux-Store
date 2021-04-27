import styled from 'styled-components';


export const Root = styled.div`
    height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #a000a0;
`

export const Title = styled.h1`
    text-align: center;
    background-color: #a000a0;
    margin: 0;
    padding: 30px 0;
`

export const Container = styled.div`
    width: 250px;
    min-height: 50px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 20px 40px;
    border: 1px solid grey;
    border-radius: 10px;
    background-color: #fff;
`

export const Img = styled.img`
    margin: 0 auto;
    height: 150px;
`

export const Dispo = styled.p`
    text-align: center;
`

export const Count = styled.span`
    font-weight: bold;
    font-size: 30px;
`

export const Button = styled.button`
    border: 1px solid purple;
    border-radius: 10px;
    background: #a000a0;
    padding: 10px;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    :hover {
    border:1px solid rgb(54, 4, 54);
    background: rgb(54, 4, 54);
    }
`

export const CountButtonContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const TotalCount = styled.input`
    width: 30px;
    height: 23px;
    border-radius: 5px;
    text-align: center;
    color: #fff;
    background: #a000a0;
    border: none;
    font-weight: bolder;
    font-size: 17px;
`

export const CountButton = styled.button`
    width: 30px;
    height: 25px;
    border-radius: 5px;
    text-align: center;
    margin: 0 20px;
    background: #a000a0;
    border: none;
    color: #fff;
    font-size: 17px;
    font-weight: bolder;
    cursor: pointer;
`