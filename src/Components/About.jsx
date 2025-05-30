import React from 'react';

function About(){
const  FindCoverage = () =>{
}

 return(
<div className="About">
     <h5 className="About_title">How It Works</h5>
    <div className="About_container">
        <div className="About_content">
            <h1>Your Path to Smarter Coverage</h1>
            <p>Telix simplifies insurance in 3 easy steps:
                <ul>
                    <li>Get a Quote</li> 
                    <li>Customize Your Coverage</li> 
                    <li>Drive Confidently</li> 
                </ul>
            </p>
            <button onClick={FindCoverage}>Insurance Package</button>
        </div>

        <div className="ImageSection">
            <img src="https://i.ibb.co/0dxPZwX/insurance-coverage.png" alt="insurance-coverage"/>
        </div>
    </div>
</div>
 )
};

export default About;