import React, { useState } from "react";
import "../Styles/body3.css";
import { FaRobot, FaBook, FaBullseye, FaRegFileAlt } from "react-icons/fa";
import {
  FaCode,
  FaPalette,
  FaBox,
  FaBullhorn,
  FaCog,
  FaUsers,
} from "react-icons/fa";
import image from "../Assests/avatars.webp";
import image2 from "../Assests/notion-parade.webp";

const Body3 = () => {
  return (
    <div className="button-box">
      <p className="mtxt">
        Every team, side-by-side
      </p>
      <div className="buttons">
        <button id="button5">
          <div className="inside">
            <FaCode size={38} color="black" />
          </div>
          <p style={{ color: "#2E2E2D" }}>Engineering</p>
        </button>
        <button id="button6">
          <div className="inside">
            <FaPalette size={38} color="black" />
          </div>
          <p style={{ color: "#2E2E2D" }}>Design</p>
        </button>
        <button id="button7">
          <div className="inside">
            <FaBox size={38} color="black" />
          </div>
          <p style={{ color: "#2E2E2D" }}>Product</p>
        </button>
        <button id="button8">
          <div className="inside">
            <FaBullhorn size={38} color="black" />
          </div>
          <p style={{ color: "#2E2E2D" }}>Marketing</p>
        </button>
        <button id="button9">
          <div className="inside">
            <FaCog size={38} color="black" />
          </div>
          <p style={{ color: "#2E2E2D" }}>Operations</p>
        </button>
        <button id="button9">
          <div className="inside">
            <FaUsers size={38} color="black" />
          </div>
          <p style={{ color: "#2E2E2D" }}>HR</p>
        </button>
      </div>
      <p className="mtxt">
        Join a global movement.
        <br />
        Unleash your creativity.
      </p>
     
      <div className="avtr">
        <img src={image} alt="Logo" />
      </div>
      <div className="tbuttons">
        <button id="button10">
          <div className="gg">
            <p className="txt" style={{ color: "#0A85D1" }}>
              1M+ <br />
            </p>
            <p style={{ color: "#2E2E2D" }}>community members</p>
          </div>
        </button>
        <button id="button11">
          <div className="gg">
            <p className="txt" style={{ color: "#0A85D1" }}>
              150+ <br />
            </p>
            <p style={{ color: "#2E2E2D" }}>community groups</p>
          </div>
        </button>
        <button id="button12">
          <div className="gg">
            <p className="txt" style={{ color: "#0A85D1" }}>
              50+ <br />
            </p>
            <p style={{ color: "#2E2E2D" }}>countries represented</p>
          </div>
        </button>
      </div>
      <p className="mtxt">
        Get started for free
      </p>
      <p className="stxt" style={{ fontSize: "24px", margin: "20px 5px" }}>
        Play around with it first. Pay and add your team later.
      </p>
      <div className="button-container">
        <button className="free-button">Try Notion free</button>
        <button className="demo-button">Request a demo</button>
      </div>
      <div className="avtr2">
        <img src={image2} alt="Logo" />
      </div>
      <div className="horizontal-line"></div>
    </div>
  );
};

export default Body3;
