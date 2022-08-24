import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './my_profile.css';
import { PopulateMissionProfile } from '../../redux/missions/missions';

const Myprofile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer);
  const rockets = useSelector((state) => state.rocket);

  useEffect(() => {
    dispatch(PopulateMissionProfile());
  }, []);

  return (
    <div className="myProfile">
      <section className="my-comp">
        <h2>My Mission</h2>
        <ul className="reservedCont">
          { missions.map((mission) => (mission.reserved === true ? (
            <li className="reservedItem" key={mission.mission_id}>
              {' '}
              {mission.mission_name}
              {' '}
            </li>
          ) : null))}
        </ul>
      </section>
      <section className="my-comp">
        <h2>My Rockets</h2>
        <ul className="reservedCont">
          { rockets.map((rocket) => (rocket.reserved ? (
            <li className="reservedItem" key={rocket.id}>{rocket.rocket_name}</li>
          ) : null))}
        </ul>
      </section>
      <section className="my-comp">
        <h2>My Dragons</h2>
      </section>
    </div>
  );
};

export default Myprofile;
