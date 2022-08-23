import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, rocketReducer } from './actions_reducers';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocket);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchRockets)
  }, [])
console.log(rockets)
  return (
  <section className='rockets'>
    <ul>
      {rockets.map((rocket) => (
        <li>
        <img src={rocket.flickr_images[0]} alt=''/>
        <div>
          <h3>{rocket.rocket_name}</h3>
          <p>{rocket.description}</p>
          <button type='button'>Reservation</button>
        </div>
      </li>
      ))}
    </ul>
  </section>
  )
};

export default Rockets;
