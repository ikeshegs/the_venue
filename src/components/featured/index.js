import React from 'react';
import Carrousel from './Carrousel';
import TimeCountdown from './TimeCountdown';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carrousel/>
            
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>

            <TimeCountdown />

        </div>
    );
};

export default Featured;