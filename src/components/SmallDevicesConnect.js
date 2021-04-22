import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    Button,
    Container,
    Img,
    Dispo,
    Count
} from './style';
import phone from '../images/phone.svg';
import tablet from '../images/tablet.svg';
import { buyPhone, buyTablet } from '../Redux/SmallDevices/ActionSmallDevices';

const smallDeviceItems = [
    {
        name: "phone",
        src: phone,
    },
    {
        name: "tablet",
        src: tablet,
    }    
]


const SmallDevices = () => {

    const handleClick = () => {
        
    }

    console.log()

    return (
        <>
            {smallDeviceItems.map((item, index) => 
                <Container key={index}>
                    <Img src={item.src} alt={item.name} />
                    <Dispo>Disponibility : <Count></Count></Dispo>
                    <Button type="button" onClick={() => handleClick(item)}>Buy {item.name}</Button>
                </Container>
            )}
        </>
    )
}


export default SmallDevices;