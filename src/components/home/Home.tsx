import React, { FC } from 'react'
import './home.css'
import Image from 'next/image'
import Avatar1 from '../../assets/Avatar1.png'
import HeaderSocials from './HeaderSocials'
import Shapes from './Shapes'
import SpotifyNowPlaying from '../spotify/SpotifyNowPlaying'

const Home: FC = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <Image src={Avatar1} alt="" className="home__img" />
        <h1 className="home__name">Minh Nghia</h1>
        <span className="home__education">
          I&apos;m a Web Developer who is eager to learn, coding as a hobby.
        </span>
        <HeaderSocials />
        <SpotifyNowPlaying />

        <div className="scroll__down">
          <a href="#about" className="mouse__wrapper">
            <span className="home__scroll-name">Scroll Down</span>
            <span className="mouse">
              <span className="wheel" />
            </span>
          </a>
        </div>
      </div>
      <Shapes />
    </section>
  )
}

export default Home
