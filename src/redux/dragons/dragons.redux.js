import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_DRAGONS = 'space-travellers-hub/dragons/FETCH_DRAGONS';
const ADD_RESERVATION = 'space-travellers-hub/dragons/ADD_RESERVATION';
const CANCEL_RESERVATION = 'space-travellers-hub/dragons/CANCEL_RESERVATION';
const DRAGON_API = 'https://api.spacexdata.com/v3/dragons';

const initialState = [];

const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_DRAGONS}/fulfilled`:
      return action.payload;
    case ADD_RESERVATION:
      return state.map((dragon) => {
        if (dragon.id === action.payload) {
          return {
            ...dragon,
            reserved: true,
          };
        }
        return dragon;
      });
    case CANCEL_RESERVATION:
      return state.map((dragon) => {
        if (dragon.id === action.payload) {
          return {
            ...dragon,
            reserved: false,
          };
        }
        return dragon;
      });
    default:
      return state;
  }
};

// ACTION CREATORS
// fetch dragons
// restructure incoming data
const restructureDragon = (data) => {
  const dragonContainer = [];
  data.forEach((element) => {
    const dragon = {};
    dragon.id = element.id;
    dragon.name = element.name;
    dragon.type = element.type;
    dragon.description = element.description;
    dragon.flickr_images = element.flickr_images;
    dragon.reserved = false;
    dragonContainer.push(dragon);
  });
  return dragonContainer;
};
// fetch incoming data
export const fetchDragons = createAsyncThunk(
  FETCH_DRAGONS,
  async () => {
    const response = await axios.get(DRAGON_API);
    const { data } = response;
    return restructureDragon(data);
  },
);
// add reservation
export const addReservation = (id) => ({
  type: ADD_RESERVATION,
  payload: id,
});
// cancel reservation
export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});

export default dragonsReducer;
