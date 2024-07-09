'use client'

import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import getNowPlayingItem from './SpotifyAPI'
import { SpotifyIcon } from '../about/Stack'
import './spotify.css'

interface IResult {
  isPlaying: boolean
  title: string
  albumImageUrl: string
  songUrl: string
  artist: string
}

const SpotifyNowPlaying: FC = () => {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState<IResult>({
    isPlaying: false,
    title: '',
    albumImageUrl: '',
    songUrl: '',
    artist: '',
  })

  useEffect(() => {
    Promise.all([getNowPlayingItem()]).then((results) => {
      if (typeof results[0] === 'object') {
        setResult(results[0])
      }
      setLoading(false)
    })
  })

  return (
    <div className="spotify__wrapper">
      {loading ? (
        <div className="loader" />
      ) : (
        <div>
          {result.isPlaying ? (
            <div className="spotify__container">
              <Image
                src={result.albumImageUrl}
                alt={`${result.title} album art`}
                width={52}
                height={52}
                className="spotify__img"
              />
              <div className="spotify__contents">
                <div className="spotify__song">
                  <SpotifyIcon />
                  <p className="spotify__text">{result.title}</p>
                  {result.isPlaying && (
                    <div className="playing__animation">
                      <span />
                      <span />
                      <span />
                    </div>
                  )}
                </div>
                <p className="spotify__text">{result.artist}</p>
              </div>
            </div>
          ) : (
            <div className="spotify__offline">
              <SpotifyIcon />
              <p className="spotify__text">Currently offline</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SpotifyNowPlaying
