import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { JoinMission, LeaveMission } from '../../redux/missions'
import './missions.css';

const MissionSkeleton = ({ name, description, id, status }) => {(
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
)};

MissionSkeleton.propTypes = {
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
};

export default MissionSkeleton;
