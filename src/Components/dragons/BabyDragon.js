import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addReservation, cancelReservation } from '../../redux/dragons/dragons.redux';
import './Dragons.css';

const BabyDragon = ({
  name, type, description, image, reserved, id,
}) => {
  const dispatch = useDispatch();
  const handleAddReservation = () => {
    dispatch(addReservation(id));
  };

  const handleCancelReservation = () => {
    dispatch(cancelReservation(id));
  };

  return (
    <li>
      <div className="image_container">
        <img src={image} alt={name} className="dragon_image" />
      </div>
      <div className="description-container">
        <h3 className="title">{name}</h3>
        <h5 className="type">
          (
          {type}
          )
        </h5>
        <p>
          {reserved ? <span className="span">Reserved</span> : ''}
          {description}
        </p>
        {reserved ? (
          <button type="button" className="reserve cancel" onClick={handleCancelReservation}>Cancel Reservation</button>
        ) : (
          <button type="button" className="reserve" onClick={handleAddReservation}>Reserve Dragon</button>
        )}
      </div>
    </li>
  );
};

BabyDragon.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
};

export default BabyDragon;
