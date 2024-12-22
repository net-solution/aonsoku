import { SubsonicResponse } from './subsonicResponse'

export interface IReplayGain {
  trackGain: number
  trackPeak: number
  albumPeak: number
}

export interface IGenre {
  name: string
}

export interface ILyric {
  artist?: string
  title?: string
  value?: string
}

export interface ISong {
  id: string
  parent: string
  isDir: boolean
  title: string
  album: string
  artist: string
  artistId: string
  artists: { name: string; id: string }[]
  track: number
  year: number
  genre?: string
  coverArt: string
  size: number
  contentType: string
  suffix: string
  duration: number
  bitRate: number
  path: string
  playCount?: number
  discNumber: number
  created: string
  albumId: string
  type: string
  isVideo: boolean
  played?: string
  bpm: number
  starred?: string
  comment: string
  sortName: string
  mediaType: string
  musicBrainzId: string
  genres: IGenre[]
  replayGain: IReplayGain
}

export interface SongList {
  song: ISong[]
}

export interface RandomSongsResponse
  extends SubsonicResponse<{ randomSongs: SongList }> {}

export interface TopSongsResponse
  extends SubsonicResponse<{ topSongs: SongList }> {}

export interface LyricsResponse extends SubsonicResponse<{ lyrics: ILyric }> {}

export interface GetSongResponse extends SubsonicResponse<{ song: ISong }> {}
