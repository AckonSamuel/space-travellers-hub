import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Mission from '../Components/missions/mission';

describe('A test for missions component', () => {
  it('Check whether mission component renders', () => {
    const mission = {
      mission_id: 1,
      mission_name: 'Thaicom',
      description: 'Thaicom is the name of a series of  communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
      reserved: false,
    };
    const missionTree = renderer.create(
      <Provider store={store}>
        <Mission
          key={mission.mission_id}
          description={mission.description}
          name={mission.mission_name}
          reserved={mission.reserved}
        />
      </Provider>,
    );

    expect(missionTree).toMatchSnapshot();
  });

  it('Check if it renders correctly', () => {
    const missionTree = renderer.create(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    expect(missionTree).toMatchSnapshot();
  });
});
