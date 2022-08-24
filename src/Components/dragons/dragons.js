import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { fetchDragons, selectAllDragons } from '../../redux/dragons/dragons.redux';
import BabyDragon from './BabyDragon';

const Dragon = () => {
  const dragons = useSelector(selectAllDragons);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!dragons.length) {
      dispatch(fetchDragons());
    }
  }, []);

  return (
    <section>
      <ul>
        {dragons.map((dragon) => (
          <BabyDragon
            dragon={dragon}
            key={dragon.id}
            id={dragon.id}
            name={dragon.name}
            type={dragon.type}
            description={dragon.description}
            image={dragon.flickr_images[0]}
            reserved={dragon.reserved}
          />
        ))}
      </ul>
    </section>
  );
};

export default Dragon;
