import React from 'react';
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

const highTechItems = [
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

// Actions

const BUY_COMPUTER = 'BUY_COMPUTER';
const BUY_TV = 'BUY_TV';
const BUY_CONSOLE = 'BUY_CONSOLE';

const buyComputer = () => {
    return {
        type: BUY_COMPUTER,
    }
}

const buyTv = () => {
    return {
        type: BUY_TV,
    }
}

const buyConsole = () => {
    return {
        type: BUY_CONSOLE,
    }
}

const handleClick = () => {

}

const HighTechDevices = () => {


    return (
        <>
            {highTechItems.map((item, index) => 
                <Container key={index}>
                    <Img src={item.src} alt={item.name} />
                    <Dispo>Disponibility : <Count>{item.stock}</Count></Dispo>
                    <Button type="button" onClick={handleClick}>Buy {item.name}</Button>
                </Container>
            )}
        </>
    )
}

export default HighTechDevices;
