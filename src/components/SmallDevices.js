import React from 'react';
import { 
    Button,
    Container,
    Img,
    Dispo,
    Count
} from './style';
import phone from '../images/phone.svg';
import tablet from '../images/tablet.svg';

const items = [
    {
        name: "phone",
        src: phone,
        stock: 16
    },
    {
        name: "tablet",
        src: tablet,
        stock: 24
    }    
]

// Actions

const BUY_PHONE = 'BUY_PHONE';
const BUY_TABLET = 'BUY_TABLET';

const buyPhone = () => {
    return {
        type: BUY_PHONE,
    }
}

const buyTablet = () => {
    return {
        type: BUY_TABLET,
    }
}

const handleClick = () => {

}

const SmallDevices = () => {

    return (
        <>
            {items.map((item, index) => 
                <Container key={index}>
                    <Img src={item.src} alt={item.name} />
                    <Dispo>Disponibility : <Count>{item.stock}</Count></Dispo>
                    <Button type="button" onClick={handleClick}>Buy {item.name}</Button>
                </Container>
            )}
            
        </>
    )
}

export default SmallDevices;
