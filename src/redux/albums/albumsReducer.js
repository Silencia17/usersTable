import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getAlbums = createAsyncThunk(
  'getAlbums',
  async (data) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/albums`)

    return res.data
  }
)




