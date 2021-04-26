import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    Button,
    Container,
    Img,
    Dispo,
    Count
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


    // const incrementCount = (item) => {

    //     switch (item.name) {
    //         case 'phone':
    //             setTotalItemPhone(totalItemPhone + 1)
    //             break;

    //         case 'tablet':
    //             setTotalItemTablet(totalItemTablet + 1)
    //             break;
        
    //         default:
    //             break;
    //     }
       
    // }

    // const decrementCount = (item) => {

    //     switch (item.name) {
    //         case 'phone':
    //             setTotalItemPhone(totalItemPhone - 1)
    //             break;

    //         case 'tablet':
    //             setTotalItemTablet(totalItemTablet - 1)
    //             break;
        
    //         default:
    //             break;
    //     }
       
    // }

    // const totalCount = (item) => {

    //     switch (item.name) {
    //         case 'phone':
    //             return totalItemPhone;
    //         case 'tablet':
    //             return totalItemTablet;
        
    //         default:
    //             break;
    //     }
    // }

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
                </Container>
            )}
        </>
    )
}

export default HighTechDevices;
