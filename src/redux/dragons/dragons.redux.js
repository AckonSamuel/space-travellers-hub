import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_DRAGONS = 'space-travellers-hub/dragons/FETCH_DRAGONS';
const DRAGON_API = 'https://api.spacexdata.com/v3/dragons';

export const fetchDragons = createAsyncThunk(
  FETCH_DRAGONS,
  async () => {
    const response = await axios.get(DRAGON_API);
    const { data } = response;
    return data;
  },
);

const initialState = [];

const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_DRAGONS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default dragonsReducer;
