function Partners() {
  return (
    <div className="Partners px-4 sm:px-6 lg:px-8 py-6">
      <div className="Partners_Container bg-stone-400 max-w-4xl mx-auto rounded-3xl px-6 py-5">
        <div className="Partners_content flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-6">
          <h1 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-0">Our Partners</h1>
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-30">
            <img src="https://i.imgur.com/05dEOFY.png" alt="mtek" className="h-8 w-auto" />
            <img src="https://i.imgur.com/1iAIbYa.png" alt="equity" className="h-8 w-auto" />
            <img src="https://i.imgur.com/LN2WXsh.png" alt="dawit" className="h-8 w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
