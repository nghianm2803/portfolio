import React, { FC } from 'react'
import Image from 'next/image'
import Avatar1 from '../../assets/Avatar1.png'
import HeaderSocials from './HeaderSocials'

const Home: FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center max-w-[1080px] mx-auto px-4"
      id="home"
    >
      <div className="flex flex-col items-center max-w-xl text-center">
        <Image
          src={Avatar1}
          alt="Minh Nghia"
          className="mb-6 rounded-full"
          priority
        />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Minh Nghia
        </h1>
        <span className="text-gray-500 dark:text-gray-400 text-base">
          I&apos;m a Mobile Developer who is eager to learn, coding as a hobby.
        </span>
        <HeaderSocials />
      </div>

      <div className="absolute bottom-40 left-0 w-full text-center">
        <a href="#about" className="inline-flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest">
            Scroll Down
          </span>
          <span className="block w-5 h-7 border border-gray-900 dark:border-gray-400 rounded-full relative mx-auto mt-1">
            <span className="wheel absolute top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-900 dark:bg-gray-400 rounded-full" />
          </span>
        </a>
      </div>
    </section>
  )
}

export default Home
