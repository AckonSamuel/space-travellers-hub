import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { LoadMissions } from '../../redux/missions/missions';
import MissionSkeleton from './MissionSkeleton';
import './missions.css';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer, shallowEqual);
  useEffect(() => {
    if (missions.length === 0) { dispatch(LoadMissions()); }
  }, []);

  return (
    <section className="super-mission">
      <div className="header-container">
        <p>Mission</p>
        <p className="hola">Description</p>
        <p className="status">Status</p>
        <p className="join">Join</p>
      </div>
      <ul className="mission-container>">
        { missions.map((mission) => (
          <MissionSkeleton
            key={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            id={mission.mission_id}
            status={mission.reserved}
          />
        ))}
      </ul>
    </section>
  );
};

export default Mission;
