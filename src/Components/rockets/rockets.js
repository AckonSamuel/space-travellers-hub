import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, bookRockets, cancelBooking } from '../../redux/rockets/actions_reducers';
import './rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets);
  }, []);

  const handleBooking = (id) => {
    dispatch(bookRockets(id));
  };

  const handleCancellation = (id) => {
    dispatch(cancelBooking(id));
  };

  return (
    <section className="rockets">
      <ul className="rockets-list">
        {rockets.map((rocket) => (
          <li key={rocket.id} className="rocket-data">
            <img src={rocket.flickr_images[0]} alt="rocket from space X" className="rocket-image" />
            <div className="rocket-details">
              <h3>{rocket.rocket_name}</h3>
              <p>{rocket.description}</p>
              <button type="button" className={`rocket-btn ${rocket.reserved ? 'hide' : ''}`} onClick={() => handleBooking(rocket.id)}>
                Reservation
              </button>
              <button type="button" className={`rocket-btn-close ${rocket.reserved ? '' : 'hide'}`} onClick={() => handleCancellation(rocket.id)}>
                Cancellation
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Rockets;
