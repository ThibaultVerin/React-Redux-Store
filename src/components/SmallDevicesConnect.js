import React, { useState } from 'react';
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

    const [totalItemPhone, setTotalItemPhone] = useState(1);
    const [totalItemTablet, setTotalItemTablet] = useState(1);

    const handleClick = () => {
        return props.buyPhone();
    }

    const itemCount = (item) => {

        switch (item.name) {
            case 'phone':
                return props.phone;
            case 'tablet':
                return props.tablet;
        
            default:
                break;
        }
    }

    const dispatchAction = (item) => {

        switch (item.name) {
            case 'phone':
                return props.buyPhone(totalItemPhone);
            case 'tablet':
                return props.buyTablet(totalItemTablet);
        
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
                </Container>
            )}
        </>
    )
}


const mapStateToProps = (state, ownProps) => {
    console.log(state)

    const empty = state.smallDevices.phone > 0 ? state.smallDevices.phone : ownProps.warning;
    
    return {
        phone: empty,
        tablet: state.smallDevices.tablet
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyPhone: () => dispatch(buyPhone()),
        buyTablet: () => dispatch(buyTablet())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmallDevices);
