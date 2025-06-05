
function Testimonials(){
    const prevSlide=()=>{

    }
 const nextSlide=()=>{

    }

 return(
        <div className="Testimonials max-w-3xl justify-center m-auto">
            <h5 className="Testimonials_title font-normal text-xs p-5">TESTIMONIALS</h5>
            <div className="Testimonials_Container flex justify-center m-auto items-center max-w-3xl gap-10 ">   
                <div className="Testimonial_content p-5 ">
                    <h1 className="font-extrabold text-teal-900 text-3xl relative m-auto text-center"> What Our Clients Are Saying</h1>
                    <p>Some of positive feedbacks from our clients</p>
                   <button onClick={prevSlide}className="rounded-full px-1 ring hover:bg-violet-200 cursor-pointer">←</button>
                   <button onClick={nextSlide}className="bg-red-400 rounded-full px-1 ring hover:bg-violet-200 cursor-pointer">→</button>

                </div>
                <div className="Testimonial_content2 m-2 p-5 bg-gray-200 rounded-3xl ">
                        “⭐⭐⭐⭐⭐<br/>
                        I filed a claim after my car was hit in a parking lot. Telix handled it quickly, and I had my check within a week. Zero stress.”<br/>
                        — Javier M., Denver, CO
                </div>
                <div className="Testimonial_content3 m-2 p-5 bg-blue-400 rounded-3xl">
                        “⭐⭐⭐⭐⭐<br/>
                        I was nervous switching insurance companies, but Telix made it easy. Their customer service is top-notch and I love the app.”<br/>
                        — Nina T., Atlanta, G
                </div>
            </div>
        </div>
 )
}


export default Testimonials;