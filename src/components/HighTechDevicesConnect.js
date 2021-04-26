import React, { useState } from 'react';
import { connect } from 'react-redux';
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


const HighTechDevices = (props) => {

    const [totalItemComputer, setTotalItemComputer] = useState(1);
    const [totalItemConsole, setTotalItemConsole] = useState(1);
    const [totalItemTv, setTotalItemTv] = useState(1);

    console.log(props)

    const itemCount = (item) => {

        switch (item.name) {
            case 'computer':
                return props.computer;
            case 'gameConsole':
                return props.gamingConsole;
            case 'tv':
                return props.tv;
        
            default:
                break;
        }
    }

    const dispatchAction = (item) => {

        console.log(props.buyConsole())

        switch (item.name) {
            case 'gameConsole':
                return props.buyConsole();
            case 'computer':
                return props.buyComputer();
            case 'tv':
                return props.buyTv();
            
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

const mapStateToProps = (state) => {
    
    return {
        gamingConsole: state.highTechDevices.console,
        computer: state.highTechDevices.computer,
        tv: state.highTechDevices.tv,
    }
}

const mapDispatchToProps = (dispatch, totalItemConsole) => {

    return {
        buyConsole: () => dispatch(buyConsole(totalItemConsole)),
        buyComputer: () => dispatch(buyComputer()),
        buyTv: () => dispatch(buyTv()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HighTechDevices);