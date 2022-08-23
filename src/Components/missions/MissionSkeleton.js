import React from 'react';
import Proptypes from 'prop-types';
import './missions.css';

const MissionSkeleton = ({name, description, status, id}) => (
  <div className="mission-table">
    <h2>{name}</h2>
    <p className="mission-description">
      {description}
    </p>
    <p className="mission-status member">
      Active member
    </p>
    <button type="button" id={id} className="mission-button leave"> Leave mission</button>
  </div>
);

export default MissionSkeleton;
