import React from "react";

const slackDisclaimer =
  "This product is not endorsed by, affiliated with, " +
  "or supported by Slack Technologies, Inc.";

function Footer(/* props */) {
  return (
    <footer className="mh3 mb3 dark-gray f5">
      <p>{slackDisclaimer}</p>
      <p>
        Copyright © 2017{" "}
        <a
          className="link dark-blue hover-blue underline"
          href="https://mockbrian.com"
        >
          Brian Mock
        </a>{" "}
        🤓
      </p>
    </footer>
  );
}

export default Footer;
