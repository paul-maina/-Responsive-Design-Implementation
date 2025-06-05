function Navbar() {
  return (
    <div className="p-5 font-serif">
      <div className="flex items-center justify-evenly space-x-10 overflow-x-auto whitespace-nowrap">
        
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/" className="hover:text-gray-400">About</a></li>
          <li><a href="/" className="hover:text-gray-400">Services</a></li>
        </ul>

        
        <img src="telix_logo.png" alt="Telix Logo" className="h-9 w-auto" />

        
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="/" className="hover:text-gray-400">Resources</a></li>
          <li><a href="/" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
