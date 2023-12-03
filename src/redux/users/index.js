import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from './usersReducer'

const initialState = {
  users: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: build => {
    build.addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users = payload
    })
}
})

export const {} = usersSlice.actions

export default usersSlice