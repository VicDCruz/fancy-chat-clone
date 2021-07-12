import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

const MessageBox = props => {
  const [message, setMessage] = useState('');
  return (
    <div className="px-4 py-2 mt-2 mx-3 mb-3 w-auto flex gap-3 items-center sticky bottom-0 bg-white shadow-md rounded-lg">
      <input
        // className="bg-gray-700"
        type="text"
        name="message"
        id="message"
        onChange={e => setMessage(e.target.value)}
        placeholder="Write your message..."
      />
      <Icon size="small" type="emoji" />
      <Icon size="small" type="clip" />
      <Icon color="primary" type="send" />
    </div>
  );
};

MessageBox.propTypes = {};

export default MessageBox;
