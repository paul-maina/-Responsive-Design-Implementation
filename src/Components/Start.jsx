function Start() {
  const GetStarted = () => {
    alert("Let's get started!");
  };

  return (
    <div className="start_container bg-sky-300 px-4 py-8 sm:px-6 md:px-10 lg:px-16 rounded-xl max-w-4xl mx-auto">
      <div className="start_content text-center">
        <h1 className="font-extrabold text-teal-700 text-3xl sm:text-3xl md:text-3xl lg:text-4xl mb-4">
          Coverage That Goes the Extra Mile
        </h1>
        <p className=" text-teal-900 text-sm sm:text-base md:text-lg px-2 sm:px-6 md:px-10 lg:px-16">
          From everyday commutes to road trips,<br />
          Telix Car Insurance is here to protect you<br />
          with affordable plans and 24/7 support.
        </p>
        <button onClick={GetStarted}className="relative mt-3 m-auto block bg-red-400 rounded-full px-2 ring hover:bg-violet-200 cursor-pointer">
            Get Started
        </button>
      </div>
    </div>
  );
}

export default Start;
