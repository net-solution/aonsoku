import { ISong } from './song'
import { SubsonicResponse } from './subsonicResponse'

export interface Genre {
  name: string
}

export interface DiscTitle {
  disc: number
}

export interface OriginalReleaseDate {}

export interface Albums {
  id: string
  name: string
  artists: { name: string; id: string }[]
  year?: number
  genre?: string
  coverArt: string
  duration: number
  playCount?: number
  created: string
  starred?: string
  songCount: number
}

export interface SingleAlbum {
  id: string
  name: string
  artist: string
  artistId: string
  artists: { name: string; id: string }[]
  coverArt: string
  songCount: number
  duration: number
  playCount?: number
  created: string
  starred?: string
  year?: number
  genre: string
  played?: string
  userRating: number
  genres: Genre[]
  musicBrainzId: string
  isCompilation: boolean
  sortName: string
  discTitles: DiscTitle[]
  originalReleaseDate: OriginalReleaseDate
  song: ISong[]
}

export interface AlbumList {
  album: Albums[]
}

export interface AlbumListResponse
  extends SubsonicResponse<{ albumList2: AlbumList }> {}

export interface GetAlbumResponse
  extends SubsonicResponse<{ album: SingleAlbum }> {}

export interface IAlbumInfo {
  notes?: string
  musicBrainzId?: string
  lastFmUrl?: string
  smallImageUrl?: string
  mediumImageUrl?: string
  largeImageUrl?: string
}

export interface AlbumInfoResponse
  extends SubsonicResponse<{ albumInfo: IAlbumInfo }> {}

export type AlbumListType =
  | 'random'
  | 'newest'
  | 'frequent'
  | 'recent'
  | 'byGenre'
  | 'alphabeticalByName'
  | 'alphabeticalByArtist'
  | 'starred'
  | 'byYear'
  | 'search'

export interface AlbumsListData {
  albumsCount: number
  list: Albums[]
}
