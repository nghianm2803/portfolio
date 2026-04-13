'use client'

import React, { FC, useState } from 'react'
import ToggleTheme from './ToggleTheme'

const navLinks = [
  { href: '#home', icon: 'icon-home', label: 'home' },
  { href: '#about', icon: 'icon-user-following', label: 'about' },
  { href: '#resume', icon: 'icon-graduation', label: 'resume' },
  { href: '#work', icon: 'icon-layers', label: 'work' },
  { href: '#contact', icon: 'icon-bubble', label: 'contact' },
]

const Sidebar: FC = () => {
  const [toggle, showMenu] = useState(false)

  return (
    <>
      <aside
        className={`fixed top-0 w-[110px] min-h-screen bg-white dark:bg-neutral-900 border-r border-gray-200 dark:border-neutral-800 px-6 py-10 flex flex-col justify-between z-10 transition-[left] duration-300 ${
          toggle ? 'left-0' : '-left-[110px] lg:left-0'
        }`}
      >
        <nav>
          <ul className="flex flex-col gap-4">
            <li className="-ml-1 mb-3">
              <ToggleTheme />
            </li>
            {navLinks.map(({ href, icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-2xl text-gray-900 dark:text-gray-100 hover:opacity-40 transition-opacity"
                  aria-label={label}
                >
                  <i className={icon} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <span
          className="text-xs text-gray-400 dark:text-gray-600"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(-180deg)' }}
        >
          &copy; 2023 by{' '}
          <a
            href="https://github.com/nghianm2803"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            NghiaNM
          </a>
        </span>
      </aside>

      {/* Mobile toggle */}
      <button
        className={`fixed top-5 lg:hidden w-10 h-10 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg flex items-center justify-center z-20 text-gray-900 dark:text-gray-100 transition-[left] duration-300 ${
          toggle ? 'left-[130px]' : 'left-5'
        }`}
        onClick={() => showMenu(!toggle)}
        aria-label="Toggle Menu"
      >
        <i className="icon-menu text-lg" />
      </button>
    </>
  )
}

export default Sidebar
