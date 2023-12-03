import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getUsers = createAsyncThunk(
  'getUsers',
  async (data) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)

    return res.data
  }
)




