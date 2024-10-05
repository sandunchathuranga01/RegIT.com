
import React from 'react';
import './Asection04.css'; // CSS file for styling
import chooseUsImage from './AboutUs_ForMutualAdvantage_1920x1080.jpg'; // Add your image path here

const Asection04 = () => {
    return (
        <div className="why-choose-us-container">
            <h2 className="choose-us-heading">
                Why <span className="highlight">Choose</span> Us?
            </h2>
            <div className="choose-us-content">
                <div className="choose-us-list">
                    <ul>
                        <li>Best Quality Design</li>
                        <li>24*7 Live Support</li>
                        <li>Result Oriented Project</li>
                        <li>Award Winning Support Team</li>
                        <li>Best ROI Techniques</li>
                        <li>Experienced Professionals</li>
                    </ul>
                </div>
                <div className="choose-us-image">
                    <img src={chooseUsImage} alt="Why Choose Us" />
                </div>
            </div>
        </div>
    );
};

export default Asection04;
