'use client'

import React, { FC, useState } from 'react'
import './sidebar.css'
import ToggleTheme from './ToggleTheme'

export const Sidebar: FC = () => {
  const [toggle, showMenu] = useState(false)
  return (
    <>
      <aside className={toggle ? 'aside show-menu' : 'aside'}>
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <div className="nav__theme">
                  <ToggleTheme />
                </div>
              </li>
              <li className="nav__item">
                <a href="#home" className="nav__link" aria-label="home">
                  <i className="icon-home" />
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link" aria-label="about">
                  <i className="icon-user-following" />
                </a>
              </li>

              <li className="nav__item">
                <a href="#resume" className="nav__link" aria-label="resume">
                  <i className="icon-graduation" />
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link" aria-label="work">
                  <i className="icon-layers" />
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link" aria-label="contact">
                  <i className="icon-bubble" />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">
            <p>
              &copy; 2023 Handcrafted by{' '}
              <a
                href="https://github.com/nghianm2803"
                target="_blank"
                rel="noreferrer"
                className="link__github"
              >
                NghiaNM
              </a>
            </p>
          </span>
        </div>
      </aside>
      <button
        className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'}
        onClick={() => showMenu(!toggle)}
        aria-label="Toggle Menu"
      >
        <i className="icon-menu" />
      </button>
    </>
  )
}

export default Sidebar
