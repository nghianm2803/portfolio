import querystring from 'querystring'

const NOW_PLAYING_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN

interface IArtist {
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  name: string
  type: string
  uri: string
}

const getTokens = async (code: string) => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: querystring.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri: 'https://nghianm2803.github.io/portfolio/',
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching tokens:', error)
  }
}

const code =
  'AQBqMzr2CPWCnMEyFiGduNsuY8ktvbywggeWd5LouzAp7XwwiAk2ES52Mlk8AGlPJs2XofBt-xc9g0H0208QV6wXlBDs4XVzzRDEFRiCVjLBP5vu3Ehdkl7bVuSOJrnUS6EKwwbPNtBwK8P8msUDHJMCfQzRePLbIqEze1rXuJHZOuYGoltlfE7tC2pIZMjDL08U47ngnv6mNkEzbTqzrBL2Neri'

if (code) {
  getTokens(code).catch((error) => {
    console.error('Error getting tokens:', error)
  })
}

const getAccessToken = async () => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error refreshing token:', error)
  }
}

export const getNowPlaying = async () => {
  try {
    const { access_token } = await getAccessToken()

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching now playing:', error)
  }
}

export default async function getNowPlayingItem() {
  try {
    const song = await getNowPlaying()
    if (!song || !song.item) {
      return false
    }

    const albumImageUrl = song.item.album.images[0].url
    const artist = song.item.artists
      .map((artist: IArtist) => artist.name)
      .join(', ')
    const isPlaying = song.is_playing
    const songUrl = song.item.external_urls.spotify
    const title = song.item.name

    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    }
  } catch (error) {
    console.error('Error getting now playing item:', error)
  }
}
