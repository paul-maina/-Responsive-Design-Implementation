function Community() {
  const Joinourcommunity = () => {};

  return (
    <div className="Community bg-gray-200 max-w-4xl mx-auto rounded-4xl mt-6 mb-6 px-4 sm:px-6 lg:px-8">
      <h5 className="Community_title font-normal text-xs p-5 text-center sm:text-left">COMMUNITY</h5>
      <div className="Community_Container">
        <div className="Community_content px-2 sm:px-5 text-center sm:text-left">
          <h1 className="font-extrabold text-green-700 text-3xl sm:text-3xl">
            You're Not Alone on the Road
          </h1>
          <p className="py-2 text-sm sm:text-base  text-teal-900">
            Connect with other drivers, share your experiences, 
            and get support navigating claims, coverage, and car ownership in a friendly, helpful space.
          </p>
          <button
            onClick={Joinourcommunity}
            className="mt-3 mb-5 bg-sky-400 rounded-full px-2 ring hover:bg-violet-200 cursor-pointer"
          >
            Join Our Community
          </button>
        </div>
      </div>
    </div>
  );
}

export default Community;
