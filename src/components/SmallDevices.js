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

const handleClick = () => {

}

const SmallDevices = (props) => {

    console.log(props)

    return (
        <>
            {smallDeviceItems.map((item, index) => 
                <Container key={index}>
                    <Img src={item.src} alt={item.name} />
                    <Dispo>Disponibility : <Count>{props.phone}</Count></Dispo>
                    <Button type="button" onClick={handleClick}>Buy {item.name}</Button>
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

export default connect(mapStateToProps)(SmallDevices);
