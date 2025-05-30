function About(){

const  FindCoverage = () =>{
}

    return(
<div className="About">
    <div className="About_container">
        <p>How it Works</p>
        <div className="About_content">
            <h1>Your Path to Smarter Coverage</h1>
            <p>Telix simplifies insurance in 3 easy steps:Get a Quote, Customize Your Coverage, Drive Confidently.
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