import React, { useState, useEffect } from 'react';
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

    const phone = useSelector((state) => state.smallDevices.phone)
    const tablet = useSelector((state) => state.smallDevices.tablet)

    const [totalItemPhone, setTotalItemPhone] = useState(1);
    const [totalItemTablet, setTotalItemTablet] = useState(1);

    const dispatch = useDispatch()

    const incrementCount = (item) => {

        switch (item.name) {
            case 'phone':
                setTotalItemPhone(totalItemPhone + 1)
                break;

            case 'tablet':
                setTotalItemTablet(totalItemTablet + 1)
                break;
        
            default:
                break;
        }
       
    }

    const decrementCount = (item) => {

        switch (item.name) {
            case 'phone':
                setTotalItemPhone(totalItemPhone - 1)
                break;

            case 'tablet':
                setTotalItemTablet(totalItemTablet - 1)
                break;
        
            default:
                break;
        }
       
    }

    const totalCount = (item) => {

        switch (item.name) {
            case 'phone':
                return totalItemPhone;
            case 'tablet':
                return totalItemTablet;
        
            default:
                break;
        }
    }

    const itemCount = (item) => {

        switch (item.name) {
            case 'phone':
                return phone;
            case 'tablet':
                return tablet;
        
            default:
                break;
        }
    }

    const dispatchAction = (item) => {

        switch (item.name) {
            case 'phone':
                return dispatch(buyPhone(totalItemPhone))
            case 'tablet':
                return dispatch(buyTablet(totalItemTablet))
        
            default:
                break;
        }
    }

    return (
        <>
            {smallDeviceItems.map((item, index) => 
                <Container key={index}>
                    <Img src={item.src} alt={item.name} />
                    <Dispo>Disponibility : <Count>{itemCount(item)}</Count></Dispo>
                    <Button type="button" onClick={() => dispatchAction(item)}>Buy {item.name}</Button>
                    <div>
                        <button type="button" onClick={() => incrementCount(item)}>+</button>
                        <input type="text" value={totalCount(item)} disabled />
                        <button type="button" onClick={() => decrementCount(item)}>-</button>
                    </div>
                    
                </Container>
            )}
        </>
    )
}

export default SmallDevices;
