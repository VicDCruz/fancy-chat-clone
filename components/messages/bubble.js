import React from 'react';
import PropTypes from 'prop-types';

const DIRECTIONS = ['right', 'left'];

function Bubble({ message = '', orientation = DIRECTIONS[0] }) {
  return (
    <div className="flex flex-col gap-0.5">
      <p
        className={`caption text-gray-400 ${
          orientation === DIRECTIONS[0] ? 'self-end ml-1' : 'mr-5'
        }`}
      >
        11:26 AM
      </p>
      <div
        className={`rounded-lg px-2 py-3 max-w-max ${
          orientation === DIRECTIONS[0]
            ? 'rounded-br-none bg-secondary-300 shadow-inner self-end ml-1'
            : 'rounded-bl-none bg-white shadow-md mr-5'
        }`}
      >
        {message}
      </div>
    </div>
  );
}

Bubble.propTypes = {
  message: PropTypes.string,
  orientation: PropTypes.oneOf(DIRECTIONS),
};

export default Bubble;
