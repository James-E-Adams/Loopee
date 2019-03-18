import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => (
  <div className="mb-3 text-center">
    <div>
      <SocialIcon className="mr-2" url="https://github.com/James-E-Adams" />
      <SocialIcon className="mr-2" url="https://twitter.com/jamesadams0" />
      <SocialIcon url="https://medium.com/@jamesadams0" />
    </div>
    <div className="mt-2 italic text-lg">
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>{" "}
      by <a href="https://james.now.sh"> James Adams </a>
    </div>
  </div>
);

export default Footer;
