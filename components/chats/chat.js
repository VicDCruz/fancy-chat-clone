import React from 'react';
import PropTypes from 'prop-types';
import User from '../user';

const Chat = ({ username = '', imageUrl = '', description = '' }) => (
  <div className="my-auto px-2 rounded-lg hover:bg-gray-100 py-3 flex">
    <div className="w-full">
      <User name={username} imageUrl={imageUrl} description={description} />
    </div>
    <p className="caption text-gray-400">11:15</p>
  </div>
);

Chat.propTypes = {
  username: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
};

export default Chat;
