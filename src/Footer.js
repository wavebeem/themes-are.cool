import React from "react";

function Footer(/* props */) {
  return (
    <footer className="o-80 f5">
      Copyright &copy; {new Date().getFullYear() + " "}
      <a className="color-inherit b" href="https://mockbrian.com">
        Brian Mock
      </a>{" "}
      <span role="img" aria-label="nerd face emoji">
        🤓
      </span>
    </footer>
  );
}

Footer.displayName = "Footer";

export default Footer;
