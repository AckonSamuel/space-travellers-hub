import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Myprofile from '../Components/my_profile/my_profile';

it('Test if my_profile renderers correctly', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <Myprofile />
        </Provider>,
    );
    expect(tree).toMatchSnapshot();
})