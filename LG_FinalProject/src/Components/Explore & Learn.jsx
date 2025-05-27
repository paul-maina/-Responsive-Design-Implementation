
function Explore(){
const Explore=()=>{
}

return(
<div className="Explore">
    <div className="Explore_Container">
        Explore & Learn
        <div className="Explore_content">
            <h1>What you need to know</h1>
            <p>
           Here are a few things that you need to know and understand when you are looking to buy an insurance policy.
           Always practice them as they will help to understand the product you are purchasing to ensure that you get the best value for money and a 
           product that fully caters for your insurance needs, making changes to your needs, and how to report a claim.
            </p>
            <div>
                <h2>Insurance Guides</h2>
                <p>Car insurance involves understanding policies, deductibles, claims, and factors that affect your rates. 
                    Knowing the difference between comprehensive and collision coverage helps you choose the right protection.</p>
                 <button onClick={Explore}>Explore</button>   
            </div>
            <div>
                <h2>Videos & Visuals</h2>
                <p>
                    Videos to simplify topics like claim processing and offer quick tips for saving on insurance premiums.
                </p>
                <button onClick={Explore}>Explore</button> 
            </div>
            <div>
                <h2>Tools & Calculators</h2>
                <p>Use helpful tools like a Car Insurance Quote Calculator, 
                    Coverage Checker, and Monthly Premium Estimator to find the right plan and cost for your needs.
                </p>
                 <button onClick={Explore}>Explore</button> 
            </div>
        </div>
    </div>
</div>
)
}

export default Explore;