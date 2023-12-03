import { createSlice } from '@reduxjs/toolkit'
import { getAlbums } from './albumsReducer'

const initialState = {
    albums: [],
}

const albumsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: build => {
    build.addCase(getAlbums.fulfilled, (state, { payload }) => {
        state.albums = payload
    })
}
})

export const { } = albumsSlice.actions

export default albumsSlice