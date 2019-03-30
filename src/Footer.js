import React from "react";

function Footer(/* props */) {
  return (
    <footer className="mh3 mb3 dark-gray f5">
      <p>
        This product is not endorsed by, affiliated with, or supported by Slack
        Technologies, Inc.
      </p>
      <p>
        Copyright &copy; {new Date().getFullYear() + " "}
        <a
          className="link dark-blue hover-blue underline"
          href="https://mockbrian.com"
        >
          Brian Mock
        </a>{" "}
        <span role="img" aria-label="nerd face emoji">
          🤓
        </span>
      </p>
    </footer>
  );
}

Footer.displayName = "Footer";

export default Footer;
