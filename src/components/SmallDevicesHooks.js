import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

    const phone = useSelector((state) => state.phone)
    const tablet = useSelector((state) => state.tablet)

    // const itemType = (item) => {
    //     console.log
    //     if (item.name === 'phone'){
    //         return phone
    //     } else if (item.name === 'tablet'){
    //         return tablet
    //     }
    // }

    return (
        <>
            {smallDeviceItems.map((item, index) => 
                <Container key={index}>
                    <Img src={item.src} alt={item.name} />
                    <Dispo>Disponibility : <Count>{item.name === 'phone' ? <>{phone}</> : <>{tablet}</> }</Count></Dispo>
                    <Button type="button" onClick={() => (item)}>Buy {item.name}</Button>
                </Container>
            )}
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyPhone: () => dispatch(buyPhone()),
        buyTablet: () => dispatch(buyTablet())
    }
}

export default SmallDevices;
