import React from 'react';
import PropTypes from 'prop-types';
import './Dragons.css';

const BabyDragon = ({
  name, type, description, image,
}) => (
  <li>
    <div>
      <img src={image} alt={name} className="dragon_image" />
    </div>
    <div>
      <h3>{name}</h3>
      <h5 className="type">
        (
        {type}
        )
      </h5>
      <p>{description}</p>
      <button type="button" className="reserve">Reserve Dragon</button>
    </div>
  </li>
);

BabyDragon.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
};

export default BabyDragon;
