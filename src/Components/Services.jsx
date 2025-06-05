

function Services(){

    const LearnMore=()=>{
    }

 return(
<div className="Services mt-10">
     <h5 className="Services_title m-auto font-normal text-xs text-center mb-3">SERVICES</h5> 
        <div className="Services_content1">
            <h1 className="font-extrabold text-teal-900 text-3xl relative m-auto text-center">
                Insurance Packages <br/>That Fit Your Life
            </h1>
            <p className="text-center m-auto relative p-2">
                Explore a variety of car insurance plans designed to match your<br/> driving habits and lifestyle.
            </p>
        </div>
        
    <div className="Services_container m-auto flex justify-center items-center max-w-3xl gap-10">
        <div className="Services_content2 bg-blue-200 p-5 rounded-3xl m-auto">
                <h1 className="font-bold text-teal-900 text-xl p-2">How Premiums Are Calculated</h1>
                <p className="p-2"> Your age, gender, location and driving history of the car together with its 
                    make/model among others determine the coverage charges.
                </p>
                <button onClick={LearnMore}className="relative mt-3 m-auto block rounded-full px-2 ring hover:bg-violet-200 cursor-pointer">
                    Learn More</button>
        </div> 
        <div className="Services_content3 p-5 bg-gray-200 rounded-3xl m-auto ">
                <h1 className="font-bold text-teal-900 text-xl p-2">Choosing the Right Coverage</h1>
                <p className="p-2">Do I need full coverage or just liability? Can I afford a higher deductible for a lower premium and 
                    is the car new or valuable enough to justify comprehensive? Are some of the things to consider.
                </p>
                <button onClick={LearnMore}className="relative mt-3 m-auto block rounded-full px-2 ring hover:bg-violet-200 cursor-pointer">
                    Learn More</button>
        </div>
    </div>
         <div className="Services_content4 bg-gray-200  max-w-3xl p-5 m-auto mt-5 mb-5 rounded-3xl">
            <h1 className="font-bold text-teal-900 text-xl p-2">Optional Coverage</h1>
            <ul className="list-decimal list-inside p-2">
                <li> Roadside assistance</li>
                <li> Rental car reimbursement</li>
                <li> Gap insurance (if you owe more than the car is worth)</li>
                <li> Custom parts/equipment coverage</li>
            </ul>
            <button onClick={LearnMore}className="relative mt-3 m-auto block bg-red-400 rounded-full px-2 ring hover:bg-violet-200 cursor-pointer">
            Learn More</button>
         </div>
</div>
 );
};


export default Services;