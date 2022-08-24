import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer'
import store from '../redux/configureStore';
import BabyDragon from '../Components/dragons/BabyDragon';

describe(' Test for dragon component', () => {
    it('Check if dragon component renders', () => {
        const dragon = {
         name: 'Dragon 1',
         type: 'capsule', 
         description: 'Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS)',
         flickr_image: [ '<img src="https://i.imgur.com/9fWdwNv.jpg" alt="Dragon 1" class="dragon_image">' ] , 
         reserved: false, 
         id: 'dragon 1',
        };
        const dragonTree = renderer.create(
            <Provider store={store}>
                <BabyDragon
                key={dragon.id}
                description={dragon.description}
                name={dragon.name}
                reserved={dragon.reserved}
                id={dragon.id}
                image={dragon.flickr_image[0]}
                type={dragon.type}
                />
            </Provider>
        );
        expect(dragonTree).toMatchSnapshot();
    })
})
