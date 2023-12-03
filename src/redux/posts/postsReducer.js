import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getPosts = createAsyncThunk(
  'getPosts',
  async (data) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)

    return res.data
  }
)




