
function Explore(){
const Explore=()=>{
}

return(
<div className="Explore max-w-3xl m-auto mt-10">
      <h5 className="Explore_title m-auto font-normal text-xs text-center mb-3">EXPLORE & LEARN</h5>
        <div className="Explore_Container ">
            <h1 className="font-extrabold text-teal-900 text-3xl relative m-auto text-center">What you need to know</h1>
            <p className="text-center m-auto relative p-2">
           Here are a few things that you need to know and understand when you are looking to buy an insurance policy.
           Always practice them as they will help to understand the product you are purchasing to ensure that you get the best value for money and a 
           product that fully caters for your insurance needs, making changes to your needs, and how to report a claim.
            </p>
        </div>
    <div className="Explore_content flex justify-center items-center gap-5">
            <div className="Explore_content1 bg-gray-200 p-5 rounded-3xl m-auto">
                <h2 className="font-bold text-teal-900 text-xl p-2">Insurance Guides</h2>
                <p className="py-2">Car insurance involves understanding policies, deductibles, claims, and factors that affect your rates. 
                    Knowing the difference between comprehensive and collision coverage helps you choose the right protection.</p>
                 <button onClick={Explore}className="relative mt-3 m-auto block bg-amber-400 rounded-full px-2 hover:bg-violet-200 cursor-pointer">Explore</button>   
            </div>

            <div className="Explore_content2 bg-gray-200 p-5 rounded-3xl m-auto">
                <h2 className="font-bold text-teal-900 text-xl p-2">Videos & Visuals</h2>
                <p className="py-2">
                    Videos to simplify topics like claim processing and offer quick tips for saving on insurance premiums.
                </p>
                <button onClick={Explore}className="relative mt-3 m-auto block bg-pink-400 rounded-full px-2 hover:bg-violet-200 cursor-pointer">Explore</button> 
            </div>

            <div className="Explore_content3 bg-gray-200 p-5 rounded-3xl m-auto">
                <h2 className="font-bold text-teal-900 text-xl p-2">Tools & Calculators</h2>
                <p className="py-2">Use helpful tools like a Car Insurance Quote Calculator, 
                    Coverage Checker, and Monthly Premium Estimator to find the right plan and cost for your needs.
                </p>
                 <button onClick={Explore}className="relative mt-3 m-auto block bg-sky-400 rounded-full px-2 hover:bg-violet-200 cursor-pointer">Explore</button> 
            </div>
       
    </div>
</div>
)
}

export default Explore;