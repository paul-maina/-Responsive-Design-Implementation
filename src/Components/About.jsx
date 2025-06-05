import React from 'react';

function About(){
const  FindCoverage = () =>{
}

 return(
<div className="About max-w-3xl m-auto">
    
    <div className="About_container flex justify-center items-center"> 
        <div className="About_content mt-5">
             <h5 className="About_title font-normal text-xs px-5 pb-5">How It Works</h5>
            <h1 className="font-extrabold text-teal-900 text-3xl px-5 mb-2">Your Path to Smarter Coverage</h1>
            <p className="p-5">Telix simplifies insurance in 3 easy steps:
                <ul className="list-disc list-inside mx-6 text-left">
                    <li>Get a Quote</li> 
                    <li>Customize Your Coverage</li> 
                    <li>Drive Confidently</li> 
                </ul>
            </p>
            <button onClick={FindCoverage}className="mx-5 block bg-red-400 rounded-full px-2 ring hover:bg-violet-200 cursor-pointer">Insurance Package</button>
        </div>

        <div className="ImageSection">
            <img src="https://i.ibb.co/0dxPZwX/insurance-coverage.png" alt="insurance-coverage" className="rounded-4xl mt-5 w-auto h-auto"/>
        </div>
    </div>
</div>
 )
};

export default About;