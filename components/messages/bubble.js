import React from 'react';
import PropTypes from 'prop-types';

const DIRECTIONS = ['right', 'left'];

function Bubble({ message = '', orientation = DIRECTIONS[0] }) {
  return (
    <div
      className={`rounded-lg px-2 py-3 max-w-max ${
        orientation === DIRECTIONS[0]
          ? 'rounded-br-none bg-secondary-300 shadow-inner self-end ml-1'
          : 'rounded-bl-none bg-white shadow-md mr-5'
      }`}
    >
      {message}
    </div>
  );
}

Bubble.propTypes = {
  message: PropTypes.string,
  orientation: PropTypes.oneOf(DIRECTIONS),
};

export default Bubble;
