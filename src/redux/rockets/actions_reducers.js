const FETCH_ROCKETS = 'FETCH_ROCKETS';
const RESERVATION = 'RESERVATION';
const CANCELLATION = 'CANCELLATION';
const rocketApi = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = async (dispatch) => {
  try {
    const response = await fetch(rocketApi).then((res) => res.json());
    dispatch({ type: FETCH_ROCKETS, payload: response });
  } catch (error) {
    console.log(error);
  }
};

const bookRockets = (id) => ({
  type: RESERVATION,
  id,
});

const cancelBooking = (id) => ({
  type: CANCELLATION,
  id,
});

const rocketReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    case RESERVATION:
      newState = state.map((rocket) => {
        if (rocket.id === action.id) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return newState;
    case CANCELLATION:
      newState = state.map((rocket) => {
        if (rocket.id === action.id) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      return newState;
    default:
      return state;
  }
};

export {
  fetchRockets, rocketReducer, bookRockets, cancelBooking,
};
