import React from "react";

// Styling
import "components/Footer/footer.scss";

const Footer = () => (
  <div className="footer">
    <ul>
      <li>
        Copyright &copy;
        <a
          style={{ marginRight: "5px" }}
          href="https://www.linkedin.com/in/qthuynh9501/"
        >
          quoc
        </a>
        {new Date().getFullYear()}
      </li>
    </ul>
  </div>
);

export default Footer;
