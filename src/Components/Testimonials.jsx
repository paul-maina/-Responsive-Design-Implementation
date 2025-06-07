function Testimonials() {
  const prevSlide = () => {};
  const nextSlide = () => {};

  return (
    <div className="Testimonials max-w-4xl px-4 sm:px-2 lg:px-2 mx-auto">
      <h5 className="Testimonials_title font-normal text-xs p-5">
        TESTIMONIALS
      </h5>

      <div className="Testimonials_Container flex flex-col lg:flex-row justify-center items-center gap-6">
        <div className="Testimonial_content p-5 text-center lg:text-left">
          <h1 className="font-extrabold text-green-700 text-3xl sm:text-3xl mb-2">
            What Our Clients Are Saying
          </h1>
          <p className=" text-teal-900 text-sm sm:text-base mb-3">
            Some of the positive feedback from our clients
          </p>
          <div className="flex justify-center lg:justify-start gap-2">
            <button
              onClick={prevSlide}
              className="rounded-full px-3 py-1 ring hover:bg-violet-200 cursor-pointer transition"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="bg-red-400 rounded-full px-3 py-1 ring hover:bg-violet-200 cursor-pointer transition"
            >
              →
            </button>
          </div>
        </div>

        <div className="Testimonial_content2 text-teal-900 m-2 p-5 bg-gray-200 rounded-3xl text-sm sm:text-base max-w-md">
          “⭐⭐⭐⭐⭐
          <br />
          I filed a claim after my car was hit in a parking lot. Telix handled it
          quickly, and I had my check within a week. Zero stress.”
          <br />
          — Javier M., Denver, CO
        </div>

        <div className="Testimonial_content3 text-teal-900 m-2 p-5 bg-blue-400 rounded-3xl text-sm sm:text-base max-w-md">
          “⭐⭐⭐⭐⭐
          <br />
          I was nervous switching insurance companies, but Telix made it easy.
          Their customer service is top-notch and I love the app.”
          <br />
          — Nina T., Atlanta, GA
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
