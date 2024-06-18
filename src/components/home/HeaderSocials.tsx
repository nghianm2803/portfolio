import React, { FC } from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials: FC = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.linkedin.com/in/nghianm2803/"
        className="home__social-link"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/nghianm2803"
        className="home__social-link"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a
        href="https://leetcode.com/u/nghianm2803/"
        className="home__social-link"
        target="_blank"
      >
        <SiLeetcode />
      </a>
      <a
        href="https://t.me/DooCharSiu"
        className="home__social-link"
        target="_blank"
      >
        <FaTelegram />
      </a>
    </div>
  );
};

export default HeaderSocials;
