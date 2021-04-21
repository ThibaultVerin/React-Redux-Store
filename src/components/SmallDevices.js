import React from 'react';
import tv from '../images/tv.svg';
import computer from '../images/computer.svg';
import gameConsole from '../images/console.svg';
import phone from '../images/phone.svg';
import tablet from '../images/tablet.svg';

const items = [
    {
        name: "computer",
        src: computer
    }
]

// {
//     computer,
//     console,
//     phone,
//     tablet,
//     tv
// }

const handleClick = () => {

}

const SmallDevices = () => {

    return (
        <div>
            {items.map((item) => 
                <div>
                    <img src={item.src} alt={item.name} />
                    <p>Disponibility : <span></span></p>
                    <button type="button" onClick={handleClick}>Buy {item.name}</button>
                </div>
            )}
            
        </div>
    )
}

export default SmallDevices;
