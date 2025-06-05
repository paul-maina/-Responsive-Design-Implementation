



function Start(){  
    const GetStarted =() =>{
           alert("Let's get started!");
    }
return(

    <div className="start_container bg-sky-200 p-5 m-auto rounded-xl max-w-3xl">
        <div className="start_content">
           <h1 className="font-extrabold text-teal-900 text-center mx-auto relative text-3xl md:text-4xl">
                Coverage That Goes the Extra Mile
           </h1>
            <p className="px-8 mx-auto relative text-center">From everyday commutes to road trips, <br/> 
            Telix Car Insurance is here to protect you<br/> with affordable plans and 24/7 support.</p>
            <button onClick={GetStarted}className="relative mt-3 m-auto block bg-red-400 rounded-full px-2 ring hover:bg-violet-200 cursor-pointer">Get Started</button>

        </div>
    </div>

)
}
export default Start;