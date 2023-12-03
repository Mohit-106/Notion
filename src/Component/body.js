import React from "react";
import "../Styles/body.css";
import img from "../Assests/Image.png";
const Body = () => {
  return (
    <>
      <div className="m-text">
        <p className="t1">Write, plan, share.</p>
        <p className="t2">With AI at your side.</p>
        <p className="t3">
          Notion is the connected workspace where better, faster work happens.
        </p>
      </div>
      <div className="btn">
        <button className="get-notion-free">Get Notion Free</button>
      </div>
      <div className="img">
        <img src={img} alt="Logo" />
      </div>
    </>
  );
};

export default Body;
