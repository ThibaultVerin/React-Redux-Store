import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    Button,
    Container,
    Img,
    Dispo,
    Count,
    CountButtonContainer,
    TotalCount,
    CountButton
} from './style';
import tv from '../images/tv.svg';
import computer from '../images/computer.svg';
import gameConsole from '../images/console.svg';
import { buyTv, buyConsole, buyComputer } from '../Redux/HighTechDevices/ActionHighTechDevices';

export const highTechItems = [
    {
        name: "computer",
        src: computer,
        stock: 19
    },
    {
        name: "gameConsole",
        src: gameConsole,
        stock: 14,
    },
    {
        name: "tv",
        src: tv,
        stock: 29
    }
]

const handleClick = () => {

}

const HighTechDevices = () => {

    const gamingConsole = useSelector(state => state.highTechDevices.console);
    const computer = useSelector(state => state.highTechDevices.computer);
    const tv = useSelector(state => state.highTechDevices.tv);

    const [totalItemComputer, setTotalItemComputer] = useState(1);
    const [totalItemConsole, setTotalItemConsole] = useState(1);
    const [totalItemTv, setTotalItemTv] = useState(1);

    const dispatch = useDispatch();


    const incrementCount = (item) => {

        switch (item.name) {
            case 'computer':
                if (totalItemComputer < computer){
                    setTotalItemComputer(totalItemComputer + 1)
                }
                break;

            case 'gameConsole':
                if (totalItemConsole < gamingConsole){
                    setTotalItemConsole(totalItemConsole + 1)
                }
                break;

            case 'tv':
                if (totalItemTv < tv){
                    setTotalItemTv(totalItemTv + 1)
                }
                break;
        
            default:
                break;
        } 
    }

    const decrementCount = (item) => {

        switch (item.name) {
            case 'computer':
                if (totalItemComputer > 1){
                    setTotalItemComputer(totalItemComputer - 1)
                }
                break;

            case 'gameConsole':
                if (totalItemConsole > 1){
                    setTotalItemConsole(totalItemConsole - 1)
                }
                break;

            case 'tv':
                if (totalItemTv > 1){
                    setTotalItemTv(totalItemTv - 1)
                }
                break;
        
            default:
                break;
        }
       
    }

    const totalCount = (item) => {

        switch (item.name) {
            case 'computer':
                return totalItemComputer;
            case 'gameConsole':
                return totalItemConsole;
            case 'tv':
                return totalItemTv;
        
            default:
                break;
        }
    }

    const itemCount = (item) => {

        switch (item.name) {
            case 'computer':
                return computer;
            case 'gameConsole':
                return gamingConsole;
            case 'tv':
                return tv;
        
            default:
                break;
        }
    }

    const dispatchAction = (item) => {

        switch (item.name) {
            case 'computer':
                return dispatch(buyComputer(totalItemComputer))
            case 'gameConsole':
                return dispatch(buyConsole(totalItemConsole))
            case 'tv':
                return dispatch(buyTv(totalItemTv))
                
            default:
                break;
        }
    }


    return (
        <>
            {highTechItems.map((item, index) => 
                <Container key={index}>
                    <Img src={item.src} alt={item.name} />
                    <Dispo>Disponibility : <Count>{itemCount(item)}</Count></Dispo>
                    <Button type="button" onClick={() => dispatchAction(item)}>Buy {item.name}</Button>
                    <CountButtonContainer>
                        <CountButton type="button" onClick={() => incrementCount(item)}> + </CountButton>
                        <TotalCount type="text" value={totalCount(item)} disabled />
                        <CountButton type="button" onClick={() => decrementCount(item)}> - </CountButton>
                    </CountButtonContainer>
                </Container>
            )}
        </>
    )
}

export default HighTechDevices;
