import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './myprofile.css';
import { PopulateMissionProfile } from '../../redux/missions/missions';

const Myprofile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer);

  useEffect(() => {
    dispatch(PopulateMissionProfile());
  }, []);
  return (
    <div className="myProfile">
      <section className="my-rockets">
        <h2>My Mission</h2>
        <ul className="reservedCont">
          { missions.map((mission) => (mission.reserved === true ? (
            <li className="reservedItem" key={mission.id}>
              {' '}
              {mission.name}
              {' '}
            </li>
          ) : null))}
        </ul>
      </section>
      <section className="my-rockets">
        <h2>My Rockets</h2>
      </section>
      <section className="my-rockets">
        <h2>My Rockets</h2>
      </section>
    </div>
  );
};

export default Myprofile;
