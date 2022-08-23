import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/actions_reducers';
import './rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets);
  }, []);

  return (
    <section className="rockets">
      <ul className="rockets-list">
        {rockets.map((rocket) => (
          <li key={rocket.id} className="rocket-data">
            <img src={rocket.flickr_images[0]} alt="rocket from space X" className="rocket-image" />
            <div className="rocket-details">
              <h3>{rocket.rocket_name}</h3>
              <p>{rocket.description}</p>
              <button type="button" className="rocket-btn">Reservation</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Rockets;
