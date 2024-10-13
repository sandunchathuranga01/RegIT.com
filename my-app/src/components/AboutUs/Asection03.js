import React from 'react';
import './Asection03.css'; // CSS file for styling

const Asection03 = () => {
    return (
        <div className="six-d-container">
            <h2 className="process-heading">
                Our 6-D <span className="highlight">Process</span>
            </h2>
            <div className="process-grid">
                <div className="process-step">
                    <h1>01.</h1>
                    <h3>Discover</h3>
                    <p>We begin by thoroughly understanding your business challenges, needs, and objectives to uncover the best solutions.</p>
                </div>
                <div className="process-step">
                    <h1>02.</h1>
                    <h3>Define</h3>
                    <p>We define clear goals and a roadmap, ensuring we are aligned with your vision before moving forward with the project.</p>
                </div>
                <div className="process-step">
                    <h1>03.</h1>
                    <h3>Design</h3>
                    <p>Our team designs intuitive, user-centric solutions that combine aesthetics with functionality to provide an optimal user experience.</p>
                </div>
                <div className="process-step">
                    <h1>04.</h1>
                    <h3>Develop</h3>
                    <p>We bring the design to life by building high-quality, scalable solutions using the latest technologies and best practices.</p>
                </div>
                <div className="process-step">
                    <h1>05.</h1>
                    <h3>Deploy</h3>
                    <p>Once developed, we deploy the solution in your environment, ensuring seamless integration and functionality.</p>
                </div>
                <div className="process-step">
                    <h1>06.</h1>
                    <h3>Deliver</h3>
                    <p>Finally, we deliver the solution with full documentation and support, ensuring a smooth transition and long-term success.</p>
                </div>
            </div>
        </div>
    );
};

export default Asection03;
