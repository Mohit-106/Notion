import React from "react";
import "../Styles/footer.css"; // Don't forget to add your CSS
import logo from "../Assests/Frame.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { FiGlobe } from "react-icons/fi";
const Footer = () => {
  const iconStyle = {
    fontSize: "1.5rem", // Adjust the size as needed
    color: "#808080", // Set your preferred grey color
    margin: "0 10px", // Add some margin between icons
  };
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // State to track selected language
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown visibility

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <div className="logo2">
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <div className="icns">
              <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
              <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
              <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
              <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
              <FontAwesomeIcon icon={faYoutube} style={iconStyle} />
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li>Wikis</li>
            <li>Projects</li>
            <li>Docs</li>
            <li>Notion AI</li>
            <li>What’s new</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Download</h3>
          <ul>
            <li>iOS & Android</li>
            <li>Mac & Windows</li>
            <li>Web Clipper</li>

            <li>Webinars</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Get started</h3>
          <ul>
            <li>Switch from Confluence</li>
            <li>Switch from Asana</li>
            <li>Switch from Evernote</li>
            <li>Compare vs Monday</li>
            <li>Compare vs Clickup</li>
          </ul>
        </div>
      </div>
      <div className="footer-row2">
        <div className="footer-column2">
          <div className="language-dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FiGlobe className="globe-icon" />
              {selectedLanguage} <span className="caret">&#9660;</span>
            </button>
            {isOpen && (
              <div className="dropdown-contents">
                <button
                  className="language-option"
                  onClick={() => handleLanguageChange("English")}
                >
                  English
                </button>
                <button
                  className="language-option"
                  onClick={() => handleLanguageChange("Spanish")}
                >
                  Spanish
                </button>
                <button
                  className="language-option"
                  onClick={() => handleLanguageChange("Hindi")}
                >
                  Hindi
                </button>
                <button
                  className="language-option"
                  onClick={() => handleLanguageChange("French")}
                >
                  French
                </button>
                {/* <button
                  className="language-option"
                  onClick={() => handleLanguageChange("Spanish")}
                >
                  German
                </button>
                <button
                  className="language-option"
                  onClick={() => handleLanguageChange("Spanish")}
                >
                  Japanese
                </button>
                <button
                  className="language-option"
                  onClick={() => handleLanguageChange("Spanish")}
                >
                  Korean
                </button> */}
              </div>
            )}
          </div>
        </div>
        <div className="footer-column2">
          <h3>Solutions</h3>
          <ul>
            <li>Wikis</li>
            <li>Projects</li>
            <li>Docs</li>
            <li>Notion AI</li>
            <li>What’s new</li>
          </ul>
        </div>
        <div className="footer-column2">
          <h3>Build</h3>
          <ul>
            <li>iOS & Android</li>
            <li>Mac & Windows</li>
            <li>Web Clipper</li>

            <li>Webinars</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-column2">
          <h3>Resources</h3>
          <ul>
            <li>Switch from Confluence</li>
            <li>Switch from Asana</li>
            <li>Switch from Evernote</li>
            <li>Compare vs Monday</li>
            <li>Compare vs Clickup</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
