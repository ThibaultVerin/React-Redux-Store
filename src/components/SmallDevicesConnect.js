import React from 'react';
import { connect } from 'react-redux';
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


const SmallDevices = (props) => {

    const handleClick = () => {
        return props.buyPhone();
    }

    console.log(props)

    return (
        <>
            {smallDeviceItems.map((item, index) => 
                <Container key={index}>
                    <Img src={item.src} alt={item.name} />
                    <Dispo>Disponibility : <Count>{item.name === 'phone' ? <> {props.phone} </> : <> {props.tablet} </>}</Count></Dispo>
                    <Button type="button" onClick={() => handleClick(item)}>Buy {item.name}</Button>
                </Container>
            )}
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        phone: state.phone,
        tablet: state.tablet
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyPhone: () => dispatch(buyPhone()),
        buyTablet: () => dispatch(buyTablet())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmallDevices);
