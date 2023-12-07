import React from "react"
import "./style.css";
import "./Navbar";


const Navbar = () => {
  return (
    <div className="app-container">
      <h1>Congrats! You can apply driver license!</h1>

      <nav className="navbar">
        <ul>
          <a href="/#">Home</a>
          <a href="/schedule-test">Schedule Test</a>
          <a href="/contact">Contact</a>
        </ul>
      </nav>

    </div>

    
  );
};

export default Navbar;