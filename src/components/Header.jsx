
import React from "react";
import { FaBell, FaSearch, FaMicrophone } from "react-icons/fa";
import { MdGTranslate, MdLocationOn } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BiBuildings} from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdMegaphone} from "react-icons/io";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
    <header className="header">
      {/* Logo */}
      <div className="header-logo">
      <span className="blue">Just</span><span className="orange">dial</span>
      </div>
      
      {/* Navigation */}
      <nav className="nav-links">
        <div className="nav-item">
          <MdGTranslate color="blue"  /> EN ˅ 
        </div>
        <span className="nav-item">We are Hiring</span>
        <span className="nav-item">Investor Relations</span>
        <div className="nav-item">
          <AiOutlineMail className="icon" /> Leads
        </div>
        <div className="nav-item">
          <IoMdMegaphone className="icon" /> Advertise
        </div>
        <div className="business-container">
          <div className="business-badge">BUSINESS</div>
          <div className="nav-item">
            <BiBuildings className="icon" /> Free Listing
          </div>
        </div>
        <FaBell className="icon" />
        <button className="login-button">
           Login / Sign Up
        </button>
      </nav>
    </header>
      {/* Search Section */}
      <div className="search-section">
        <h2>Search across <span className="highlight">‘4.7 Crore+’ Businesses</span></h2>
        <div className="search-container">
          <div className="search-location">
            <MdLocationOn className="icon" />
            <input type="text" placeholder="Betkuli, Karwar" />
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search in Karwar" />
            <FaMicrophone className="icon" />
            <button className="search-button"><FaSearch /></button>
            </div>
        </div>
      </div><br /><br />
      <div classname="js">
        <button classname="bts">Download App</button></div>
     
    </div>
    
    
  );
};

export default Header;

