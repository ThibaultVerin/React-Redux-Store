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
        src: computer
    },
    {
        name: "gameConsole",
        src: gameConsole
    },
    {
        name: "tv",
        src: tv
    }
]

const handleClick = () => {

}

const HighTechDevices = () => {


    return (
        <>
            {highTechItems.map((item, index) => 
                <Container key={index}>
                    <Img src={item.src} alt={item.name} />
                    <Dispo>Disponibility : <Count></Count></Dispo>
                    <Button type="button" onClick={handleClick}>Buy {item.name}</Button>
                </Container>
            )}
        </>
    )
}

export default HighTechDevices;
