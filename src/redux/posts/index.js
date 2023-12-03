import { createSlice } from '@reduxjs/toolkit'
import { getPosts } from './postsReducer'

const initialState = {
  posts: [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: build => {
    build.addCase(getPosts.fulfilled, (state, { payload }) => {
        state.posts = payload
    })
}
})

export const { } = postsSlice.actions

export default postsSlice