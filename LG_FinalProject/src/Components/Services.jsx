

function Services(){

    const LearnMore=()=>{
    }

 return(
<div className="Services">
    <div className="Services_container1">
        <p>SERVICES</p> <br/>
        <h1>Insurance Packages That Fit Your Life</h1>
            <p>Explore a variety of car insurance plans designed to match your driving habits and lifestyle.</p>
            <ul>
                <li>Liability Coverage – For damage or injury you cause to others.</li>
                <li> Collision Coverage – Protection from damage caused by accidents.</li>
                <li> Comprehensive Coverage – Covers theft, weather damage, and more.</li>
                <li>  Uninsured/Underinsured Motorist – Protects you from underinsured drivers.</li>
                <li> Personal Injury Protection (PIP) – Medical expenses for you and passengers.</li>
            </ul>
        <div className="Services_content">
            <h1>How Premiums Are Calculated</h1>
            <p> Your age, gender, location and driving history of the car together with its 
                make/model among others determine the coverage charges.
            </p>
             <button onClick={LearnMore}>Learn More</button>

         <div className="Services_content2">
                <h1>Choosing the Right Coverage</h1>
                <p>Do I need full coverage or just liability? Can I afford a higher deductible for a lower premium and 
                     is the car new or valuable enough to justify comprehensive? Are some of the things to consider.
                </p>
                <button onClick={LearnMore}>Learn More</button>

         <div className="Services_content2">
            <h1>Optional Coverage</h1>
            <ul>
                <li> Roadside assistance</li>
                <li> Rental car reimbursement</li>
                <li> Gap insurance (if you owe more than the car is worth)</li>
                <li> Custom parts/equipment coverage</li>
            </ul>
            <button onClick={LearnMore}>Learn More</button>
         </div>
         </div>   
        </div>
    </div>
</div>
 );
};


export default Services;