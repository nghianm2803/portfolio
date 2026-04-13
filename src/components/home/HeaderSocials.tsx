import React, { FC } from 'react'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const HeaderSocials: FC = () => {
  return (
    <div className="flex justify-center gap-6 my-6 z-10">
      <a
        href="https://www.linkedin.com/in/nghianm2803/"
        className="text-xl transition-opacity hover:opacity-70"
        style={{ color: '#0A66C2' }}
        target="_blank"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/nghianm2803"
        className="text-xl text-gray-900 dark:text-gray-100 transition-opacity hover:opacity-70"
        target="_blank"
        aria-label="Github"
      >
        <FaGithub />
      </a>
      <a
        href="https://leetcode.com/u/nghianm2803/"
        className="text-xl transition-opacity hover:opacity-70"
        style={{ color: '#FFA116' }}
        target="_blank"
        aria-label="Leetcode"
      >
        <SiLeetcode />
      </a>
      <a
        href="https://t.me/DooCharSiu"
        className="text-xl transition-opacity hover:opacity-70"
        style={{ color: '#26A5E4' }}
        target="_blank"
        aria-label="Telegram"
      >
        <FaTelegram />
      </a>
    </div>
  )
}

export default HeaderSocials
