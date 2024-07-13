import { ISong } from './types'

const NOW_PLAYING_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!
const REFRESH_TOKEN = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN!
const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')

const getAccessToken = async (): Promise<string> => {
  if (!REFRESH_TOKEN) {
    throw new Error('Refresh token is undefined')
  }
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${BASIC}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }),
  })
  const data = await response.json()
  return data.access_token
}

export const getNowPlaying = async (): Promise<ISong> => {
  const accessToken = await getAccessToken()

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (response.status === 204 || response.status >= 400) {
    return {
      isPlaying: false,
      albumImageUrl: '',
      songUrl: '',
      name: '',
      artist: '',
    }
  }

  const song = await response.json()
  return {
    isPlaying: song.is_playing as boolean,
    albumImageUrl: song.item.album.images[0].url as string,
    songUrl: song.item.external_urls.spotify as string,
    artist: song.item.artists
      .map((artist: { name: string }) => artist.name)
      .join(', ') as string,
    name: song.item.name as string,
  }
}
