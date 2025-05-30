
function Testimonials(){
    const prevSlide=()=>{

    }
 const nextSlide=()=>{

    }

 return(
        <div className="Testimonials">
            <p>TESTIMONIALS</p>
            <div className="Testimonials_Container">   
                <div className="Testimonial_content">
                    <h1> What Our Clients Are Saying</h1>
                    <p>Some of positive feedbacks from our clients</p>
                   <button onClick={prevSlide}>←</button>
                   <button onClick={nextSlide}>→</button>

                </div>
                <div className="Testimonial_content2">
                        “I filed a claim after my car was hit in a parking lot. Telix handled it quickly, and I had my check within a week. Zero stress.”
                        — Javier M., Denver, CO
                </div>
                <div className="Testimonial_content3">
                        “I was nervous switching insurance companies, but Telix made it easy. Their customer service is top-notch and I love the app.”
                        — Nina T., Atlanta, G
                </div>
            </div>
        </div>
 )
}


export default Testimonials;