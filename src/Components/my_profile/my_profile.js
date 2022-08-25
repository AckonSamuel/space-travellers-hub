import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './my_profile.css';
import { PopulateMissionProfile } from '../../redux/missions/missions';
import { selectAllDragons } from '../../redux/dragons/dragons.redux';

const Myprofile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer);
  const dragons = useSelector(selectAllDragons);
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
        <ul className="reservedCont">
          { dragons.map((dragon) => (dragon.reserved === true ? (
            <li className="reservedItem" key={dragon.id}>
              {' '}
              {dragon.name}
              {' '}
            </li>
          ) : null))}
        </ul>
      </section>
    </div>
  );
};

export default Myprofile;
