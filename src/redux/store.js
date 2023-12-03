import { configureStore, combineReducers } from '@reduxjs/toolkit'
import postsSlice from './posts'
import usersSlice from './users'
import albumsSlice from './albums'

const store = configureStore({
    reducer: combineReducers({
      users: usersSlice.reducer,
      posts: postsSlice.reducer,
      albums: albumsSlice.reducer
    }),
  })

export default store