import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import MissionSkeleton from './MissionSkeleton';
import './missions.css';

const Mission = () => {
  const missions = useSelector((state) => state.missionReducer, shallowEqual);

  return (
    <section className="super-mission">
      <div className="header-container">
        <p>Mission</p>
        <p className="hola">Description</p>
        <p className="status">Status</p>
        <p className="join">Join</p>
      </div>
      <div className="mission-container>">
        { missions.map((mission) => (
          <MissionSkeleton
            key={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            id={mission.mission_id}
            status={mission.reserved}
          />
        ))}
      </div>
    </section>
  );
};

export default Mission;
