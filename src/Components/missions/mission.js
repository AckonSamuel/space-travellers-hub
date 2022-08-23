import React from 'react';
import MissionSkeleton from './MissionSkeleton';

const Mission = () => (
  <section className="super-mission">
    <div className="header-container">
      <p>Mission</p>
      <p className="hola">Description</p>
      <p className="status">Status</p>
      <p className="join">Join</p>
    </div>
    <div className="mission-container>">
      <MissionSkeleton />
    </div>
  </section>
);

export default Mission;
