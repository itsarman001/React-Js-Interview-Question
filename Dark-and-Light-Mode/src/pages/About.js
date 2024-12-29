import React from "react";

function AboutUs() {
  return (
    <div className="pages">
      <h1>AboutUs</h1>
      <p>
        Hi there! I'm <strong>Arman</strong>, a web developer based in Kolkata.
        I enjoy building responsive and user-friendly web applications.
      </p>
      <div className="social-links">
        <h5>Social Links</h5>
        <ul>
          <li>
            <a href="https://github.com/itsarman001" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/md-arman-15747b274/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
