import React from 'react';
import PropTypes from 'prop-types';
import Bubble from './bubble';

const History = props => (
  <div className="flex flex-col-reverse gap-2 px-4 mt-2">
    <Bubble message="Este es el tope" orientation="left" />
    <Bubble message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo id enim sit amet aliquam. Vivamus nec ipsum tellus. Aliquam nec mollis ante." orientation="right" />
    <Bubble message="Hola a todos 2" orientation="left" />
    <Bubble message="Hola a todos 2" orientation={Math.random() > 0.5 ? 'right' : 'left'} />
    <Bubble message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo id enim sit amet aliquam. Vivamus nec ipsum tellus. Aliquam nec mollis ante." orientation={Math.random() > 0.5 ? 'right' : 'left'} />
    <Bubble message="Hola a todos 2" orientation={Math.random() > 0.5 ? 'right' : 'left'} />
    <Bubble message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo id enim sit amet aliquam. Vivamus nec ipsum tellus. Aliquam nec mollis ante." orientation={Math.random() > 0.5 ? 'right' : 'left'} />
    <Bubble message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo id enim sit amet aliquam. Vivamus nec ipsum tellus. Aliquam nec mollis ante." orientation={Math.random() > 0.5 ? 'right' : 'left'} />
    <Bubble message="Hola a todos 2" orientation={Math.random() > 0.5 ? 'right' : 'left'} />
    <Bubble message="Hola a todos 2" orientation={Math.random() > 0.5 ? 'right' : 'left'} />
    <Bubble message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo id enim sit amet aliquam. Vivamus nec ipsum tellus. Aliquam nec mollis ante." orientation={Math.random() > 0.5 ? 'right' : 'left'} />
    <Bubble message="Hola a todos 2" orientation={Math.random() > 0.5 ? 'right' : 'left'} />
    <Bubble message="Hola a todos 2" orientation={Math.random() > 0.5 ? 'right' : 'left'} />
    <Bubble message="Hola a todos 2" orientation={Math.random() > 0.5 ? 'right' : 'left'} />
    <Bubble message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo id enim sit amet aliquam. Vivamus nec ipsum tellus. Aliquam nec mollis ante." orientation={Math.random() > 0.5 ? 'right' : 'left'} />
  </div>
);

History.propTypes = {};

export default History;
