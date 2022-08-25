import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rockets from '../Components/rockets/rockets';
import store from '../redux/configureStore';
import { rocketReducer } from '../redux/rockets/actions_reducers';

describe('test rocket component', () => {
  test('Rockets should be in the document', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const rockets = screen.getByRole('list');
    expect(rockets).toBeInTheDocument();
  });
});

describe('test reducer', () => {
  test('reducer has default state', () => {
    const result = () => rocketReducer(undefined, { type: undefined });
    expect(result()).toEqual([]);
  });
  test('Fetch Rockets action should return payload', () => {
    const result = () => rocketReducer(undefined, { type: 'FETCH_ROCKETS', payload: 'Payload data' });
    expect(result()).toEqual('Payload data');
  });
  test('Reservation', () => {
    const state = [{
      id: 1,
      name: 'test rocket',
    }];
    const result = () => rocketReducer(state, { type: 'RESERVATION', id: 1 });
    expect(result()).toEqual([{
      id: 1,
      name: 'test rocket',
      reserved: true,
    }]);
  });
  test('Cancel reservation', () => {
    const state = [{
      id: 1,
      name: 'test rocket',
      reserved: true,
    }];
    const result = () => rocketReducer(state, { type: 'CANCELLATION', id: 1 });
    expect(result()).toEqual([{
      id: 1,
      name: 'test rocket',
      reserved: false,
    }]);
  });
});
