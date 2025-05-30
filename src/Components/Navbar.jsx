


function Navbar(){

    return (
        <div className="nav_container">
            <img src="telix_logo.png" alt="telix_logo" ></img>
                
            <div className="navbar_toggle">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
               
            </div>
            <ul className="navbar_menu">
                <li className="navbar_item"><a href="/" className="">Home</a> </li> 
                <li className="navbar_item"> <a href="/" className="">About</a> </li>
                <li className="navbar_item"> <a href="/" className="">Services</a> </li> 
                <li className="navbar_item"> <a href="/" className="">Resources</a> </li> 
                <li className="navbar_item"> <a href="/" className="">Contact</a> </li> 
            </ul>   
        </div>
    )
}


export default Navbar;