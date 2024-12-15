import React from "react";
import "../styles.css";

const Contact = () => {
  return (
    <footer className="footer">
      <h2 className="footer-heading">Reach out!</h2>
      <p className="footer-description">
        Whether it's to collaborate, if you're a new programmer needing advice,
        or if you'd just like to connect, I’d love to hear from you! Feel free
        to check me out on the platforms below!
      </p>

      <div className="contact-links">
        <a
          href="https://github.com/AlecBProxy"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button github"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/alexbarrynl/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button linkedin"
        >
          LinkedIn
        </a>
      </div>

      <a href="#top" className="back-to-top">
        Back to the Top
      </a>
    </footer>
  );
};

export default Contact;
