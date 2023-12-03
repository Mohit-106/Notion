import React from "react";
import "../Styles/navbar.css";
import logo from "../Assests/Frame.svg";
import { BiChevronDown } from "react-icons/bi";
import { FaRobot, FaBook, FaBullseye, FaRegFileAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <div className="ddm">
            <a href="#product">Product</a>
            <div className="dd">
              <BiChevronDown />
            </div>
          </div>

          <div className="dropdown-content">
            <div className="inside2">
              <FaRobot size={18} color="#9D34DA" />
              <p>Notion</p>
            </div>
            <div className="inside2">
              <FaBullseye size={18} color="#0A85D1" />
              <p>Wikiss</p>
            </div>
            <div className="inside2">
              <FaBook size={18} color="#EA4E43" />
              <p>Project</p>
            </div>
            <div className="inside2">
              <FaRegFileAlt size={18} color="#FAA700" />
              <p>Docms</p>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <div className="ddm">
            <a href="#product">Download</a>
            <div className="dd">
              <BiChevronDown />
            </div>
          </div>

          <div className="dropdown-content">
            <a href="#features">iOS & Android</a>
            <a href="#pricing">Mac & Windows</a>
            <a href="#pricing">Web Clipper</a>
          </div>
        </li>
        <li className="nav-item">
          <div className="ddm">
            <a href="#product">Solutions</a>
            <div className="dd">
              <BiChevronDown />
            </div>
          </div>

          <div className="dropdown-content">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
          </div>
        </li>
        <li className="nav-item">
          <div className="ddm">
            <a href="#product">Resources</a>
            <div className="dd">
              <BiChevronDown />
            </div>
          </div>

          <div className="dropdown-content">
            <a href="#features">Blogs</a>
            <a href="#pricing">Guids & Tutorials</a>
          </div>
        </li>
        <li className="nav-item">
          <div className="ddm">
            <a href="#product">Pricing</a>
          </div>
        </li>
      </ul>
      <div className="right-nav">
        <div className="request-demo">
          <a href="#request-demo">Request a demo</a>
        </div>
        <div className="request-demo">
          <a href="#login">Log in</a>
        </div>
        <button className="get-notion-free">Get Notion Free</button>
        <div className="Hamburger">
          <GiHamburgerMenu size={30} /> {/* Change size as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
