import React from "react";

const Me = () => {
  return (
    <>
      <div className="me">
        <h5>Built with🤍</h5>
        <h3>made by:</h3>
        <h4>Parul Gupta</h4>
        <p>
          {" "}
          Creating memorable websites and apps with outstanding UI/UX designs.
        </p>
        <a
          className="me-pic"
          target="_blank"
          href="https://parul2908.github.io/Responsive-Personal-Portfolio-Website/"
          rel="noreferrer"
        >
          <img
            src=""
            alt="Me"
          />
        </a>
        <a
          target="_blank"
          href="https://parul2908.github.io/Responsive-Personal-Portfolio-Website/#about"
          rel="noreferrer"
          className="me-btn-1-con"
        >
          <button className="me-btn me-btn-1">more about me</button>
        </a>
        <a
          target="_blank"
          href="https://parul2908.github.io/Responsive-Personal-Portfolio-Website/#contact"
          className="me-btn-2-con"
          rel="noreferrer"
        >
          <button className="me-btn me-btn-2">contact me</button>
        </a>
        <a
          target="_blank"
          href="https://parul2908.github.io/Responsive-Personal-Portfolio-Website/#projects"
          className="me-btn-3-con"
          rel="noreferrer"
        >
          <button className="me-btn me-btn-3">more by Me</button>
        </a>
      </div>
    </>
  );
};

export default Me;
