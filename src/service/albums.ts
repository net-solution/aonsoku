import { httpClient } from '@/api/httpClient'
import {
  AlbumInfoResponse,
  AlbumListResponse,
  AlbumListType,
  GetAlbumResponse,
} from '@/types/responses/album'

export interface AlbumListParams {
  type: AlbumListType
  size?: number
  offset?: number
  fromYear?: string
  toYear?: string
  genre?: string
}

async function getAlbumList(params: Partial<AlbumListParams> = {}) {
  const {
    type = 'newest',
    size = 30,
    offset = 0,
    fromYear,
    toYear,
    genre,
  } = params

  const response = await httpClient<AlbumListResponse>('/getAlbumList2', {
    method: 'GET',
    query: {
      type,
      size: size.toString(),
      offset: offset.toString(),
      fromYear,
      toYear,
      genre,
    },
  })

  return {
    albumsCount: response?.count,
    list: response?.data.albumList2.album,
  }
}

async function getOne(id: string) {
  const response = await httpClient<GetAlbumResponse>('/getAlbum', {
    method: 'GET',
    query: {
      id,
    },
  })

  const album = response?.data.album
  console.log(album)

  if (!album) {
    throw new Error(`Album with ID ${id} not found`)
  }

  return {
    ...album,
    artists: album?.artists ?? [{ id: album?.artistId, name: album?.artist }],
  }
}

async function getInfo(id: string) {
  const response = await httpClient<AlbumInfoResponse>('/getAlbumInfo2', {
    method: 'GET',
    query: {
      id,
    },
  })

  return response?.data.albumInfo
}

export const albums = {
  getAlbumList,
  getOne,
  getInfo,
}
