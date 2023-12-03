import React, { useState } from "react";
import "../Styles/body2.css";
import { FaRobot, FaBook, FaBullseye, FaRegFileAlt } from "react-icons/fa";
import {
  AiOutlineStar,
  AiOutlineBook,
  AiOutlineFundProjectionScreen,
  AiOutlineFileText,
} from "react-icons/ai";

const ButtonBox = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [content, setContent] = useState("Notion utilizes AI-powered collaborative tools that adapt to user preferences, facilitating seamless communication, real-time editing, and customized layouts, fostering a more efficient collaborative environment.");

  const handleMouseEnter = (buttonId) => {
    setActiveButton(buttonId);
    switch (buttonId) {
      case "button1":
        setContent("Notion leverages AI algorithms to streamline workflows, offering personalized task recommendations, automating repetitive processes, and intelligently organizing information for improved productivity.");
        break;
      case "button2":
        setContent("Notion integrates AI-driven features for intuitive content categorization and search, allowing users to swiftly access relevant data, documents, and insights through smart tagging and context-based suggestions.");
        break;
      case "button3":
        setContent("Through machine learning, Notion provides predictive insights, anticipating user needs by suggesting next steps, flagging deadlines, and offering recommendations to optimize task management and collaboration.");
        break;
      case "button4":
        setContent("Notion utilizes AI-powered collaborative tools that adapt to user preferences, facilitating seamless communication, real-time editing, and customized layouts, fostering a more efficient collaborative environment.");
        break;
      default:
        setContent("Notion utilizes AI-powered collaborative tools that adapt to user preferences, facilitating seamless communication, real-time editing, and customized layouts, fostering a more efficient collaborative environment.");
    }
  };

  const handleMouseLeave = () => {
    setActiveButton(null);
    setContent("Notion utilizes AI-powered collaborative tools that adapt to user preferences, facilitating seamless communication, real-time editing, and customized layouts, fostering a more efficient collaborative environment.");
  };

  const animateContent = () => {
    const contentBox = document.getElementById("content-box");
    contentBox.style.transform = "scale(1.2)";
    contentBox.style.opacity = 1;
    setTimeout(() => {
      contentBox.style.transform = "scale(1)";
      contentBox.style.opacity = 0.75;
    }, 500);
  };
  const icons = [
    <AiOutlineStar size={30} />,
    <AiOutlineBook size={30} />,
    <AiOutlineFundProjectionScreen size={30} />,
    <FaBullseye size={30} />,
    <FaRegFileAlt size={30} />
  ];


  return (
    <div className="button-box">
      <div className="buttons">
        <div><button
          id="button1"
          onMouseEnter={() => handleMouseEnter("button1")}
          onMouseLeave={handleMouseLeave}
          className={activeButton === "button1" ? "active" : ""}
        >
          <div className="inside">
            <FaRobot size={38} color="#9D34DA" />
            <p style={{ fontWeight: "bold" }}>AI</p>
          </div>
          <p style={{ color: "#2E2E2D" }}>
            AI Now with Q&A Ask literally anything. Notion will answer.
          </p>
        </button></div>
        <div>
        <button
          id="button2"
          onMouseEnter={() => handleMouseEnter("button2")}
          onMouseLeave={handleMouseLeave}
          className={activeButton === "button2" ? "active" : ""}
        >
          <div className="inside">
            <FaBook size={38} color="#EA4E43" />
            <p style={{ fontWeight: "bold" }}>Wikis</p>
          </div>
          <p style={{ color: "#2E2E2D" }}>
            Centralize your knowledge. No more hunting for answers.
          </p>
        </button>
        </div>
       <div>
       <button
          id="button3"
          onMouseEnter={() => handleMouseEnter("button3")}
          onMouseLeave={handleMouseLeave}
          className={activeButton === "button3" ? "active" : ""}
        >
          <div className="inside">
            <FaBullseye size={38} color="#0A85D1" />
            <p style={{ fontWeight: "bold" }}>Projects</p>
          </div>
          <p style={{ color: "#2E2E2D" }}>
            Manage complex projects without the chaos.
          </p>
        </button>
       </div>
       <div>
       <button
          id="button4"
          onMouseEnter={() => handleMouseEnter("button4")}
          onMouseLeave={handleMouseLeave}
          className={activeButton === "button4" ? "active" : ""}
        >
          <div className="inside">
            <FaRegFileAlt size={38} color="#FAA700" />
            <p style={{ fontWeight: "bold" }}>Docs</p>
          </div>
          <p style={{ color: "#2E2E2D" }}>
            Simple, powerful, beautiful. Next-gen notes & docs.{" "}
          </p>
        </button>
       </div>
        
      </div>
      <div id="content-box" onMouseEnter={animateContent}>
        <div className="icon-container">
          {icons.map((icon, index) => (
            <div className="inside_Box">
              <div key={index} className="icon">
                {icon}
              </div>
              <div>{content}</div>
            </div>
          ))}
        </div>
      </div>
      

    </div>
  );
};

export default ButtonBox;
