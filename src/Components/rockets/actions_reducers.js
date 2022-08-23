const FETCH_ROCKETS = 'FETCH_ROCKETS';
const rocketApi = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = async(dispatch) => {
    try {
        const response = await fetch(rocketApi).then(res => res.json())
        dispatch({type: FETCH_ROCKETS, payload: response});
        return response;
    }
    catch (error) {
        console.log(error);
    }
};


const rocketReducer = (state=[], action) => {
    if(action.type === FETCH_ROCKETS){
        console.log(action.payload.forEach(a => console.log(a.description)));
        return action.payload
    }
    else return state;
};


export {fetchRockets, rocketReducer};
