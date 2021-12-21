import React from 'react';
import './hemisphere.css';
import image1 from './images/image1.jfif';
import image3 from './images/image3.jpg';


const hemisphereConfig = {
    Northern: {
        text: 'it is northern hemisphere',
        picture:image1
    },
    Southern: {
        text: 'it is southern hemisphere',
        picture:image3
        
        
    }

}

const HemisphereDisplay = ({ latitude }) => {
    const hemisphere = latitude > 0 ? 'Northern ' : 'Southern ';
    const { text, picture } = hemisphereConfig[hemisphere]
    return (
        <div className={hemisphere}>
            <div className='container segment'>
                <div className='image segment'>
                    <img src={picture} alt="hemisphere pic"/>                
                </div>
                <div className='text segment'>
                   {text}
                </div>
            </div>
            
            
        </div>
    )
}

export default HemisphereDisplay;