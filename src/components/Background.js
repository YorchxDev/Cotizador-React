import React from 'react';
import Dinero from '../video/Dinero.mp4';

const Background = () => {
    return ( 
        <video
            autoPlay loop muted
            style={
                {
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: '-1'
                }
            }
        >
        <source src={Dinero} type='video/mp4'/>
      </video>
     );
}
 
export default Background;

