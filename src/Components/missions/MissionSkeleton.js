import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { JoinMission, LeaveMission } from '../../redux/missions'
import './missions.css';

const MissionSkeleton = ({ name, description, id, status }) => {
  const dispatch = useDispatch();

  const missionParticipation = () => status === false ? dispatch(JoinMission(id)) : dispatch(LeaveMission(id));
  
  return (
    <>
   { status === false ? (
    <div className="mission-table" id={id}>
    <h2>{name}</h2>
    <p className="mission-description">
      {description}
    </p>
    <div className="border">
    <p className="mission-status">
      Not a member
    </p>
    </div>
    <button type="button" id={id} onClick={missionParticipation()} className="mission-button leave"> Join mission</button>
  </div>) : (
    <div id={id} className="mission-table">
    <h2>{name}</h2>
    <p className="mission-description">
      {description}
    </p>
    <p className="mission-status member">
      Active member
    </p>
    <button type="button" id={id} onClick={missionParticipation()} className="mission-button leave"> Leave mission</button>
  </div>)}
    </>
)};

MissionSkeleton.propTypes = {
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
  status: Proptypes.string.isRequired,
};

export default MissionSkeleton;
