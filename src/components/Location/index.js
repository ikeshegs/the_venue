import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12251.337793374041!2d3.305657869266736!3d6.475456672337989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b892df9bb6aaf%3A0x426e7ec57df5cc4e!2sAmuwo-Odofin+Housing+Estate%2C+Mile+2%2C+Lagos!5e0!3m2!1sen!2sng!4v1545027777556"  
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;