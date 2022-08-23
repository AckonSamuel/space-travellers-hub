import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector, shallowEqual } from 'react-redux';
import MissionSkeleton from './MissionSkeleton';
import { LoadMissions } from '../../redux/missions/missions';
import './missions.css';

const Mission = () =>{ 
  const missions = useSelector((state) => state.missionReducer, shallowEqual)
  const dispatch = useDispatch();
  useEffect(() => {
    // if (document.querySelector('.mission-container').children.length === 0) 
     dispatch(LoadMissions());
  }, []);

  return (
  <section className="super-mission">
    <div className="header-container">
      <p>Mission</p>
      <p className="hola">Description</p>
      <p className="status">Status</p>
      <p className="join">Join</p>
    </div>
    <div className="mission-container>">
     { missions.map((mission) => (<MissionSkeleton
      key={mission.id}
      name={mission.name}
      description={mission.description}
      status={mission.reserved}
      id={mission.id} />))}
    </div>
  </section>
)};

export default Mission;
