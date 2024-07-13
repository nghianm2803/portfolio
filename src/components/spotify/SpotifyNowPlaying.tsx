'use client'

import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { getNowPlaying } from './SpotifyAPI'
import { SpotifyIcon } from '../about/Stack'
import './spotify.css'
import { ISong } from './types'

const SpotifyNowPlaying: FC = () => {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState<ISong>({
    isPlaying: false,
    albumImageUrl: '',
    songUrl: '',
    artist: '',
    name: '',
  })

  const fetchNowPlaying = async () => {
    const nowPlaying = await getNowPlaying()
    if (nowPlaying) {
      setResult(nowPlaying as ISong)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNowPlaying()
    const interval = setInterval(fetchNowPlaying, 10000)
    return () => clearInterval(interval)
  }, [])

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
                alt={`${result.name} album art`}
                width={52}
                height={52}
                className="spotify__img"
              />
              <div className="spotify__contents">
                <div className="spotify__song">
                  <SpotifyIcon />
                  <p className="spotify__text">{result.name}</p>
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
